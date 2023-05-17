using PlayaMagica.DataAccess.Repositories.Acce;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.BussinessLogic.Services.AccesoServices
{
    public class AccesoServices
    {
        private readonly UsuariosRepository _usuariosRepository;
        private readonly RolesPantallaRepository _rolesPorPantallaRepository;
        private readonly RolesRepository _rolesRepository;
        private readonly PantallasRepository _pantallasRepository;

        public AccesoServices(PantallasRepository pantallasRepository, RolesRepository rolesRepository, RolesPantallaRepository rolesPorPantallaRepository, UsuariosRepository usuariosRepository)
        {
            _usuariosRepository = usuariosRepository;
            _rolesPorPantallaRepository = rolesPorPantallaRepository;
            _rolesRepository = rolesRepository;
            _pantallasRepository = pantallasRepository;
        }

        #region Usuarios

        #endregion

        #region Roles

        #endregion

        #region RolesPorPantalla

        #endregion

        #region Pantallas

        #endregion
    }
}
