using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.PriceDTOs
{
    public class CreatePriceDTO
    {
        public decimal Price { get; set; }
        public int CarId { get; set; }
    }
}
