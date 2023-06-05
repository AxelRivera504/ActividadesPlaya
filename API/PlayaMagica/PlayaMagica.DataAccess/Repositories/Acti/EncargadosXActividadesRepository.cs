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
        public RequestStatus Delete(tbEncargadosXActividades item)
        {
            throw new NotImplementedException();
        }

        public tbEncargadosXActividades Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEncargadosXActividades item)
        {
            throw new NotImplementedException();
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
