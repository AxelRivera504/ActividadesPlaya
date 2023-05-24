using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.ActividadesServices;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MantenimientosController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public MantenimientosController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpGet("ListarMantenimientos")]
        public IActionResult ListarMantenimientos()
        {
            var list = _actividadesServices.ListarMantenimientos();
            return Ok(list);
        }

        [HttpPost("InsertarMantenimientos")]
        public IActionResult InsertarMantenimientos(tbMantenimiento item)
            {
            var Mantenimiento = _mapper.Map<tbMantenimiento>(item);
            var respuesta = _actividadesServices.InsertarMantenimientos(Mantenimiento);
            return Ok(respuesta);
        }

        [HttpPost("UpdateMantenimientos")]
        public IActionResult UpdateMantenimientos(tbMantenimiento item)
        {
            var Mantenimiento = _mapper.Map<tbMantenimiento>(item);
            var respuesta = _actividadesServices.UpdateMantenimientos(Mantenimiento);
            return Ok(respuesta);
        }

        [HttpPost("DeleteMantenimientos")]
        public IActionResult DeleteMantenimientos(tbMantenimiento item)
        {
            var Mantenimiento = _mapper.Map<tbMantenimiento>(item);
            var respuesta = _actividadesServices.DeleteMantenimientos(Mantenimiento);
            return Ok(respuesta);
        }

        [HttpGet("DetailsMantenimiento{id}")]
        public IActionResult DetailsMantenimiento(int id)
        {
            var list = _actividadesServices.DetailsMantenimientos(id);
            return Ok(list);
        }
    }
}
