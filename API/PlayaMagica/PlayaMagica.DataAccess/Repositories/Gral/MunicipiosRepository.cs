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
    public class MunicipiosRepository : IRepository<tbMunicipios, VW_tbMunicipios>
    {
        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbMunicipios Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMunicipios item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dept_Id", item.dept_id, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_Descripcion", item.muni_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_UsuarioCreador", item.muni_UsuarioCreador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMunicipios_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<VW_tbMunicipios> List()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<VW_tbMunicipios>(ScriptsDataBase.UDP_tbMunicipios_Select, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbMunicipios item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@muni_Id", item.dept_id, DbType.String, ParameterDirection.Input);
            parametros.Add("@dept_Id", item.muni_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_Descripcion", item.muni_UsuarioCreador, DbType.String, ParameterDirection.Input);
            parametros.Add("@muni_UsuarioModificador", item.muni_UsuarioModificador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMunicipios_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
    }
}
