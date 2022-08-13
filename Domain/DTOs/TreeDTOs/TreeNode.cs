using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.TreeDTOs
{
    public class TreeNode<T>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public T Level { get; set; }
        public bool HasChildren { get; set; }

    }
}
