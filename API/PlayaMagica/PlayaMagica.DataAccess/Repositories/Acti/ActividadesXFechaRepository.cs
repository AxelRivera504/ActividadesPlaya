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
    public class ActividadesXFechaRepository : IRepository<tbActividadesXFecha, tbActividadesXFecha>
    {
        public RequestStatus CantidadActividad(tbActividadesXFecha item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acfe_Fecha", item.acfe_Fecha, DbType.Date, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbActividadesXFecha_VerificarCupos, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }



        public IEnumerable<tbActividadesXFecha> CantidadVisitantesXfecha()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<tbActividadesXFecha>(ScriptsDataBase.UDP_tbActividadesXFecha_Visitantes, null, commandType: CommandType.StoredProcedure);
        }





        public RequestStatus Delete(tbActividadesXFecha item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public tbActividadesXFecha Find(int? id)
        {
            throw new NotImplementedException();
        }

        public tbActividadesXFecha Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbActividadesXFecha item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbActividadesXFecha> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbActividadesXFecha item)
        {
            throw new NotImplementedException();
        }
    }
}
