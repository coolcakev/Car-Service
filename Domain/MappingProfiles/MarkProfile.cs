using AutoMapper;
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
            CreateMap<CreateMarkDTO, Mark>();
            CreateMap<Mark, ViewMarkDTO>()
                .ForMember(x=>x.ModelNames,res=>res.MapFrom(x=>x.Models.Select(x=>x.Name)));
        }
    }
}
