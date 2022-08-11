using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access
{
    public interface IUnitOfWork
    {
        T GetInstanse<T>();
        Task Save();
    }
}
