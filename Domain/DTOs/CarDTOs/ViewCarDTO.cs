using Domain.DTOs.PriceDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.CarDTOs
{
    public class ViewCarDTO
    {
        public string Name { get; set; }
        public SelectDTO Mark { get; set; }       
        public SelectDTO Model { get; set; }    
        public string Color { get; set; }
        public double EngineСapacity { get; set; }
        public List<PriceDTO> Price { get; set; }
    }
}
