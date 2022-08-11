using Domain.DTOs;
using Domain.DTOs.MarkDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Interfaces
{
    public interface IMarkService
    {
        Task<DTOWithTotalSum<MarkDTO>> GetMarks(MarkFilteringModel filteringModel);
        Task Create(CreateMarkDTO markDTO);
        Task<bool> Update(UpdateMarkDTO markDTO);
        Task<bool> Delete(int id);
        Task<ViewMarkDTO> GetMark(int id);
    }
}
