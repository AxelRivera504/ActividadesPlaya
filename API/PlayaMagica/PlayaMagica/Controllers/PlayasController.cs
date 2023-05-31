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
    public class PlayasController : Controller
    {

        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public PlayasController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpGet("ListarPlayas")]
        public IActionResult ListarPlayas()
        {
            var list = _actividadesServices.ListarPlayas();
            return Ok(list);
        }

        [HttpPost("InsertarPlayas")]
        public IActionResult InsertarPlayas(PlayasViewModel item)
        {
            var playas = _mapper.Map<tbPlayas>(item);
            var respuesta = _actividadesServices.InsertarPlayas(playas);
            return Ok(respuesta);
        }

        [HttpPost("Update")]
        public IActionResult UpdateEncargados(PlayasViewModel item)
        {
            var playas = _mapper.Map<tbPlayas>(item);
            var respuesta = _actividadesServices.UpdatePlayas(playas);
            return Ok(respuesta);
        }

        [HttpPost("Delete")]
        public IActionResult DeleteEncargados(PlayasViewModel item)
        {
            var playas = _mapper.Map<tbPlayas>(item);
            var respuesta = _actividadesServices.DeletePlayas(playas);
            return Ok(respuesta);
        }
    }
}
