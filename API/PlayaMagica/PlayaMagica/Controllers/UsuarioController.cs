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
    public class UsuarioController : Controller
    {
      
        private readonly AccesoServices _accesoServices;
        private readonly IMapper _mapper;

        public UsuarioController(AccesoServices accesoServices, IMapper mapper)
        {
            _accesoServices = accesoServices;
            _mapper = mapper;
        }
        
        
        
        [HttpGet("ListarUsuarios")]
        public IActionResult ListarUsuarios()
        {
            var listado = _accesoServices.ListadoUsuarios();
            return Ok(listado);
        }

        [HttpPost("Insertar")]
        public IActionResult Create(UsuariosViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbUsuarios>(item);
            var listado = _accesoServices.InsertarUsuarios(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Actualizar")]
        public IActionResult Edit(UsuariosViewModel item)
        {
            var listado = _mapper.Map<tbUsuarios>(item);
            var Result = _accesoServices.UpdateUsuarios(listado);
            return Ok(Result);
        }

        [HttpPost("Usuario/Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var listado = _accesoServices.BorrarUsuarios(id);
            return Ok(listado);
        }

        [HttpPost("ValidarLogin")]
        public IActionResult ValidarLogin(UsuariosViewModel item)
        {
            var resultMapeado = _mapper.Map<tbUsuarios>(item);

            var respuesta = _accesoServices.ValidarLogin(resultMapeado);

            respuesta.Data = _mapper.Map<tbUsuarios>(respuesta.Data);

            return Ok(respuesta);
        }


    }
}

