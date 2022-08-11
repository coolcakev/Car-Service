using Data_Access.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly IServiceProvider _services;
        private readonly ApplicationContext _context;
        public UnitOfWork(IServiceProvider services, ApplicationContext context)
        {
            _services = services;
            _context = context;
        }
        public T GetInstanse<T>()
        {
            var service = _services.GetService<T>();
            return service;
        }
        public Task Save()
        {
            return _context.SaveChangesAsync();
        }
    }
}
