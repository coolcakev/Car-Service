using Bisness_Logic.Interfaces;
using Domain.DTOs.ModelDTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Car_Service.Controllers
{
    [Route("api/models")]
    [ApiController]
    public class ModelController : ControllerBase
    {      
        private readonly IModelService _modelService;

        public ModelController(IModelService modelService)
        {
            _modelService = modelService;
        }

        [HttpGet("forSelect/{markid}")]
        public async Task<IActionResult> GetMarksForSelect(int markId)
        {
            var marks = await _modelService.GetModelsForSelect(markId);
            return Ok(marks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetModel(int id)
        {
            var model = await _modelService.GetModel(id);
            if (model == null)
            {
                return NotFound();
            }
            return Ok(model);
        }
        [HttpGet("")]
        public async Task<IActionResult> GetModels([FromQuery] ModelFilteringModel filteringModel)
        {
            var models = await _modelService.GetModels(filteringModel);
            return Ok(models);
        }
        [HttpPost("")]
        public async Task<IActionResult> CreateModel([FromBody] CreateModelDTO modelDTO)
        {
            await _modelService.Create(modelDTO);
            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateModels(int id, [FromBody] UpdateModelDTO modelDTO)
        {
            modelDTO.Id = id;
            var isSuccess = await _modelService.Update(modelDTO);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModels(int id)
        {
            var isSuccess = await _modelService.Delete(id);
            if (isSuccess)
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
