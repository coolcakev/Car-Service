using Data_Access.Interfaces;
using Domain.DTOs.CarDTOs;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Repositories
{
    public class CarRepository : GenericRepository<Car>, ICarRepository
    {
        public CarRepository(ApplicationContext context) : base(context)
        {
        }
        public Task<(List<Car> entities, int total)> GetCars(CarFilteringModel filteringModel)
        {
            IQueryable<Car> query = _context.Set<Car>().Where(x => x.Name.Contains(filteringModel.SearchTerm)
                                                    && x.Price.Any(x => x.CreationDate.Date <= filteringModel.PriceDate.Date
                                                                       && x.Value > filteringModel.StartPrice));
            if (filteringModel.EndPrice > 0)
            {
                query = query.Where(x => x.Price.Any(x => x.Value < filteringModel.EndPrice));
            }
            if (!string.IsNullOrWhiteSpace(filteringModel.Engine))
            {
                query = query.Where(x => x.Engine == filteringModel.Engine);
            }
            if (!string.IsNullOrWhiteSpace(filteringModel.Color))
            {
                query = query.Where(x => x.Color == filteringModel.Color);
            }
            if (filteringModel.MarkId > 0)
            {
                query = query.Where(x => x.MarkId == filteringModel.MarkId);
            }
            if (filteringModel.ModelId > 0)
            {
                query = query.Where(x => x.ModelId == filteringModel.ModelId);
            }



            return GetFilteredWithTotalSumWithQurable(filteringModel, query,
                x => x.Include(y => y.Mark)
                             .Include(x => x.Model)
                             .Include(x => x.Price.Where(x => x.CreationDate.Date <= filteringModel.PriceDate.Date
                                                                    && x.Value > filteringModel.StartPrice
                                                                    || (x.Value < filteringModel.EndPrice&& filteringModel.EndPrice > 0))));
        }
    }
}
