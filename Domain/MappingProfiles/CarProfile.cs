using AutoMapper;
using Domain.DTOs.CarDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    public class CarProfile:Profile
    {
        public CarProfile()
        {
            CreateMap<CreateCarDTO, Car>();
            CreateMap<UpdateCarDTO, Car>();
            CreateMap<Car, ViewCarDTO>()
               .ForMember(x => x.Model, res => res.MapFrom(x => x.Model))
               .ForMember(x => x.Mark, res => res.MapFrom(x => x.Mark))
               .ForMember(x => x.Price, res => res.MapFrom(x => x.Price));

            CreateMap<Car, CarDTO>()
               .ForMember(x => x.Model, res => res.MapFrom(x => x.Model))
               .ForMember(x => x.Mark, res => res.MapFrom(x => x.Mark))
               .ForMember(x => x.StartPrice, res => res.MapFrom(x => x.Price.First().Value))
               .ForMember(x => x.EndPrice, res => res.MapFrom(x => x.Price.Last().Value));
        }
    }
}
