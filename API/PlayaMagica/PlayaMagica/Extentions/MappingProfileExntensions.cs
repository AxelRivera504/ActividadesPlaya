﻿using AutoMapper;
using PlayaMagica.Models;
using PlayaMagica.Entities.Entities;
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
            CreateMap<EncargadosViewModel, tbEncargados>().ReverseMap();
            CreateMap<ClientesViewModel, tbClientes>().ReverseMap();
            CreateMap<PlayasViewModel, tbPlayas>().ReverseMap();
            CreateMap<RolesViewModel, tbRoles>().ReverseMap();
            CreateMap<RolesPorPantallaViewModel, tbRolesXPantallas>().ReverseMap();
            CreateMap<tbPantallas,PantallasViewModel>().ReverseMap();
            CreateMap<tbUsuarios, UsuariosViewModel>().ReverseMap();
        }
    }
}