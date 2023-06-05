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
        
        
        
        [HttpGet("Usuarios")]
        public IActionResult List()
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

        [HttpPost("Usuario/Delete")]
        public IActionResult Delete(UsuariosViewModel item)
        {
            var listado = _mapper.Map<tbUsuarios>(item);
            var result = _accesoServices.BorrarUsuarios(listado);
            return Ok(result);
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

