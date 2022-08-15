using AutoMapper;
using Bisness_Logic.Interfaces;
using Data_Access;
using Data_Access.Interfaces;
using Domain.DTOs;
using Domain.DTOs.PriceDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class PriceService : IPriceService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPriceRepository _priceRepository;
        private readonly IMapper _mapper;

        public PriceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _priceRepository = unitOfWork.GetInstanse<IPriceRepository>();
        }

        public async Task Create(CreatePriceDTO priceDTO)
        {
            var price = _mapper.Map<Price>(priceDTO);
            await _priceRepository.Insert(price);
            await _unitOfWork.Save();
        }

        public async Task<decimal> GetMaxPrice()
        {
            var sortingModel = new SortingModel()
            {
                SortOrder = SortOrder.Desc,
                Name = "Value",
                Count = 1,
                Page = 1
            };
            var price = (await _priceRepository.GetFiltered(sortingModel)).FirstOrDefault();
            if (price==null) {
                return 0;
            }
            return price.Value;
        }
    }
}
