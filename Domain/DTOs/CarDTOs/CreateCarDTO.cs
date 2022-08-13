using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.CarDTOs
{
    public class CreateCarDTO
    {     
        public string Name { get; set; }
        public int MarkId { get; set; }     
        public int ModelId { get; set; }       
        public string Color { get; set; }
        public double EngineСapacity { get; set; }
    }
}
