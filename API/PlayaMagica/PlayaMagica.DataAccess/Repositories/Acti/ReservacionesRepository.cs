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
    public class ReservacionesRepository : IRepository<tbReservaciones>
    {

        public RequestStatus InsertarReservaciones(tbReservaciones item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_Cantidad", item.rese_Cantidad, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_FechaReservacion", item.rese_FechaReservacion, DbType.Date, ParameterDirection.Input);
            parametros.Add("@rese_UsuarioCreador", item.rese_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbReservaciones_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus InsertarReservacionesExiste(tbReservaciones item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_Cantidad", item.rese_Cantidad, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_FechaReservacion", item.rese_FechaReservacion, DbType.Date, ParameterDirection.Input);
            parametros.Add("@rese_UsuarioCreador", item.rese_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbReservaciones_InsertExiste, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
        public RequestStatus Delete(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public tbReservaciones Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbReservaciones item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbReservaciones> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbReservaciones item)
        {
            throw new NotImplementedException();
        }
    }
}
