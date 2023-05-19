using PlayaMagica.DataAccess.Repositories.Acti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.BussinessLogic.Services.ActividadesServices
{
    public class ActividadesServices
    {
        private readonly ActividadesRepository _actividadesRepository;
        private readonly ActividadesXFechaRepository _actividadesXFechaRepository;
        private readonly ClientesRepository _clientesRepository;
        private readonly ClienteXReservacionRepository _clienteXReservacionRepository;
        private readonly EncargadosRepository _encargadosRepository;
        private readonly EncargadosXActividadesRepository _encargadosXActividadesRepository;
        private readonly EquiposRepository _equiposRepository;
        private readonly EquipoXActividadesRepository _equipoXActividadesRepository;
        private readonly FacturaRepository _facturaRepository;
        private readonly MantenimientoRepository _mantenimientoRepository;
        private readonly MantenimientoXEquipoRepository _mantenimientoXEquipoRepository;
        private readonly PlayasRepository _playasRepository;
        private readonly ReservacionesRepository _reservacionesRepository;

        public ActividadesServices(ReservacionesRepository reservacionesRepository, PlayasRepository playasRepository, MantenimientoXEquipoRepository mantenimientoXEquipoRepository, MantenimientoRepository mantenimientoRepository, FacturaRepository facturaRepository, EquipoXActividadesRepository equipoXActividadesRepository, EquiposRepository equiposRepository, EncargadosXActividadesRepository encargadosXActividadesRepository, EncargadosRepository encargadosRepository, ClienteXReservacionRepository clienteXReservacionRepository, ClientesRepository clientesRepository, ActividadesRepository actividadesRepository, ActividadesXFechaRepository actividadesXFechaRepository)
        {
            _actividadesRepository = actividadesRepository;
            _actividadesXFechaRepository = actividadesXFechaRepository;
            _clientesRepository = clientesRepository;
            _clienteXReservacionRepository = clienteXReservacionRepository;
            _encargadosRepository = encargadosRepository;
            _encargadosXActividadesRepository = encargadosXActividadesRepository;
            _equiposRepository = equiposRepository;
            _equipoXActividadesRepository = equipoXActividadesRepository;
            _facturaRepository = facturaRepository;
            _mantenimientoRepository = mantenimientoRepository;
            _mantenimientoXEquipoRepository = mantenimientoXEquipoRepository;
            _playasRepository = playasRepository;
            _reservacionesRepository = reservacionesRepository;
        } 

        #region Playas

        #endregion

        #region Encargados

        #endregion

        #region Clientes

        #endregion

        #region Actividades

        #endregion

        #region Reservaciones

        #endregion

        #region ClienteXReservacion

        #endregion

        #region Equipos

        #endregion

        #region EquipoXActividades

        #endregion

        #region EncargadosXActividades

        #endregion

        #region Mantenimiento

        #endregion

        #region MantenimientoXEquipo

        #endregion

        #region Factura

        #endregion

        #region ActividadesXFecha

        #endregion
    }
}
