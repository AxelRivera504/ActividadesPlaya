using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.ActividadesServices;
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
    public class EncargadosXActividadesController : ControllerBase
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public EncargadosXActividadesController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpPost("Insert")]
        public IActionResult InsertarPlayas(EncargadosXActividadesViewModel item)
        {
            var mapeado = _mapper.Map<tbEncargadosXActividades>(item);
            var respuesta = _actividadesServices.InsertarEncargadosXActivades(mapeado);
            return Ok(respuesta);
        }

        [HttpPost("Delete")]
        public IActionResult EliminarPlayas(EncargadosXActividadesViewModel item)
        {
            var mapeado = _mapper.Map<tbEncargadosXActividades>(item);
            var respuesta = _actividadesServices.EliminarEncargadosXActivades(mapeado);
            return Ok(respuesta);
        }
    }
}
