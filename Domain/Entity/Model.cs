using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MarkId { get; set; }
        public Mark Mark { get; set; }
        public List<Car> Cars { get; set; }

    }
}
