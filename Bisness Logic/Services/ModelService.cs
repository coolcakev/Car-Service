using AutoMapper;
using Bisness_Logic.Interfaces;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs;
using Domain.DTOs.ModelDTOs;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class ModelService : IModelService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IModelRepository _modelRepository;
        private readonly IMapper _mapper;

        public ModelService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _modelRepository = unitOfWork.GetInstanse<IModelRepository>();
            _mapper = mapper;
        }

        public async Task Create(CreateModelDTO modelDTO)
        {
            var model = _mapper.Map<Model>(modelDTO);
            await _modelRepository.Insert(model);
            await _unitOfWork.Save();
            
        }

        public async Task<bool> Delete(int id)
        {
            var model = (await _modelRepository.GetByIdWithInclude(id, x =>x.Include(x => x.Cars)
                                                                            .Include(x => x.Cars)
                                                                                .ThenInclude(x => x.Price)
                                                                            )) as Model;
            if (model == null)
            {
                return false;
            }

            _modelRepository.Delete(model);
            await _unitOfWork.Save();
            return true;

        }

        public async Task<ViewModelDTO> GetModel(int id)
        {
            var model = await _modelRepository.GetByIdWithInclude(id, x => x.Include(y => y.Mark)
                                                                                    .Include(x=>x.Cars));
            var modelDTO = _mapper.Map<ViewModelDTO>(model);
            return modelDTO;
        }

        public async Task<DTOWithTotalSum<ModelDTO>> GetModels(ModelFilteringModel filteringModel)
        {
            filteringModel.SearchTerm ??= "";
            var models = await _modelRepository.GetModels(filteringModel);

            var modelDTOs = _mapper.Map<IEnumerable<ModelDTO>>(models.entities);

            var dToWithTotalSum = new DTOWithTotalSum<ModelDTO>()
            {
                DTOObjects = modelDTOs,
                total = models.total
            };
            return dToWithTotalSum;
        }

        public async Task<IEnumerable<SelectDTO>> GetModelsForSelect(int markId)
        {
            var models = await _modelRepository.Get(x=>x.MarkId== markId);

            var modelDTOs = _mapper.Map<IEnumerable<SelectDTO>>(models);

            return modelDTOs;
        }

        public async Task<bool> Update(UpdateModelDTO modelDTO)
        {
            var model = await _modelRepository.GetById(modelDTO.Id);
            if (model == null)
            {
                return false;
            }

            model.Name = modelDTO.Name;
            model.MarkId = modelDTO.MarkId;
            _modelRepository.Update(model);
            await _unitOfWork.Save();
            return true;
        }
    }
}
