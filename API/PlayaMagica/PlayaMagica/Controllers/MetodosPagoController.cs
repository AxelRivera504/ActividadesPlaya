using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlayaMagica.BussinessLogic.Services.GeneralServices;
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
    public class MetodosPagoController : ControllerBase
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public MetodosPagoController(GeneralServices generalServices, IMapper mapper)
        {
            _generalServices = generalServices;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult List()
        {
            var list = _generalServices.ListarMetodosPago();
            return Ok(list);
        }

        [HttpPost("Insert")]
        public IActionResult Insert(MetodosPagoViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMetodosPago>(item);
            var listado = _generalServices.InsertarMetodosPago(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Update")]
        public IActionResult Update(MetodosPagoViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMetodosPago>(item);
            var listado = _generalServices.EditarMetodosPago(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Delete")]
        public IActionResult Delete(MetodosPagoViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbMetodosPago>(item);
            var listado = _generalServices.EliminarMetodosPago(listadoMapeado);
            return Ok(listado);
        }
    }
}
