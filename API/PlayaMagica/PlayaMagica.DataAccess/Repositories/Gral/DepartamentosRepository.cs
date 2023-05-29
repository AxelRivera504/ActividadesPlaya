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
    public class DepartamentosRepository : IRepository<tbDepartamentos, VW_tbDepartamentos>
    {
        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbDepartamentos Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbDepartamentos item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dept_Id", item.dept_id, DbType.String, ParameterDirection.Input);
            parametros.Add("@dept_Descripcion", item.dept_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@dept_UsuarioCreador", item.dept_UsuarioCreador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbDepartamentos_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<VW_tbDepartamentos> List()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<VW_tbDepartamentos>(ScriptsDataBase.UDP_tbDepartamentos_Select, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Update(tbDepartamentos item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@dept_Id", item.dept_id, DbType.String, ParameterDirection.Input);
            parametros.Add("@dept_Descripcion", item.dept_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@dept_UsuarioModificador", item.dept_UsuarioModificador, DbType.Int32, ParameterDirection.Input);

            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbDepartamentos_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
    }
}
