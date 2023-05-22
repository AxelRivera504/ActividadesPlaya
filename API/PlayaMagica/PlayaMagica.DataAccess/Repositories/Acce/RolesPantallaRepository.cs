using Dapper;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess.Repositories.Acce
{
    public class RolesPantallaRepository : IRepository<tbRolesXPantallas, tbRolesXPantallas>
    {
        public RequestStatus Delete(tbRolesXPantallas item)
        {
            RequestStatus result = new RequestStatus();
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();

            parametros.Add("@role_ID", item.role_ID, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<string>(ScriptsDataBase.UDP_tbRolesPorPantalla_Delete, parametros, commandType: CommandType.StoredProcedure);
            result.MessageStatus = answer;
            return result;
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public tbRolesXPantallas Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbRolesXPantallas item)
        {
            RequestStatus result = new RequestStatus();
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@roleXpant_UsuarioCreador", item.roleXpant_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@pant_ID", item.pant_ID, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<string>(ScriptsDataBase.UDP_tbRolesPorPantalla_Insert, parametros, commandType: CommandType.StoredProcedure);
            result.MessageStatus = answer;
            return result;
        }

        public IEnumerable<tbRolesXPantallas> PantallasXRoles(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@role_ID", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbRolesXPantallas>(ScriptsDataBase.UDP_tbRolesPorPantalla_Select_ByRoleID, parametros, commandType: CommandType.StoredProcedure);
        }



        public IEnumerable<tbRolesXPantallas> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbRolesXPantallas item)
        {
            throw new NotImplementedException();
        }
    }
}
