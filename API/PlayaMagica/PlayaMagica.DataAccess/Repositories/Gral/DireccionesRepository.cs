using Dapper;
using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess.Repositories.Gral
{
    public class DireccionesRepository : IRepository<tbDirecciones, VW_tbDirecciones>
    {
        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbDirecciones Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbDirecciones item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dire_DireccionExacta", item.dire_DireccionExacta, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_Id", item.muni_Id, DbType.String, ParameterDirection.Input);
            parametros.Add("@dire_UsuarioCreador", item.dire_UsuarioCreador, DbType.Int32, ParameterDirection.Input);


            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbDirecciones_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<VW_tbDirecciones> List()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<VW_tbDirecciones>(ScriptsDataBase.UDP_tbDirecciones_Select, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbDirecciones item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dire_Id", item.dire_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@dire_DireccionExacta", item.dire_DireccionExacta, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_Id", item.muni_Id, DbType.String, ParameterDirection.Input);
            parametros.Add("@dire_UsuarioModificador", item.dire_UsuarioModificador, DbType.Int32, ParameterDirection.Input);


            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbDirecciones_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus Delete(tbDirecciones item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dire_Id", item.dire_Id, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbDirecciones_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
    }
}
