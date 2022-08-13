using Data_Access.Interfaces;
using Domain.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.DynamicLinq;
using System.Linq.Dynamic.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Query;

namespace Data_Access.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected ApplicationContext _context { get; set; }
        private DbSet<T> table = null;
        public GenericRepository(ApplicationContext _context)
        {
            this._context = _context;
            table = _context.Set<T>();
        }
        public Task<List<T>> Get(Expression<Func<T, bool>> filter)
        {
            IQueryable<T> query = table;
            query = query.Where(filter);
            return query.ToListAsync();
        }
        public Task<List<T>> GetAll()
        {
            return table.ToListAsync();
        }
        public Task<List<T>> GetAllWithInclude(Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = table;
            query = include(query);
            return query.ToListAsync();
        }
        public Task<T> GetById(object id)
        {
            return table.FindAsync(id).AsTask();
        }
        public Task<dynamic> GetByIdWithInclude(object id, Func<IQueryable<T>, IIncludableQueryable<T, object>> include)
        {
            IQueryable<T> query = table;

            query = include(query);

            return query.FirstOrDefaultAsync($"c => c.Id == {id}");
        }
        public Task Insert(T obj)
        {
            return table.AddAsync(obj).AsTask();
        }
        public void Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }
        public void Delete(T obj)
        {
            table.Remove(obj);
        }
        public async Task<bool> DeleteById(object id)
        {
            var obj = await table.FindAsync(id);
            if (obj == null)
            {
                return false;
            }
            table.Remove(obj);
            return true;
        }
        public Task Save()
        {
            return _context.SaveChangesAsync();
        }

        public Task<List<T>> GetFiltered(SortingModel filteringModel, Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _context.Set<T>();

            if (include != null)
            {
                query = include(query);
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (filteringModel.Name != null)
            {
                query = query.OrderBy($"{filteringModel.Name} {filteringModel.SortOrder}");
            }

            if (filteringModel.Count != 0)
            {
                var skipped = filteringModel.Page == 1 ? 0 : filteringModel.Page * filteringModel.Count;
                query = query.Skip(skipped).Take(filteringModel.Count);
            }

            return query.ToListAsync();
        }
        public async Task<(List<T> entities, int total)> GetFilteredWithTotalSum(SortingModel filteringModel, Expression<Func<T, bool>> filter = null,
           Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _context.Set<T>();

            if (include != null)
            {
                query = include(query);
            }

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (filteringModel.Name != null)
            {
                query = query.OrderBy($"{filteringModel.Name} {filteringModel.SortOrder}");
            }

            var count = await query.CountAsync();

            if (filteringModel.Count != 0)
            {             
                query = query.Skip(--filteringModel.Page * filteringModel.Count).Take(filteringModel.Count);
            }

            return (await query.ToListAsync(), count);
        }
        public async Task<(List<T> entities, int total)> GetFilteredWithTotalSumWithQurable(SortingModel filteringModel, IQueryable<T> query,
           Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {          

            if (include != null)
            {
                query = include(query);
            }            

            if (filteringModel.Name != null)
            {
                query = query.OrderBy($"{filteringModel.Name} {filteringModel.SortOrder}");
            }

            var count = await query.CountAsync();

            if (filteringModel.Count != 0)
            {
                query = query.Skip(--filteringModel.Page * filteringModel.Count).Take(filteringModel.Count);
            }

            return (await query.ToListAsync(), count);
        }
    }
}
