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
                if (insert.CodeStatus == 1)
                {
                    return result.Ok(insert.MessageStatus);
                }
                else if (insert.CodeStatus == 2)
                {
                    return result.Conflict(insert.MessageStatus);
                }
                else
                {
                    return result.BadRequest(insert.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ServiceResult UpdateUsuarios(tbUsuarios item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _usuariosRepository.Update(item);
                if (insert.CodeStatus == 1)
                {
                    return result.Ok(insert.MessageStatus);
                }
                else
                {
                    return result.BadRequest(insert.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ServiceResult BorrarUsuarios(int id)
        {
            var result = new ServiceResult();
            try
            {
                var delete = _usuariosRepository.Delete(id);
                if (delete.CodeStatus == 1)
                {
                    return result.Ok(delete.MessageStatus);
                }
                else if (delete.MessageStatus == "Registro inexistente")
                {
                    return result.Conflict(delete.MessageStatus);
                }
                else
                {
                    return result.BadRequest(delete.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
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
                if (insert.CodeStatus == 1)
                {
                    return result.Ok(insert.MessageStatus);
                }
                else
                {
                    return result.BadRequest(insert.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ServiceResult BorrarRoles(int id)
        {
            var result = new ServiceResult();
            try
            {
                var delete = _rolesRepository.Delete(id);
                if (delete.CodeStatus == 1)
                {
                    return result.Ok(delete.MessageStatus);
                }
                else if (delete.MessageStatus == "Registro inexistente")
                {
                    return result.Conflict(delete.MessageStatus);
                }
                else
                {
                    return result.BadRequest(delete.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
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

        public ServiceResult DeleteRolesXPantalla(tbRolesXPantallas item)
        {
            var result = new ServiceResult();
            try
            {
                var insert = _rolesPorPantallaRepository.Delete(item);
                if (insert.MessageStatus == "Registro eliminado exitosamente")
                {
                    return result.Ok(insert.MessageStatus);
                }
                else
                {
                    return result.BadRequest(insert.MessageStatus);
                }
            }
            catch (Exception e)
            {
                return null;
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
                return Enumerable.Empty<tbPantallas>();
            }
        }






        #endregion
    }
}
