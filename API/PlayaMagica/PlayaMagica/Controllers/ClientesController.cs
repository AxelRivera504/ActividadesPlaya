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
    public class ClientesController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public ClientesController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpGet("ListarClientes")]
        public IActionResult ListarClientes()
        {
            var list = _actividadesServices.ListarClientes();
            return Ok(list);
        }

        [HttpPost("InsertarClientes")]
        public IActionResult InsertarClientes(ClientesViewModel item)
        {
            var clientes = _mapper.Map<tbClientes>(item);
            var respuesta = _actividadesServices.InsertarClientes(clientes);
            return Ok(respuesta);
        }

        [HttpPost("UpdateClientes")]
        public IActionResult UpdateClientes(ClientesViewModel item)
        {
            var clientes = _mapper.Map<tbClientes>(item);
            var respuesta = _actividadesServices.UpdateClientes(clientes);
            return Ok(respuesta);
        }
    
        [HttpPost("DeleteClientes")]
        public IActionResult DeleteClientes(ClientesViewModel item)
        {
            var clientes = _mapper.Map<tbClientes>(item);
            var respuesta = _actividadesServices.DeleteClientes(clientes);
            return Ok(respuesta);
        }
    }
}

