using Dapper;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess.Repositories.Acti
{
    public class ClientesRepository : IRepository<tbClientes, VW_tbClientes>
    {

        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbClientes> ListarClientes()
        {
            return con.VW_tbClientes.AsList();
        }

        public RequestStatus InsertarClientes(tbClientes item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Nombres", item.clie_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Apellidos", item.clie_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_DNI", item.clie_DNI, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Email", item.clie_Email, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Sexo", item.clie_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_FechaNac", item.clie_FechaNac, DbType.Date, ParameterDirection.Input);
            parametros.Add("@clie_UsuarioCreador", item.clie_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbClientes_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdateClientes(tbClientes item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@clie_id", item.clie_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@clie_Nombres", item.clie_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Apellidos", item.clie_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_DNI", item.clie_DNI, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Email", item.clie_Email, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_Sexo", item.clie_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@clie_FechaNac", item.clie_FechaNac, DbType.Date, ParameterDirection.Input);
            parametros.Add("@clie_UsuarioModificador", item.clie_UsuarioModificador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbClientes_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeleteClientes(tbClientes item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@clie_id", item.clie_id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbClientes_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbClientes Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClientes item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbClientes> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbClientes item)
        {
            throw new NotImplementedException();
        }
    }
}
