using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services;
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
    public class EncargadosController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public EncargadosController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpGet("ListarEncargados")]
        public IActionResult ListarEncargados()
            {
            var list = _actividadesServices.ListarEncargados();
            return Ok(list);
        }

        [HttpPost("InsertarEncargados")]
        public IActionResult InsetarEncargados(EncargadosViewModel item)
        {
            var encargados = _mapper.Map<tbEncargados>(item);
            var respuesta = _actividadesServices.InsetarEncargados(encargados);
            return Ok(respuesta);
        }

        [HttpPost("UpdateEncargados")]
        public IActionResult UpdateEncargados(EncargadosViewModel item)
        {
            var encargados = _mapper.Map<tbEncargados>(item);
            var respuesta = _actividadesServices.UpdateEncargados(encargados);
            return Ok(respuesta);
        }

        [HttpPost("DeleteEncargados")]
        public IActionResult DeleteEncargados(EncargadosViewModel item)
        {
            var encargados = _mapper.Map<tbEncargados>(item);
            var respuesta = _actividadesServices.DeleteEncargados(encargados);
            return Ok(respuesta);
        }
    }
}
