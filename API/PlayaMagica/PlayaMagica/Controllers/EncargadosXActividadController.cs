using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.ActividadesServices;
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

        [HttpGet("ListarEncargadosById{id}")]
        public IActionResult ListarEncargadosById(int id)
        {
            var list = _actividadesServices.ListarEncargadosById(id);
            return Ok(list);
        }
    }
}
