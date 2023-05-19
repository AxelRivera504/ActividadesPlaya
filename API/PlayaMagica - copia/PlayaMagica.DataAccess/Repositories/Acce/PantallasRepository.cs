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
    public class PantallasRepository : IRepository<tbPantallas, tbPantallas>
    {

        public IEnumerable<tbPantallas> ListPantallas()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<tbPantallas>(ScriptsDataBase.UDP_tbPantallas_Select, parametros, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public tbPantallas Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPantallas item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbPantallas> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPantallas item)
        {
            throw new NotImplementedException();
        }
    }
}
