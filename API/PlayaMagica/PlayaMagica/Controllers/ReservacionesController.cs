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
    public class ReservacionesController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public ReservacionesController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }
        [HttpPost("InsertarReservacion")]
        public IActionResult InsertarReservacion(ReservacionesViewModel item)
        {
            var reservaciones = _mapper.Map<tbReservaciones>(item);
            var respuesta = _actividadesServices.InsertarReservaciones(reservaciones);
            return Ok(respuesta);
        }

        [HttpPost("InsertarReservacionExiste")]
        public IActionResult InsertarReservacionExiste(ReservacionesViewModel item)
        {
            var reservaciones = _mapper.Map<tbReservaciones>(item);
            var respuesta = _actividadesServices.InsertarReservacionesExiste(reservaciones);
            return Ok(respuesta);
        }

        [HttpGet("ListarDatosReservacionById{id}")]
        public IActionResult ListarDatosReservacionById(int id)
        {
            var list = _actividadesServices.ListarDatosReservacionById(id);
            return Ok(list);
        }
    }
}
