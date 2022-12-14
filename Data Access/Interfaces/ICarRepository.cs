using Domain.DTOs.CarDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Interfaces
{
    public interface ICarRepository: IGenericRepository<Car>
    {
        Task<(List<Car> entities, int total)> GetCars(CarFilteringModel filteringModel);
    }
}
