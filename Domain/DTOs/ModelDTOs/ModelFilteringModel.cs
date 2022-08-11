using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.ModelDTOs
{
    public class ModelFilteringModel: SortingModel
    {
        public string SearchTerm { get; set; }
        public int MarkId { get; set; }

    }
}
