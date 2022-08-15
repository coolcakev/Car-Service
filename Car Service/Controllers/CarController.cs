using Bisness_Logic.Interfaces;
using Domain.DTOs.CarDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Car_Service.Controllers
{
    [Route("api/cars")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarService _carService;

        public CarController(ICarService carService)
        {
            _carService = carService;
        }
        [HttpGet("colors")]
        public async Task<IActionResult> GetColors()
        {
            var colors = await _carService.GetColors();
            return Ok(colors);
        }
        [HttpGet("engine")]
        public async Task<IActionResult> GetEgineCapacities()
        {
            var egineCapacities = await _carService.GetEgineCapacities();
            return Ok(egineCapacities);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(int id)
        {
            var car = await _carService.GetCar(id);
            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }
        [HttpGet("")]
        public async Task<IActionResult> GetCars([FromQuery] CarFilteringModel filteringCar)
        {
            var cars = await _carService.GetCars(filteringCar);
            return Ok(cars);
        }
        [HttpPost("")]
        public async Task<IActionResult> CreateCar([FromBody] CreateCarDTO carDTO)
        {
           var carId= await _carService.Create(carDTO);
            return Ok(carId);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCars(int id, [FromBody] UpdateCarDTO carDTO)
        {
            carDTO.Id = id;
            var isSuccess = await _carService.Update(carDTO);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCars(int id)
        {
            var isSuccess = await _carService.Delete(id);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
