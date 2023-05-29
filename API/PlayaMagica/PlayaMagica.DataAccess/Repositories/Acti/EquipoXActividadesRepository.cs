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
    public class EquipoXActividadesRepository : IRepository<tbEquipoXActividades>
    {
   

        public tbEquipoXActividades Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEquipoXActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@equi_Id", item.equi_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@eqac_UsuarioCreador", item.eqac_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_EquiposXActividades_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus Delete(tbEquipoXActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_EquiposXActividades_Delelete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbEquipoXActividades> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEquipoXActividades item)
        {
            throw new NotImplementedException();
        }
    }
}
