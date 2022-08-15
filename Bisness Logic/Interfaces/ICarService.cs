using Domain.DTOs;
using Domain.DTOs.CarDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Interfaces
{
    public interface ICarService
    {
        Task<ViewCarDTO> GetCar(int id);
        Task<DTOWithTotalSum<CarDTO>> GetCars(CarFilteringModel filteringCar);
        Task<int> Create(CreateCarDTO carDTO);
        Task<bool> Update(UpdateCarDTO carDTO);
        Task<bool> Delete(int id);
        Task<IEnumerable<SelectDTO>> GetColors();
        Task<IEnumerable<SelectDTO>> GetEgineCapacities();
    }
}
