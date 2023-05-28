using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.GeneralServices;
using PlayaMagica.Entities.Entities;
using PlayaMagica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MunicipiosController : ControllerBase
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public MunicipiosController(GeneralServices generalServices, IMapper mapper)
        {
            _generalServices = generalServices;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult List()
        {
            var list = _generalServices.ListarMunicipios();
            return Ok(list);
        }

        [HttpPost("Insert")]
        public IActionResult Insert(MunicipiosViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMunicipios>(item);
            var listado = _generalServices.InsertarMunicipios(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Update")]
        public IActionResult Update(MunicipiosViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMunicipios>(item);
            var listado = _generalServices.EditarMunicipios(listadoMapeado);
            return Ok(listado);
        }
    }
}
