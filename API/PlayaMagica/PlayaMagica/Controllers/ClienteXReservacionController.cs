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
    public class ClienteXReservacionController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public ClienteXReservacionController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpPost("InsertarClienteXReservacion")]
        public IActionResult InsertarClienteXReservacion(ClienteXReservacionViewModel item)
         {
            var ClienteXReservacion = _mapper.Map<tbClienteXReservacion>(item);
            var respuesta = _actividadesServices.InsertarClienteXReservacion(ClienteXReservacion);
            return Ok(respuesta);
        }

        [HttpPost("DeleteClientexReservacion")]
        public IActionResult DeleteClientexReservacion(ClienteXReservacionViewModel item)
        {
            var ClienteXReservacion = _mapper.Map<tbClienteXReservacion>(item);
            var respuesta = _actividadesServices.DeleteClientexReservacion(ClienteXReservacion);
            return Ok(respuesta);
        }

        [HttpGet("ListClientesByIdRese{id}")]
        public IActionResult ListClientesByIdRese(int id)
        {
            var listado = _actividadesServices.ListClientesByIdRese(id);
            return Ok(listado);
        }
    }
}
