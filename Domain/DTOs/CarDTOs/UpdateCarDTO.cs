using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.CarDTOs
{
    public class UpdateCarDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MarkId { get; set; }
        public int ModelId { get; set; }
        public string Color { get; set; }
        public string EngineСapacity { get; set; }       
    }
}
