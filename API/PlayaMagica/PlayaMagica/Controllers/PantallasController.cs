using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.AccesoServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PantallasController : Controller
    {
       

        private readonly AccesoServices _accesoService;
        private readonly IMapper _mapper;

        public PantallasController(AccesoServices accesoService, IMapper mapper)
        {
            _accesoService = accesoService;
            _mapper = mapper;
        }

        [HttpGet("Pantallas")]
        public IActionResult listar()
        {

            var listado = _accesoService.ListadoPantallas();
            return Ok(listado);
        }

    }
}
