using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.CarDTOs
{
    public class CarFilteringModel: SortingModel
    {
        public string SearchTerm { get; set; }
        public int MarkId { get; set; }
        public int ModelId { get; set; }
        public string Color { get; set; }
        public string EgineCapacity { get; set; }
        public decimal StartPrice { get; set; }
        public decimal EndPrice { get; set; }
        public DateTime PriceDate { get; set; }

    }
}
