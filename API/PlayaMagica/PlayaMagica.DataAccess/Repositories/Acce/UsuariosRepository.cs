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
    public class UsuariosRepository : IRepository<tbUsuarios, VW_tbUsuarios>
    {
        public RequestStatus Delete(tbUsuarios item)
        {
            RequestStatus result = new RequestStatus();
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();

            parametros.Add("@usua_id", item.usua_ID, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbUsuarios_Delete, parametros, commandType: CommandType.StoredProcedure);
            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbUsuarios Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbUsuarios item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@usua_Usuario", item.usua_Usuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@usua_Clave", item.usua_Clave, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_ID", item.enca_ID, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@role_ID", item.role_ID, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@usua_UsuarioCreador", item.usua_UsuarioCreador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbUsuarios_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }





        public IEnumerable<VW_tbUsuarios> List()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<VW_tbUsuarios>(ScriptsDataBase.UDP_tbUsuarios_Select, parametros, commandType: CommandType.StoredProcedure);
        }
        public tbUsuarios Login(tbUsuarios item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@usua_Usuario", item.usua_Usuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@usua_Clave", item.usua_Clave, DbType.String, ParameterDirection.Input);

            return db.QueryFirst<tbUsuarios>(ScriptsDataBase.UDP_tbUsuarios_Login, parametros, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbUsuarios item)
        {

            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@usua_id", item.usua_ID, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@usua_Usuario", item.usua_Usuario, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_ID", item.enca_ID, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@role_ID", item.role_ID, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@usua_UsuarioModificador", item.usua_UsuarioModificador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbUsuarios_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
    }
}
