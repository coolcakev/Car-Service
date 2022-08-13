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
    public class CarTreeStrategyModel: ICarTreeStrategyItem
    {
        public CarNodeType Type => CarNodeType.MarkType;
        private readonly IModelRepository _modelRepository;
        private readonly IMapper _mapper;

        public CarTreeStrategyModel(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _modelRepository = unitOfWork.GetInstanse<IModelRepository>();
            _mapper = mapper;
        }

        public async Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo)
        {
            var marks = await _modelRepository.Get(x =>x.MarkId==nodeInfo.MarkId);
            var carTreeNodes = _mapper.Map<IEnumerable<TreeNode<CarNodeType>>>(marks);
            return carTreeNodes;
        }
    }
}
