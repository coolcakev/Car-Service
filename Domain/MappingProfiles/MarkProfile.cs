using AutoMapper;
using Domain.DTOs;
using Domain.DTOs.MarkDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class MarkProfile : Profile
    {
        public MarkProfile()
        {
            CreateMap<Mark, MarkDTO>();
            CreateMap<Mark, SelectDTO>();
            CreateMap<CreateMarkDTO, Mark>();
            CreateMap<UpdateMarkDTO, Mark>();
            CreateMap<Mark, ViewMarkDTO>()
                .ForMember(x=>x.Models,res=>res.MapFrom(x=>x.Models))
                .ForMember(x=>x.Cars,res=>res.MapFrom(x=>x.Cars));
        }
    }
}
