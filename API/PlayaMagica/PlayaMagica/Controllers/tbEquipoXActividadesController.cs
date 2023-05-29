using AutoMapper;
using Microsoft.AspNetCore.Http;
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
    public class tbEquipoXActividadesController : ControllerBase
    {
        private readonly ActividadesServices _actividadesServices;
        private readonly IMapper _mapper;

        public tbEquipoXActividadesController(ActividadesServices actividadesServices, IMapper mapper)
        {
            _actividadesServices = actividadesServices;
            _mapper = mapper;
        }

        [HttpPost("Insert")]
        public IActionResult Insertar(EquipoXActividadesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbEquipoXActividades>(item);
            var listado = _actividadesServices.InsertarEquiposXActividades(listadoMapeado);
            return Ok(listado);
        }


        [HttpPost("Delete")]
        public IActionResult Delete(EquipoXActividadesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbEquipoXActividades>(item);
            var listado = _actividadesServices.EliminarEquiposXActividades(listadoMapeado);
            return Ok(listado);
        }
    }
}
