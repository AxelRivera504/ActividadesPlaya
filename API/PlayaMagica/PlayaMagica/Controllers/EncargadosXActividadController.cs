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
    public class EncargadosXActividadController : Controller
    {

        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public EncargadosXActividadController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }


        [HttpPost("Insert")]
        public IActionResult InsertarPlayas(EncargadosXActividadViewModel item)
        {
            var mapeado = _mapper.Map<tbEncargadosXActividades>(item);
            var respuesta = _actividadesServices.InsertarEncargadosXActivades(mapeado);
            return Ok(respuesta);
        }

        [HttpPost("Delete")]
        public IActionResult EliminarPlayas(EncargadosXActividadViewModel item)
        {
            var mapeado = _mapper.Map<tbEncargadosXActividades>(item);
            var respuesta = _actividadesServices.EliminarEncargadosXActivades(mapeado);
            return Ok(respuesta);
        }

        [HttpGet("ListarEncargadosById{id}")]
        public IActionResult ListarEncargadosById(int id)
        {
            var list = _actividadesServices.ListarEncargadosById(id);
            return Ok(list);
        }
    }
}
