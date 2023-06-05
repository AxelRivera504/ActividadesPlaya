using AutoMapper;
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
    public class ActividadesXFechaController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public ActividadesXFechaController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpPost("CantidadActividad")]
        public IActionResult CantidadActividad(ActividadesXFechaViewModel item)
            {
            var actividadesXFecha = _mapper.Map<tbActividadesXFecha>(item);
            var respuesta = _actividadesServices.CantidadActividad(actividadesXFecha);
            return Ok(respuesta);
        }

        [HttpGet("visitantes")]
        public IActionResult ListarVisitantesXFechas()
        {
            var list = _actividadesServices.ListarVisitantesXFecha();
            return Ok(list);
        }
        [HttpGet("visitantesFilter")]
        public IActionResult ListarVisitantesXFechas(ActividadesXFechaViewModel item)
        {
            var actividadesXFecha = _mapper.Map<tbActividadesXFecha>(item);
            var list = _actividadesServices.ListarVisitantesXFecha(actividadesXFecha);
            return Ok(list);
        }
    }
}
