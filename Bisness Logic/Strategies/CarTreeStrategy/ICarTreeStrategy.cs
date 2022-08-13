using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Strategies.CarTreeStrategy
{
    public interface ICarTreeStrategy
    {
        Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo);
    }
}
