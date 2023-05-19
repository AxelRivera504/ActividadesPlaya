using PlayaMagica.DataAccess.Repositories.Gral;
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
        public GeneralServices( DireccionesRepository direccionesRepository, TipoDePagoRepository tipoPagoRepository, MunicipiosRepository municipiosRepository, EstadosCivilesRepository estadosCivilesRepository, DepartamentosRepository departamentosRepository)
        {
            _departamentosRepository = departamentosRepository;
            _estadosCivilesRepository = estadosCivilesRepository;
            _municipiosRepository = municipiosRepository;
            _tipoPagoRepository = tipoPagoRepository;
            _direccionesRepository = direccionesRepository;
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
                
                return Enumerable.Empty<VW_tbDepartamentos>();
            }
        }
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
