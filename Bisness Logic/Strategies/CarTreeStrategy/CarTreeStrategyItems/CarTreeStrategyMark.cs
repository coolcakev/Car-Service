using AutoMapper;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Strategies.CarTreeStrategy.CarTreeStrategyItems
{
    public class CarTreeStrategyMark : ICarTreeStrategyItem
    {
        public CarNodeType Type => CarNodeType.Default;
        private readonly IMarkRepository _markRepository;
        private readonly IMapper _mapper;

        public CarTreeStrategyMark(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _markRepository = unitOfWork.GetInstanse<IMarkRepository>();
            _mapper = mapper;
        }

        public async Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo)
        {
            var marks = await _markRepository.GetAllWithInclude(x=>x.Include(y=>y.Models));
            var carTreeNodes = _mapper.Map<IEnumerable<TreeNode<CarNodeType>>>(marks);
            return carTreeNodes;
        }
    }
}
