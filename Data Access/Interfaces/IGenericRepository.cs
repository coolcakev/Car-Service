using Domain.DTOs;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Data_Access.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task<List<T>> Get(Expression<Func<T, bool>> filter);
        Task<List<T>> GetFiltered(SortingModel filteringModel, Expression<Func<T, bool>> filter = null,
             Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);
        Task<(List<T> entities, int total)> GetFilteredWithTotalSum(SortingModel filteringModel, Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);

        Task<List<T>> GetAll();
        Task<T> GetById(object id);
        Task<bool> DeleteById(object id);
        Task<dynamic> GetByIdWithInclude(object id, Func<IQueryable<T>, IIncludableQueryable<T, object>> include);
        Task Insert(T obj);
        void Update(T obj);
        void Delete(T obj);
        Task Save();
    }
}
