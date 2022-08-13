using Bisness_Logic.Interfaces;
using Domain.DTOs.PriceDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Car_Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private readonly IPriceService _priceService;

        public PriceController(IPriceService markService)
        {
            _priceService = markService;
        }
       
        [HttpPost("")]
        public async Task<IActionResult> CreateMark([FromBody] CreatePriceDTO markDTO)
        {
            await _priceService.Create(markDTO);
            return Ok();
        }      
    }
}
