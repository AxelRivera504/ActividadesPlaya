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
    public class EstadosCivilesController : ControllerBase
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public EstadosCivilesController(GeneralServices generalServices, IMapper mapper)
        {
            _generalServices = generalServices;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult List()
        {
            var list = _generalServices.ListarEstadosCiviles();
            return Ok(list);
        }

        [HttpGet("find{id}")]
        public IActionResult FindEstadoCivil(int id) {
            var list = _generalServices.FindEstadoCivil(id);
            return Ok(list);
        }

        [HttpPost("Insert")]
        public IActionResult Insert(EstadosCivilesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbEstadosCiviles>(item);
            var listado = _generalServices.InsertarEstadosCiviles(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Update")]
        public IActionResult Update(EstadosCivilesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbEstadosCiviles>(item);
            var listado = _generalServices.EditarEstadosCiviles(listadoMapeado);
            return Ok(listado);
        }
    }
}
