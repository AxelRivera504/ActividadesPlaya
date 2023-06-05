using PlayaMagica.DataAccess.Repositories.Acce;
using PlayaMagica.Entities.Entities;
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
        public IEnumerable<VW_tbUsuarios> ListadoUsuarios()
        {
            try
            {
                return _usuariosRepository.List();
            }
            catch (Exception e)
            {
                string message = e.Message;
                return Enumerable.Empty<VW_tbUsuarios>();
                throw;
            }
        }
        public ServiceResult ValidarLogin(tbUsuarios item)
        {
            var resultado = new ServiceResult();

            try
            {
                var usuario = _usuariosRepository.Login(item);
                return resultado.Ok(usuario);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }

        public ServiceResult InsertarUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _usuariosRepository.Insert(item);

                return result.Ok(insert);

            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult UpdateUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _usuariosRepository.Update(item);

                return result.Ok(insert);

            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult BorrarUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();
            try
            {
                var delete = _usuariosRepository.Delete(item);
                return result.Ok(delete);

            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }

        }
 
        #endregion

        #region Roles
        public IEnumerable<VW_tbRoles> ListarRoles()
        {
            try
            {
                var list = _rolesRepository.List();
                return list;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                return Enumerable.Empty<VW_tbRoles>();
            }
        }

        public ServiceResult InsertarRoles(tbRoles item)
        {
            var result = new ServiceResult();
            try
            {
                var roles = _rolesRepository.Insert(item);
                return result.Ok(roles);
            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult UpdateRoles(tbRoles item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _rolesRepository.Update(item);

                return result.Ok(insert);

            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }
        }

        public ServiceResult BorrarRoles(tbRoles item)
        {
            var result = new ServiceResult();
            try
            {
                var delete = _rolesRepository.Delete(item);
                return result.Ok(delete);

            }
            catch (Exception e)
            {
                return result.Error(e.Message);
            }

        }

        #endregion

        #region RolesPorPantalla
        public ServiceResult InsertarRolesXpantallas(tbRolesXPantallas item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _rolesPorPantallaRepository.Insert(item);
                return result.Ok(insert.MessageStatus);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }

        public ServiceResult DeleteRolesXpantallas(tbRolesXPantallas item)
        {
            var resultado = new ServiceResult();

            try
            {
                var RolesXpant = _rolesPorPantallaRepository.DeleteRolesXPantallas(item);
                return resultado.Ok(RolesXpant);
            }
            catch (Exception ex)
            {
                return resultado.Error(ex.Message);
            }
        }
        public IEnumerable<tbRolesXPantallas> ListadoPantallas(int id)
        {
            try
            {
                return _rolesPorPantallaRepository.ListPantallasXroles(id);
            }
            catch (Exception e)
            {
                string message = e.Message;
                return Enumerable.Empty<tbRolesXPantallas>();
            }
        }



        #endregion

        #region Pantallas

        public IEnumerable<tbPantallas> ListadoPantallas()
        {
            try
            {
                return _pantallasRepository.ListPantallas();
            }
            catch (Exception e)
            {
                string message = e.Message;
                return Enumerable.Empty<tbPantallas>();
            }
        }

        #endregion
    }
}
