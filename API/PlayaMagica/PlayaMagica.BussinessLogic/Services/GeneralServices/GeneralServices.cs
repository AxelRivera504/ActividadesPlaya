﻿using PlayaMagica.DataAccess.Repositories.Gral;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.BussinessLogic.Services.GeneralServices
{
    public class GeneralServices
    {
        private readonly DepartamentosRepository _departamentosRepository;
        private readonly EstadosCivilesRepository _estadosCivilesRepository;
        private readonly MunicipiosRepository _municipiosRepository;
        private readonly TipoDePagoRepository _tipoPagoRepository;
        private readonly DireccionesRepository _direccionesRepository;
        private readonly PlayasRepository _playasRepository; 
        public GeneralServices(PlayasRepository playasRepository, DireccionesRepository direccionesRepository, TipoDePagoRepository tipoPagoRepository, MunicipiosRepository municipiosRepository, EstadosCivilesRepository estadosCivilesRepository, DepartamentosRepository departamentosRepository)
        {
            _departamentosRepository = departamentosRepository;
            _estadosCivilesRepository = estadosCivilesRepository;
            _municipiosRepository = municipiosRepository;
            _tipoPagoRepository = tipoPagoRepository;
            _direccionesRepository = direccionesRepository;
            _playasRepository = playasRepository;
        }

        #region Departamentos
        public IEnumerable<VW_tbDepartamentos> ListarDepartamentos()
        {
            try
            {
                var list = _departamentosRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
                return Enumerable.Empty<VW_tbDepartamentos>();
            }
        }
        public ServiceResult InsertarDepartamentos(tbDepartamentos item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _departamentosRepository.Insert(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EditarDepartamentos(tbDepartamentos item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _departamentosRepository.Update(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }
        #endregion

        #region Municipios
        public IEnumerable<VW_tbMunicipios> ListarMunicipios()
        {
            try
            {
                var list = _municipiosRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
                return Enumerable.Empty<VW_tbMunicipios>();
            }
        }

        public ServiceResult InsertarMunicipios(tbMunicipios item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _municipiosRepository.Insert(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EditarMunicipios(tbMunicipios item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _municipiosRepository.Update(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }
        #endregion

        #region Direcciones

        #endregion

        #region Playas

        #endregion

        #region EstadosCiviles

        #endregion

        #region TipoDePago

        #endregion
    }
}
