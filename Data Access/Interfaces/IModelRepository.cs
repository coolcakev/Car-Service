using Domain.DTOs.ModelDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access.Interfaces
{
    public interface IModelRepository: IGenericRepository<Model>
    {
        Task<(List<Model> entities, int total)> GetModels(ModelFilteringModel filteringModel);
    }
}
