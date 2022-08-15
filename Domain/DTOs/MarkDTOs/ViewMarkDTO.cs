using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.MarkDTOs
{
    public class ViewMarkDTO
    {
        public string Name { get; set; }
        public List<SelectDTO> Models { get; set; }
        public List<SelectDTO> Cars { get; set; }

    }
}
