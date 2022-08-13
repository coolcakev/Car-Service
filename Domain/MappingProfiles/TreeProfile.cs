using AutoMapper;
using Domain.DTOs.TreeDTOs;
using Domain.DTOs.TreeDTOs.CarTreeDTOs;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.MappingProfiles
{
    internal class TreeProfile:Profile
    {
        public TreeProfile()
        {
            CreateMap<Mark,TreeNode<CarNodeType>>()                
                .ForMember(x => x.Level, res => res.MapFrom(x => CarNodeType.MarkType))
                .ForMember(x => x.HasChildren, res => res.MapFrom(x => x.Models.Any()));

            CreateMap<Model, TreeNode<CarNodeType>>()
               .ForMember(x => x.Level, res => res.MapFrom(x => CarNodeType.ModelType))
               .ForMember(x => x.HasChildren, res => res.MapFrom(x => false));
        }
    }
}
