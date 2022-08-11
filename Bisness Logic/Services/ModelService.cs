﻿using AutoMapper;
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
            var result = await _modelRepository.DeleteById(id);
            if (result)
            {
                await _unitOfWork.Save();
            }
            return result;

        }

        public async Task<ViewModelDTO> GetModel(int id)
        {
            var model = await _modelRepository.GetByIdWithInclude(id, x => x.Include(x => x.Mark));
            var modelDTO = _mapper.Map<ViewModelDTO>(model);
            return modelDTO;
        }

        public async Task<DTOWithTotalSum<ModelDTO>> GetModels(ModelFilteringModel filteringModel)
        {
            filteringModel.SearchTerm ??= "";
            var models = await _modelRepository.GetFilteredWithTotalSum(filteringModel,
                x => x.Name.Contains(filteringModel.SearchTerm));

            var modelDTOs = _mapper.Map<IEnumerable<ModelDTO>>(models.entities);

            var dToWithTotalSum = new DTOWithTotalSum<ModelDTO>()
            {
                DTOObjects = modelDTOs,
                total = models.total
            };
            return dToWithTotalSum;
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