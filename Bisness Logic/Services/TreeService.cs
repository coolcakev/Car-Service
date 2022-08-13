using AutoMapper;
using Bisness_Logic.Interfaces;
using Bisness_Logic.Strategies.CarTreeStrategy;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class TreeService: ITreeService
    {       
        private readonly ICarTreeStrategy _carTreeStrategy;

        public TreeService(ICarTreeStrategy carTreeStrategy)
        {           
            _carTreeStrategy = carTreeStrategy;
        }

        public Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo)
        {
            return _carTreeStrategy.GetCarTreeNodes(nodeInfo);
        }
    }
}
