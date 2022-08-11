using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DTOs
{
    public class DTOWithTotalSum<T> where T : class
    {
        public IEnumerable<T> DTOObjects { get; set; }
        public int total { get; set; }
    }
}
