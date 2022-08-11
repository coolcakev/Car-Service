using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.ModelDTOs
{
    public class UpdateModelDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MarkId { get; set; }
    }
}
