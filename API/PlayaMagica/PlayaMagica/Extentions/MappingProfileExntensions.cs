using AutoMapper;
using PlayaMagica.Entities.Entities;
using PlayaMagica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Extentions
{
    public class MappingProfileExtensions : Profile
    {
        public MappingProfileExtensions()
        {
            CreateMap<DepartamentosViewModel, tbDepartamentos>().ReverseMap();
            CreateMap<MunicipiosViewModel, tbMunicipios>().ReverseMap();
            CreateMap<EstadosCivilesViewModel, tbEstadosCiviles>().ReverseMap();
            CreateMap<MetodosPagoViewModel, tbMetodosPago>().ReverseMap();
            CreateMap<DireccionesViewModel, tbDirecciones>().ReverseMap();
        }
    }
}