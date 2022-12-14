using AutoMapper;
using Bisness_Logic.Interfaces;
using Car_Service.Models.ErrorModels;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs;
using Domain.DTOs.MarkDTOs;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class MarkService : IMarkService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMarkRepository _markRepository;
        private readonly IMapper _mapper;

        public MarkService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _markRepository = unitOfWork.GetInstanse<IMarkRepository>();
            _mapper = mapper;
        }

        public async Task Create(CreateMarkDTO markDTO)
        {
            var mark = _mapper.Map<Mark>(markDTO);
            await _markRepository.Insert(mark);
            await _unitOfWork.Save();
        }

        public async Task<bool> Delete(int id)
        {
            var mark = (await _markRepository.GetByIdWithInclude(id, x => x.Include(x => x.Models)
                                                                            .Include(x => x.Cars)
                                                                            .Include(x => x.Cars)
                                                                                .ThenInclude(x=>x.Price)
                                                                            )) as Mark;
            var errorMessage = "";
            if (mark.Models.Count > 0)
            {
                errorMessage = "You cant delete mark because this mark have models";
                if (mark.Cars.Count > 0) {
                    errorMessage += " and cars";
                }
                throw new DeleteExeption(errorMessage);
            }


            if (mark == null)
            {
                return false;
            }

            _markRepository.Delete(mark);
            await _unitOfWork.Save();
            return true;

        }

        public async Task<ViewMarkDTO> GetMark(int id)
        {
            var mark = await _markRepository.GetByIdWithInclude(id, x => x.Include(x => x.Models).Include(x => x.Cars));
            var markDTO = _mapper.Map<ViewMarkDTO>(mark);
            return markDTO;
        }

        public async Task<DTOWithTotalSum<MarkDTO>> GetMarks(MarkFilteringModel filteringModel)
        {
            filteringModel.SearchTerm ??= "";
            var marks = await _markRepository.GetFilteredWithTotalSum(filteringModel,
                x => x.Name.Contains(filteringModel.SearchTerm));

            var markDTOs = _mapper.Map<IEnumerable<MarkDTO>>(marks.entities);

            var dToWithTotalSum = new DTOWithTotalSum<MarkDTO>()
            {
                DTOObjects = markDTOs,
                total = marks.total
            };
            return dToWithTotalSum;
        }

        public async Task<IEnumerable<SelectDTO>> GetMarksForSelect()
        {
            var marks = await _markRepository.GetAll();

            var markDTOs = _mapper.Map<IEnumerable<SelectDTO>>(marks);

            return markDTOs;
        }

        public async Task<bool> Update(UpdateMarkDTO markDTO)
        {
            var mark = await _markRepository.GetById(markDTO.Id);
            if (mark == null)
            {
                return false;
            }
            mark.Name = markDTO.Name;
            _markRepository.Update(mark);
            await _unitOfWork.Save();
            return true;
        }
    }
}
