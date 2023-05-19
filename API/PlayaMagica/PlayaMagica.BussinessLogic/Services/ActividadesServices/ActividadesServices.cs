using PlayaMagica.DataAccess.Repositories.Acti;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.BussinessLogic.Services.ActividadesServices
{
    public class ActividadesServices
    {
        private readonly ClientesRepository _clientesRepository;
        private readonly EncargadosRepository _encargadosRepository;
        private readonly PlayasRepository _playasRepository;
        public ActividadesServices(EncargadosRepository encargadosRepository, ClientesRepository clientesRepository, PlayasRepository playasRepository)
        {
            _clientesRepository = clientesRepository;
            _encargadosRepository = encargadosRepository;
            _playasRepository = playasRepository;
        }


        #region Encargados
        public IEnumerable<VW_tbEncargados> ListarEncargados()
        {
            try
            {
                var list = _encargadosRepository.ListarEncargados();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbEncargados>();
            }
        }


        public ServiceResult InsetarEncargados(tbEncargados item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _encargadosRepository.InsertarEncargados(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdateEncargados(tbEncargados item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _encargadosRepository.UpdateEncargados(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeleteEncargados(tbEncargados item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _encargadosRepository.DeleteEncargados(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region Clientes
        public IEnumerable<VW_tbClientes> ListarClientes()
        {
            try
            {
                var list = _clientesRepository.ListarClientes();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbClientes>();
            }
        }


        public ServiceResult InsertarClientes(tbClientes item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _clientesRepository.InsertarClientes(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdateClientes(tbClientes item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _clientesRepository.UpdateClientes(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeleteClientes(tbClientes item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _clientesRepository.DeleteClientes(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region Playas
        public IEnumerable<VW_tbPlayas> ListarPlayas()
        {
            try
            {
                var list = _playasRepository.ListarPlayas();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbPlayas>();
            }
        }


        public ServiceResult InsertarPlayas(tbPlayas item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Playas = _playasRepository.InsertarPlayas(item);
                return resultado.Ok(Playas);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdatePlayas(tbPlayas item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Playas = _playasRepository.UpdatePlayas(item);
                return resultado.Ok(Playas);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeletePlayas(tbPlayas item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Playas = _playasRepository.DeletePlayas(item);
                return resultado.Ok(Playas);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion
    }
}