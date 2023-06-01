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
    public class EquiposController : Controller
    {

        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public EquiposController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpGet("ListarEquipos")]
        public IActionResult ListarEquipos()
        {
            var list = _actividadesServices.ListarEquipos();
            return Ok(list);
        }


        [HttpGet("EquipoXActividad")]
        public IActionResult EquipoXActividad(int id)
        {
            var list = _actividadesServices.EquipoXActividad(id);
            return Ok(list);
        }

        [HttpPost("InsertarEquipos")]
        public IActionResult InsertarEquipos(EquiposViewModel item)
        {
            var equipos = _mapper.Map<tbEquipos>(item);
            var respuesta = _actividadesServices.InsertarEquipos(equipos);
            return Ok(respuesta);
        }

        [HttpPost("UpdateEquipos")]
        public IActionResult UpdateEquipos(EquiposViewModel item)
        {
            var equipos = _mapper.Map<tbEquipos>(item);
            var respuesta = _actividadesServices.UpdateEquipos(equipos);
            return Ok(respuesta);
        }

        [HttpPost("DeleteEquipos")]
        public IActionResult DeleteEquipos(EquiposViewModel item)
        {
            var equipos = _mapper.Map<tbEquipos>(item);
            var respuesta = _actividadesServices.DeleteEquipos(equipos);
            return Ok(respuesta);
        }

        [HttpPost("Mantenimiento")]
        public IActionResult Mantenimiento(EquiposViewModel item)
        {
            var equipos = _mapper.Map<tbEquipos>(item);
            var respuesta = _actividadesServices.EquipoMantenimiento(equipos);
            return Ok(respuesta);
        }
    }
}
