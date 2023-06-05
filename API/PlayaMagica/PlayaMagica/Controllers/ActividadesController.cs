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
    public class ActividadesController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public ActividadesController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpGet("ListarActividades")]
        public IActionResult ListarActividades()
        {
            var list = _actividadesServices.ListarActividades();
            return Ok(list);
        }

        [HttpPost("InsertarActividades")]
        public IActionResult InsertarActividades(ActividadesViewModel item)
        {
            var actividades = _mapper.Map<tbActividades>(item);
            var respuesta = _actividadesServices.InsertarActividades(actividades);
            return Ok(respuesta);
        }

        [HttpPost("UpdateActividades")]
        public IActionResult UpdateActividades(ActividadesViewModel item)
        {
            var actividades = _mapper.Map<tbActividades>(item);
            var respuesta = _actividadesServices.UpdateActividades(actividades);
            return Ok(respuesta);
        }

        [HttpPost("DeleteActividades")]
        public IActionResult DeleteActividades(ActividadesViewModel item)
        {
            var actividades = _mapper.Map<tbActividades>(item);
            var respuesta = _actividadesServices.DeleteActividades(actividades);
            return Ok(respuesta);
        }

        [HttpGet("ListarActividades{id}")]
        public IActionResult ListarInfoActividadSelected(int id)
        {
            var list = _actividadesServices.ListarInfoActividadSelected(id);
            return Ok(list);
        }
    }
}
