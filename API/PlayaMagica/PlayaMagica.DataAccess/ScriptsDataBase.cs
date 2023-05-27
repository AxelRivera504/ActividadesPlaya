using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess
{
    public class ScriptsDataBase
    {
        #region Generales UDP'S

        #region Departamentos
        public static string UDP_tbDepartamentos_Select = "Gral.UDP_tbDepartamentos_VW";
        public static string UDP_tbDepartamentos_Insert = "Gral.UDP_tbDepartamentos_InsertarDepartamentos";
        public static string UDP_tbDepartamentos_Update = "Gral.UDP_tbDepartamentos_EditarDepartamentos";
        #endregion

        #region Municipios
        public static string UDP_tbMunicipios_Select = "Gral.UDP_tbMunicipios_VW";
        public static string UDP_tbMunicipios_Insert = "Gral_tbMunicipios_InsertarMunicipios";
        public static string UDP_tbMunicipios_Update = "Gral.UDP_tbMunicipios_EditarMunicipios";
        #endregion

        #region Direcciones

        #endregion

        #region TipoDePago
        public static string UDP_tbMetodosPago_Select = "Gral.UDP_tbMetodosPago_VW";
        public static string UDP_tbMetodosPago_Insert = "Gral.UDP_tbMetodosPago_InsertarMetodosPago";
        public static string UDP_tbMetodosPago_Update = "Gral.UDP_tbMetodosPago_EditarMetodosPago";
        public static string UDP_tbMetodosPago_Delete = "Gral.UDP_tbMetodosPago_EliminarMetodosPago";
        #endregion

        #region Estados Civiles
        public static string UDP_tbEstadosCiviles_Select = "Gral.UDP_tbEstadosCiviles_VW";
        public static string UDP_tbEstadosCiviles_Insert = "gral.UDP_tbEstadosCiviles_Insertar";
        public static string UDP_tbEstadosCiviles_Update = "gral.UDP_tbEstadosCiviles_Update";
        public static string UDP_tbEstadosCiviles_Find = "Gral.UDP_tbEstadosCiviles_Find";
        #endregion

        #endregion

        #region Acceso UDP'S

        #region Usuarios
        public static string UDP_tbUsuarios_Select = "Acce.UDP_tbUsuarios_VW";
        public static string UDP_tbUsuarios_Login = "Acce.UDP_tbUsuarios_Login";
        public static string UDP_tbUsuarios_Insert = "Acce.UDP_tbUsuarios_Insert";
        public static string UDP_tbUsuarios_Update = "Acce.UDP_tbUsuarios_Update";
        public static string UDP_tbUsuarios_Delete = "Acce.UDP_tbUsuarios_Delete";
        #endregion

        #region Roles
        public static string UDP_tbRoles_Select = "Acce.UDP_tbRoles_VW";
        public static string UDP_tbRoles_Insert = "Acce.UDP_tbRoles_Insert";
        public static string UDP_tbRoles_Update = "Acce.UDP_tbRoles_Update";
        public static string UDP_tbRoles_Delete = "Acce.UDP_tbRoles_Delete";
        #endregion

        #region RolesPorPantalla
        public static string UDP_tbRolesPorPantalla_Select = "Acce.UDP_tbRolesXPantallas_Select";
        public static string UDP_tbRolesPorPantalla_Select_ByRoleID = "Acce.UDP_tbRolesXPantallas_Select_ByRoleID";
        public static string UDP_tbRolesPorPantalla_Insert = "Acce.UDP_RolesXPantallas_Insert";
        public static string UDP_tbRolesPorPantalla_Delete = "Acce.UDP_tbRolesXPantalla_Delete";
        #endregion

        #region Pantallas
        public static string UDP_tbPantallas_Select = "Acce.UDP_tbPantallas_Select";
        #endregion

        #endregion

        #region Actividades UDP'S

        #region Playas
        public static string UDP_tbPlayas_Select = "Acti.UDP_tbPlayas_VW";
        public static string UDP_tbPlayas_Insert = "Acti.UDP_tbPlayas_InsertarPlayas";
        public static string UDP_tbPlayas_Update = "Acti.UDP_tbPlayas_EditarPlayas";
        public static string UDP_tbPlayas_Delete = "Acti.UDP_tbPlayas_EliminarPlayas";
        #endregion

        #region Direcciones
        public static string UDP_tbDirecciones_Select = "Gral.UDP_tbDirecciones_VW";
        public static string UDP_tbDirecciones_Insert = "Gral.UDP_tbDirecciones_InsertarDirecciones";
        public static string UDP_tbDirecciones_Update = "Gral.UDP_tbDirecciones_Update";
        public static string UDP_tbDirecciones_Delete = "Gral.UDP_tbDirecciones_EliminarDirecciones";
        #endregion

        #region Encargados 
        public static string UDP_tbEncargados_Select = "Acti.UDP_tbEncargados_VW";
        public static string UDP_tbEncargados_Insert = "Acti.UDP_tbEncargados_Insert";
        public static string UDP_tbEncargados_Update = "Acti.UDP_tbEncargados_Update";
        public static string UDP_tbEncargados_Delete = "Acti.UDP_tbEncargados_Delete";
        #endregion

        #region Equipos
        public static string UDP_tbEquipos_Select = "Acti.UDP_tbEquipos_VW";
        public static string UDP_tbEquipos_Insert = "Acti.UDP_tbEquipos_Insert";
        public static string UDP_tbEquipos_Update = "Acti.UDP_tbEquipos_Update";
        public static string UDP_tbEquipos_Delete = "Acti.UDP_tbEquipos_Delete";
        #endregion

        #region Actividades
        public static string UDP_tbActividades_Select = "Acti.UDP_tbActividades_VW";
        public static string UDP_tbActividades_Insert = "Acti.UDP_tbActividades_Insert";
        public static string UDP_tbActividades_Update = "Acti.UDP_tbActividades_Update";
        public static string UDP_tbActividades_Delete = "Acti.UDP_tbActividades_Delete";
        #endregion

        #region Reservaciones
        public static string UDP_tbReservaciones_Select = "Acti.UDP_tbReservaciones_VW";
        public static string UDP_tbReservaciones_Insert = "Acti.UDP_tbReservaciones_Insert";
        public static string UDP_tbReservaciones_Update = "Acti.UDP_tbReservaciones_Update";
        public static string UDP_tbReservaciones_Delete = "Acti.UDP_tbReservacion_Delete";
        #endregion

        #region Clientes
        public static string UDP_tbClientes_Select = "Acti.UDP_tbClientes_VW";
        public static string UDP_tbClientes_Insert = "Acti.UDP_tbClientes_Insert";
        public static string UDP_tbClientes_Update = "Acti.UDP_tbClientes_Update";
        public static string UDP_tbClientes_Delete = "Acti.UDP_tbClientes_Delete";
        #endregion

        #region Mantenimiento
        public static string UDP_tbMantenimiento_Select = "Acti.UDP_tbMantenimiento_VW";
        public static string UDP_tbMantenimiento_Insert = "Acti.UDP_tbMantenimiento_Insert";
        public static string UDP_tbMantenimiento_Update = "Acti.UDP_tbMantenimiento_Update";
        public static string UDP_tbMantenimiento_Delete = "Acti.UDP_tbMantenimiento_Delete";
        public static string UDP_tbMantenimiento_Details = "Acti.UDP_tbMantenimiento_Detalles";
        #endregion

        #region MantenimientoXEquipo 
        public static string UDP_tbMantenimientoXEquipo_Select = "Acti.UDP_tbMantenimientoXEquipo_Select";
        public static string UDP_tbMantenimientoXEquipo_Insert = "Acti.UDP_tbMantenimientoXEquipo_Insert";
        public static string UDP_tbMantenimientoXEquipo_Update = "Acti.UDP_tbMantenimientoXEquipo_Update";
        public static string UDP_tbMantenimientoXEquipo_Delete = "Acti.UDP_MantenimientoXEquipo_Delete";
        #endregion

        #region Factura
        public static string UDP_tbFactura_Select = "Acti.UDP_tbFactura_VW";
        public static string UDP_tbFactura_Insert = "Acti.UDP_tbFactura_Insert";
        public static string UDP_tbFactura_Update = "Acti.UDP_tbFactura_Delete";
        #endregion

        #region EquiposXActividades
        public static string UDP_EquiposXActividades_Insert = "Acti.UDP_tbEquipoXActividades_Insert";
        public static string UDP_EquiposXActividades_Delelete = "Acti.UDP_tbEquipoXActividades_Delete";
        #endregion

        #endregion

    }
}
