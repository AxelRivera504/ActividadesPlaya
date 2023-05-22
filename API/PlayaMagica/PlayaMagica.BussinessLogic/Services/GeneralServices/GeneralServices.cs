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
        public GeneralServices(DireccionesRepository direccionesRepository, TipoDePagoRepository tipoPagoRepository, MunicipiosRepository municipiosRepository, EstadosCivilesRepository estadosCivilesRepository, DepartamentosRepository departamentosRepository)
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
        public IEnumerable<VW_tbDirecciones> ListarDirecciones()
        {
            try
            {
                var list = _direccionesRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
                return Enumerable.Empty<VW_tbDirecciones>();
            }
        }

        public ServiceResult InsertarDirecciones(tbDirecciones item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _direccionesRepository.Insert(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EditarDirecciones(tbDirecciones item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _direccionesRepository.Update(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EliminarDirecciones(tbDirecciones item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _direccionesRepository.Delete(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }
        #endregion

        #region EstadosCiviles
        public IEnumerable<VW_tbEstadosCiviles> ListarEstadosCiviles()
        {
            try
            {
                var list = _estadosCivilesRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
                return Enumerable.Empty<VW_tbEstadosCiviles>();
            }
        }
        public ServiceResult InsertarEstadosCiviles(tbEstadosCiviles item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _estadosCivilesRepository.Insert(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EditarEstadosCiviles(tbEstadosCiviles item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _estadosCivilesRepository.Update(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }
        #endregion

        #region TipoDePago
        public IEnumerable<VW_tbMetodosPago> ListarMetodosPago()
        {
            try
            {
                var list = _tipoPagoRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
                return Enumerable.Empty<VW_tbMetodosPago>();
            }
        }

        public ServiceResult InsertarMetodosPago(tbMetodosPago item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _tipoPagoRepository.Insert(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EditarMetodosPago(tbMetodosPago item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _tipoPagoRepository.Update(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }

        public ServiceResult EliminarMetodosPago(tbMetodosPago item)
        {
            var result = new ServiceResult();
            try
            {
                var resultado = _tipoPagoRepository.Delete(item);
                return result.Ok(resultado);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
                throw;
            }
        }
        #endregion
    }
}
