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
    public class ClienteXReservacionRepository : IRepository<tbClienteXReservacion,tbClienteXReservacion>
    {
        public RequestStatus InsertarClienteXReservacion(tbClienteXReservacion item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@clie_Id", item.clie_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_Id", item.rese_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@rese_OwnerPayy", item.rese_OwnerPayy, DbType.Boolean, ParameterDirection.Input);
            parametros.Add("@clre_UsuarioCreador", item.clre_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbClienteXReservacion_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbClienteXReservacion> ListClientesByIdRese(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@rese_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbClienteXReservacion>(ScriptsDataBase.UDP_tbClienteXReservacion_ListByIdRese, parametros, commandType: CommandType.StoredProcedure);
        }
        public RequestStatus Delete(tbClienteXReservacion item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public tbClienteXReservacion Find(int? id)
        {
            throw new NotImplementedException();
        }

        public tbClienteXReservacion Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbClienteXReservacion item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbClienteXReservacion> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbClienteXReservacion item)
        {
            throw new NotImplementedException();
        }
    }
}
