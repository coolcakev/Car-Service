using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs.MarkDTOs
{
    public class CreateMarkDTO
    {
        [Required]
        public string Name { get; set; }
    }
}
