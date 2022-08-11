using Bisness_Logic.Interfaces;
using Domain.DTOs;
using Domain.DTOs.MarkDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Car_Service.Controllers
{
    [Route("api/marks")]
    [ApiController]
    public class MarkController : ControllerBase
    {
        private readonly IMarkService _markService;

        public MarkController(IMarkService markService)
        {
            _markService = markService;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMark(int id)
        {
            var mark = await _markService.GetMark(id);
            if (mark == null)
            {
                return NotFound();
            }
            return Ok(mark);
        }
        [HttpGet("")]
        public async Task<IActionResult> GetMarks([FromQuery] MarkFilteringModel filteringModel)
        {
            var marks = await _markService.GetMarks(filteringModel);
            return Ok(marks);
        }
        [HttpGet("forSelect")]
        public async Task<IActionResult> GetMarksForSelect()
        {
            var marks = await _markService.GetMarksForSelect();
            return Ok(marks);
        }
        [HttpPost("")]
        public async Task<IActionResult> CreateMark([FromBody] CreateMarkDTO markDTO)
        {
            await _markService.Create(markDTO);
            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMarks(int id, [FromBody] UpdateMarkDTO markDTO)
        {
            markDTO.Id = id;
            var isSuccess = await _markService.Update(markDTO);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMarks(int id)
        {
            var isSuccess = await _markService.Delete(id);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
