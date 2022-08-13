using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Strategies.CarTreeStrategy.CarTreeStrategyItems
{
    public interface ICarTreeStrategyItem
    {
        CarNodeType Type { get; }

        Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo);
    }
}
