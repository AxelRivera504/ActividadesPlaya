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

    public class RolesController : Controller
    {
        private readonly AccesoServices _accesoServices;
        private readonly IMapper _mapper;

        public RolesController(AccesoServices accesoServices, IMapper mapper)
        {
            _accesoServices = accesoServices;
            _mapper = mapper;
        }


        [HttpGet("ListarRoles")]
        public IActionResult ListarRoles()
        {
            var list = _accesoServices.ListarRoles();
            return Ok(list);
        }

        [HttpPost("Insertar")]
        public IActionResult Insertar(RolesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbRoles>(item);
            var listado = _accesoServices.InsertarRoles(listadoMapeado);
            return Ok(listado);
        }


        [HttpPost("Actualizar")]
        public IActionResult Actualizar(RolesViewModel item)
        {
            var listado = _mapper.Map<tbRoles>(item);
            var Result = _accesoServices.UpdateRoles(listado);
            return Ok(Result);
        }

        [HttpPost("Delete")]
        public IActionResult Delete(RolesViewModel item)
        {
            var listado = _mapper.Map<tbRoles>(item);
            var result = _accesoServices.BorrarRoles(listado);
            return Ok(result);
        }

    }
}
