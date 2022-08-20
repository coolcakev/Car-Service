using AutoMapper;
using Bisness_Logic.Interfaces;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs;
using Domain.DTOs.CarDTOs;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class CarService : ICarService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICarRepository _carRepository;
        private readonly IMapper _mapper;


        public CarService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _carRepository = unitOfWork.GetInstanse<ICarRepository>();
            _mapper = mapper;
        }
        public async Task<int> Create(CreateCarDTO carDTO)
        {
            var car = _mapper.Map<Car>(carDTO);
            car.Price.Add(new Price()
            {
                Value = carDTO.Price,
                CreationDate = DateTime.Now
            });
            await _carRepository.Insert(car);
            await _unitOfWork.Save();
            return car.Id;
        }

        public async Task<bool> Delete(int id)
        {
            var result = await _carRepository.DeleteById(id);
            if (result)
            {
                await _unitOfWork.Save();
            }
            return result;

        }

        public async Task<ViewCarDTO> GetCar(int id)
        {
            var car = await _carRepository.GetByIdWithInclude(id, x =>
                    x.Include(y => y.Mark)
                    .Include(y => y.Model)
                    .Include(x => x.Price));

            var carDTO = _mapper.Map<ViewCarDTO>(car);
            return carDTO;
        }

        public async Task<DTOWithTotalSum<CarDTO>> GetCars(CarFilteringModel filteringCar)
        {
            var cars = await _carRepository.GetCars(filteringCar);

            var carDTOs = _mapper.Map<IEnumerable<CarDTO>>(cars.entities);

            var dToWithTotalSum = new DTOWithTotalSum<CarDTO>()
            {
                DTOObjects = carDTOs,
                total = cars.total
            };
            return dToWithTotalSum;
        }

        public async Task<IEnumerable<SelectDTO>> GetColors()
        {
            var carsColor = (await _carRepository.GetAll(x=>x.Color)).Distinct();

            var colors = new List<SelectDTO>();
            foreach (var carColor in carsColor)
            {
                var color = new SelectDTO()
                {
                    Id = carColor,
                    Name = carColor
                };
                colors.Add(color);
            }
            return colors;
        }

        public async Task<IEnumerable<SelectDTO>> GetEgineCapacities()
        {
            var carsEngine = (await _carRepository.GetAll(x=>x.Engine)).Distinct();

            var colors = new List<SelectDTO>();
            foreach (var carEngine in carsEngine)
            {
                var color = new SelectDTO()
                {
                    Id = carEngine,
                    Name = carEngine
                };
                colors.Add(color);
            }
            return colors;
        }

        public async Task<bool> Update(UpdateCarDTO carDTO)
        {
            var car = (await _carRepository.GetByIdWithInclude(carDTO.Id, x => x.Include(x => x.Price))) as Car;
            if (car == null)
            {
                return false;
            }

            car.Name = carDTO.Name;
            car.MarkId = carDTO.MarkId;
            car.ModelId = carDTO.ModelId;
            car.Color = carDTO.Color;
            car.Engine = carDTO.Engine;

            if (car.Price.Last().Value != carDTO.Price)
            {
                car.Price.Add(new Price()
                {
                    Value = carDTO.Price,
                    CreationDate = DateTime.Now
                });
            }

            _carRepository.Update(car);
            await _unitOfWork.Save();
            return true;
        }
    }
}
