using Domain.DTOs;
using Domain.DTOs.ModelDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Interfaces
{
    public interface IModelService
    {
        Task<ViewModelDTO> GetModel(int id);
        Task<DTOWithTotalSum<ModelDTO>> GetModels(ModelFilteringModel filteringModel);
        Task Create(CreateModelDTO modelDTO);
        Task<bool> Update(UpdateModelDTO modelDTO);
        Task<bool> Delete(int id);
        Task<IEnumerable<SelectDTO>> GetModelsForSelect(int markId);
    }
}
