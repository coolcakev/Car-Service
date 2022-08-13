using AutoMapper;
using Domain.DTOs.PriceDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class PriceProfile:Profile
    {
        public PriceProfile()
        {
            CreateMap<CreatePriceDTO,Price>()
                .ForMember(x=>x.CreationDate,res=>res.MapFrom(x=>DateTime.Now));

            CreateMap<Price, PriceDTO>()
                .ForMember(x => x.Price, res => res.MapFrom(x => x.Value))
                .ForMember(x => x.PriceDate, res => res.MapFrom(x => x.CreationDate));
        }
    }
}
