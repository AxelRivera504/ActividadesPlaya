﻿using AutoMapper;
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
    public class FacturaController : Controller
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public FacturaController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpGet("ListarFacturaIndex")]
        public IActionResult ListarFacturaIndex()
        {
            var list = _actividadesServices.ListarFacturaIndex();
            return Ok(list);
        }

        [HttpPost("InsertarFactura")]
        public IActionResult InsertarActividades(FacturaViewModel item)
         {
            var facturas = _mapper.Map<tbFactura>(item);
            var respuesta = _actividadesServices.InsertarFactura(facturas);
            return Ok(respuesta);
        }

        [HttpGet("ListarFactura{id}")]
        public IActionResult ListarFactura(int id)
        {
            var listado = _actividadesServices.ListarFactura(id);
            return Ok(listado);
        }
    }
}
