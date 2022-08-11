using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entity
{
    public class Price
    {
        public int Id { get; set; }
        public decimal Value { get; set; }
        public DateTime CreationDate { get; set; }
        public int CarId { get; set; }
        public Car Car { get; set; }
    }
}
