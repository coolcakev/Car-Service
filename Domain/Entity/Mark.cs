using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public class Mark
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Model> Models { get; set; }
        public List<Car> Cars { get; set; }
    }
}
