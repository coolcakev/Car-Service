using Bisness_Logic.Interfaces;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Car_Service.Controllers
{
    [Route("api/tree")]
    [ApiController]
    public class TreeController : ControllerBase
    {
        private readonly ITreeService _treeService;

        public TreeController(ITreeService treeService)
        {
            _treeService = treeService;
        }
        [HttpGet("car")]
        public async Task<IActionResult> GetCarTreeNodes([FromQuery]CarNodeInfo nodeInfo)
        {
            var nodes = await _treeService.GetCarTreeNodes(nodeInfo);
            return Ok(nodes);
        }
    }
}
