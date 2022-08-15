using AutoMapper;
using Domain.DTOs;
using Domain.DTOs.ModelDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class ModelProfile : Profile
    {
        public ModelProfile()
        {
            CreateMap<Model, SelectDTO>();
            CreateMap<Model, ModelDTO>();
            CreateMap<CreateModelDTO, Model>();
            CreateMap<UpdateModelDTO, Model>();
            CreateMap<Model, ViewModelDTO>()
                .ForMember(x => x.Mark, res => res.MapFrom(x => x.Mark))
                .ForMember(x => x.Cars, res => res.MapFrom(x => x.Cars));

        }
    }
}
