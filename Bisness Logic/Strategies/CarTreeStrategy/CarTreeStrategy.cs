using Bisness_Logic.Strategies.CarTreeStrategy.CarTreeStrategyItems;
using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Strategies.CarTreeStrategy
{
    public class CarTreeStrategy : ICarTreeStrategy
    {
        private readonly IEnumerable<ICarTreeStrategyItem> _carTreeStrategyItems;

        public CarTreeStrategy(IEnumerable<ICarTreeStrategyItem> carTreeStrategyItems)
        {
            _carTreeStrategyItems = carTreeStrategyItems;
        }

        public Task<IEnumerable<TreeNode<CarNodeType>>> GetCarTreeNodes(CarNodeInfo nodeInfo)
        {
            return _carTreeStrategyItems.SingleOrDefault(x => x.Type == nodeInfo.Level)?.GetCarTreeNodes(nodeInfo);
        }
    }
}
