using Data_Access.Interfaces;
using Domain.DTOs.ModelDTOs;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Repositories
{
    public class ModelRepository : GenericRepository<Model>, IModelRepository
    {
        public ModelRepository(ApplicationContext context) : base(context)
        {
        }
        public Task<(List<Model> entities, int total)> GetModels(ModelFilteringModel filteringModel)
        {
            IQueryable<Model> query = _context.Set<Model>().Where(x=>x.Name.Contains(filteringModel.SearchTerm)); 

            if (filteringModel.MarkId != 0)
            {
                query= query.Where(x => x.MarkId == filteringModel.MarkId);                
            }

            return GetFilteredWithTotalSumWithQurable(filteringModel, query, x => x.Include(y => y.Mark));
        }
    }
}
