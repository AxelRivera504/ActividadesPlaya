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
    public class DireccionesController : ControllerBase
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public DireccionesController(GeneralServices generalServices, IMapper mapper)
        {
            _generalServices = generalServices;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult List()
        {
            var list = _generalServices.ListarDirecciones();
            return Ok(list);
        }


        [HttpPost("Insert")]
        public IActionResult Insert(DireccionesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbDirecciones>(item);
            var listado = _generalServices.InsertarDirecciones(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Update")]
        public IActionResult Update(DireccionesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbDirecciones>(item);
            var listado = _generalServices.EditarDirecciones(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Delete")]
        public IActionResult Delete(DireccionesViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbDirecciones>(item);
            var listado = _generalServices.EliminarDirecciones(listadoMapeado);
            return Ok(listado);
        }
    }
}
