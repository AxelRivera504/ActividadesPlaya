using AutoMapper;
using PlayaMagica.Entities.Entities;
using PlayaMagica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Extentions
{
    public class MappingProfileExntensions: Profile
    {
        public MappingProfileExntensions() {
            CreateMap<EncargadosViewModel, tbEncargados>().ReverseMap();
            CreateMap<ClientesViewModel, tbClientes>().ReverseMap();
            CreateMap<PlayasViewModel, tbPlayas>().ReverseMap();
        }
    }
}
