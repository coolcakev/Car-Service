using AutoMapper;
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
            CreateMap<Model, ModelDTO>();
            CreateMap<CreateModelDTO, Model>();
            CreateMap<Model, ViewModelDTO>()
                .ForMember(x => x.MarkName, res => res.MapFrom(x => x.Mark.Name));

        }
    }
}
