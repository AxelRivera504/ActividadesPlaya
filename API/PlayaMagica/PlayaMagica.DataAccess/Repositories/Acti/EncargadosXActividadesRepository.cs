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
    public class EncargadosXActividadesRepository : IRepository<tbEncargadosXActividades>
    {

        public IEnumerable<tbEncargadosXActividades> ListarEncargadosById(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbEncargadosXActividades>(ScriptsDataBase.ListarEncargadosById, parametros, commandType: CommandType.StoredProcedure);
        }
     

        public tbEncargadosXActividades Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEncargadosXActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@enca_Id", item.enca_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@enac_UsuarioCreador", item.enac_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_EncargadosXActividad_Insert, parametros, commandType: CommandType.StoredProcedure);
            result.CodeStatus = answer;
            return result;
        }


        public RequestStatus Delete(tbEncargadosXActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@actividadId", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_EncargadosXActividad_Delete, parametros, commandType: CommandType.StoredProcedure);
            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbEncargadosXActividades> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEncargadosXActividades item)
        {
            throw new NotImplementedException();
        }
    }
}
