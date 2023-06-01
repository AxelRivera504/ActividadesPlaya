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
    public class FacturaRepository : IRepository<tbFactura>
    {
        public RequestStatus InsertarFactura(tbFactura item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@rese_Id", item.rese_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@fuct_Subtotal", item.fuct_Subtotal, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@fuct_Isv", item.fuct_Isv, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@fuct_Total", item.fuct_Total, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@mepa_id", item.mepa_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@fuct_UsuarioCreador", item.fuct_UsuarioCreador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbFactura_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbFactura> ListarFactura(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@fuct_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbFactura>(ScriptsDataBase.UDP_tbFactura_ListarFacturabyId, parametros, commandType: CommandType.StoredProcedure);
        }


        public RequestStatus Delete(tbFactura item)
        {
            throw new NotImplementedException();
        }

        public tbFactura Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbFactura item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbFactura> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbFactura item)
        {
            throw new NotImplementedException();
        }
    }
}
