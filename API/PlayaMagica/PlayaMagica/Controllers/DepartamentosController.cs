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
    public class DepartamentosController : ControllerBase
    {
        private readonly GeneralServices _generalServices;
        private readonly IMapper _mapper;

        public DepartamentosController(GeneralServices generalServices, IMapper mapper)
        {
            _generalServices = generalServices;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult List()
        {
            var list = _generalServices.ListarDepartamentos();
            return Ok(list);
        }

        [HttpPost("Insert")]
        public IActionResult Insert(DepartamentosViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbDepartamentos>(item);
            var listado = _generalServices.InsertarDepartamentos(listadoMapeado);
            return Ok(listado);
        }

        [HttpPost("Update")]
        public IActionResult Update(DepartamentosViewModel item)
        {
            var listadoMapeado = _mapper.Map<tbDepartamentos>(item);
            var listado = _generalServices.EditarDepartamentos(listadoMapeado);
            return Ok(listado);
        }
    }
}
