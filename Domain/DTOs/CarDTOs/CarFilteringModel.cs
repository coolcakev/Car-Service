using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.CarDTOs
{
    public class CarFilteringModel: SortingModel
    {
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string SearchTerm { get; set; }
        public int MarkId { get; set; }
        public int ModelId { get; set; }
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string Color { get; set; }
        [DisplayFormat(ConvertEmptyStringToNull = false)]
        public string Engine { get; set; }
        public decimal StartPrice { get; set; }
        public decimal EndPrice { get; set; }
        public DateTime PriceDate { get; set; }

    }
}
