using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public  class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MarkId { get; set; }
        public Mark Mark { get; set; }
        public int ModelId { get; set; }
        public Model Model { get; set; }
        public string Color { get; set; }
        public string Engine { get; set; }
        public List<Price> Price { get; set; }
    }
}
