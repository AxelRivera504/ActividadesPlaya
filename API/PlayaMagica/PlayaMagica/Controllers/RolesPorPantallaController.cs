using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.AccesoServices;
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

    public class RolesPorPantallaController : Controller
    {

        private readonly AccesoServices _accesoService;
        private readonly IMapper _mapper;

        public RolesPorPantallaController(AccesoServices accesoService, IMapper mapper)
        {
            _accesoService = accesoService;
            _mapper = mapper;
        }

        [HttpPost("Insertar")]
        public IActionResult Create(RolesPorPantallaViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbRolesXPantallas>(item);
            var listado = _accesoService.InsertarRolesXpantallas(listadoMapeado);
            return Ok(listado);
        }

        [HttpGet("PantallasXroles{id}")]
        public IActionResult listarPantallas(int id)
        {

            var listado = _accesoService.ListadoPantallas(id);
            return Ok(listado);
        }

        [HttpPost("Eliminar")]
        public IActionResult DeleteRolesXpantallas(RolesPorPantallaViewModel item)
        {
            var roles = _mapper.Map<tbRolesXPantallas>(item);
            var respuesta = _accesoService.DeleteRolesXpantallas(roles);
            return Ok(respuesta);
        }
    }
}

