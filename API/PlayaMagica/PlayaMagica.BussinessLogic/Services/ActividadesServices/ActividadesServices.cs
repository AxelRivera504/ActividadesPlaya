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
        private readonly ActividadesRepository _actividadesRepository;
        private readonly EquipoRepository _equipoRepository;
        private readonly MantenimientoRepository _mantenimientoRepository;
        private readonly ReservacionesRepository _reservacionesRepository;
        private readonly ClienteXReservacionRepository _clienteXReservacionRepository;
        private readonly ActividadesXFechaRepository _actividadesXFechaRepository;
        private readonly FacturaRepository _facturaRepository;
        private readonly EquipoXActividadesRepository _equipoxactividadesrepository;
        private readonly EquiposRepository _equiposrepository;
        private readonly EncargadosXActividadesRepository _encargadosXActividadesRepository;
        public ActividadesServices(EncargadosXActividadesRepository encargadosXActividadesRepository,
            FacturaRepository facturaRepository ,
            ActividadesXFechaRepository actividadesXFechaRepository, 
            ClienteXReservacionRepository clienteXReservacionRepository, 
            ReservacionesRepository reservacionesRepository,
            MantenimientoRepository mantenimientoRepository, 
            EquipoRepository equipoRepository, 
            ActividadesRepository actividadesRepository, 
            EncargadosRepository encargadosRepository, 
            ClientesRepository clientesRepository, 
            PlayasRepository playasRepository,
            EquipoXActividadesRepository equipoxactividadesrepository,
            EquiposRepository equiposrepository)
        {
            _clientesRepository = clientesRepository;
            _encargadosRepository = encargadosRepository;
            _playasRepository = playasRepository;
            _actividadesRepository = actividadesRepository;
            _equipoRepository = equipoRepository;
            _mantenimientoRepository = mantenimientoRepository;
            _reservacionesRepository = reservacionesRepository;
            _clienteXReservacionRepository = clienteXReservacionRepository;
            _actividadesXFechaRepository = actividadesXFechaRepository;
            _facturaRepository = facturaRepository;
            _equipoxactividadesrepository = equipoxactividadesrepository;
            _equiposrepository = equiposrepository;
            _encargadosXActividadesRepository = encargadosXActividadesRepository;
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

        #region EncargadosXActividades
        public IEnumerable<tbEncargadosXActividades> ListarEncargadosById(int id)
        {
            try
            {
                var list = _encargadosXActividadesRepository.ListarEncargadosById(id);
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<tbEncargadosXActividades>();
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

        #region Mantenimientos
        public IEnumerable<VW_tbMantenimiento> ListarMantenimientos()
        {
            try
            {
                var list = _mantenimientoRepository.ListarMantenimientos();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbMantenimiento>();
            }
        }


        public ServiceResult InsertarMantenimientos(tbMantenimiento item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Mantenimiento = _mantenimientoRepository.InsertarMantenimientos(item);
                return resultado.Ok(Mantenimiento);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdateMantenimientos(tbMantenimiento item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Mantenimiento = _mantenimientoRepository.UpdateMatenimientos(item);
                return resultado.Ok(Mantenimiento);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeleteMantenimientos(tbMantenimiento item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Mantenimiento = _mantenimientoRepository.DeleteMantenimientos(item);
                return resultado.Ok(Mantenimiento);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public IEnumerable<tbMantenimiento> DetailsMantenimientos(int id)
        {
            try
            {
                var list = _mantenimientoRepository.DetailsMantenimientos(id);
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<tbMantenimiento>();
            }
        }
        #endregion

        #region Actividades
        public IEnumerable<VW_tbActividades> ListarActividades()
        {
            try
            {
                var list = _actividadesRepository.ListarActividades();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbActividades>();
            }
        }


        public ServiceResult InsertarActividades(tbActividades item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Actividades = _actividadesRepository.InsertarActividades(item);
                return resultado.Ok(Actividades);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdateActividades(tbActividades item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Actividades = _actividadesRepository.UpdateActividades(item);
                return resultado.Ok(Actividades);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeleteActividades(tbActividades item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Actividades = _actividadesRepository.DeleteActividades(item);
                return resultado.Ok(Actividades);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region Equipos
        public IEnumerable<VW_tbEquipos> ListarEquipos()
        {
            try
            {
                var list = _equipoRepository.ListarEquipos();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbEquipos>();
            }
        }

        public IEnumerable<VW_tbEquipos> EquipoXActividad(int id)
        {
            try
            {
                var list = _equipoRepository.EquipoXActividad(id);
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbEquipos>();
            }
        }


        public ServiceResult InsertarEquipos(tbEquipos item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Equipos = _equipoRepository.InsertarEquipos(item);
                return resultado.Ok(Equipos);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult UpdateEquipos(tbEquipos item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Equipos = _equipoRepository.UpdateEquipos(item);
                return resultado.Ok(Equipos);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult DeleteEquipos(tbEquipos item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Equipos = _equipoRepository.DeleteEquipos(item);
                return resultado.Ok(Equipos);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region EquipoXActividades
        public ServiceResult InsertarEquiposXActividades(tbEquipoXActividades item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Equipos = _equipoxactividadesrepository.Insert(item);
                return resultado.Ok(Equipos);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult EliminarEquiposXActividades(tbEquipoXActividades item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Equipos = _equipoxactividadesrepository.Delete(item);
                return resultado.Ok(Equipos);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region Reservaciones
        public ServiceResult InsertarReservaciones(tbReservaciones item)
        {
            var resultado = new ServiceResult();

            try
            {
                var reservaciones = _reservacionesRepository.InsertarReservaciones(item);
                return resultado.Ok(reservaciones);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult InsertarReservacionesExiste(tbReservaciones item)
        {
            var resultado = new ServiceResult();

            try
            {
                var reservaciones = _reservacionesRepository.InsertarReservacionesExiste(item);
                return resultado.Ok(reservaciones);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region ClientesXReservacion
        public ServiceResult InsertarClienteXReservacion(tbClienteXReservacion item)
        {
            var resultado = new ServiceResult();

            try
            {
                var ClienteXReservacion = _clienteXReservacionRepository.InsertarClienteXReservacion(item);
                return resultado.Ok(ClienteXReservacion);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        #endregion

        #region ActividadesXFecha
        public ServiceResult CantidadActividad(tbActividadesXFecha item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Encargados = _actividadesXFechaRepository.CantidadActividad(item);
                return resultado.Ok(Encargados);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        #endregion

        #region Facturas
        public ServiceResult InsertarFactura(tbFactura item)
        {
            var resultado = new ServiceResult();

            try
            {
                var Factura = _facturaRepository.InsertarFactura(item);
                return resultado.Ok(Factura);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public IEnumerable<tbFactura> ListarFactura(int id)
        {
            try
            {
                return _facturaRepository.ListarFactura(id);
            }
            catch (Exception e)
            {
                return Enumerable.Empty<tbFactura>();
            }
        }
        #endregion
    }
}