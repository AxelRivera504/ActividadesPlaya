﻿using PlayaMagica.DataAccess.Repositories.Gral;
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

        #endregion

        #region Municipios

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
