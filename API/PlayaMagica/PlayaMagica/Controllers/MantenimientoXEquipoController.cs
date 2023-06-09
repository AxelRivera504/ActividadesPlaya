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
    public class MantenimientoXEquipoController : ControllerBase
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public MantenimientoXEquipoController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpPost("Insert")]
        public IActionResult Insert(MantenimientoXEquipoViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMantenimientoXEquipo>(item);
            var listado = _actividadesServices.MantenimientoXEquipo(listadoMapeado);
            return Ok(listado);
        }

        [HttpGet("Reporte")]
        public IActionResult ListarEquipos(DateTime FechaInicio, DateTime FechaFin)
        {
            var list = _actividadesServices.Reporte(FechaInicio, FechaFin);
            return Ok(list);
        }

        [HttpGet("List")]
        public IActionResult Listar()
        {
            var list = _actividadesServices.MantenimientoXEquiposListado();
            return Ok(list);
        }
    }
}
