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
    public class MantenimientoRepository : IRepository<tbMantenimiento, VW_tbMantenimiento>
    {
        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbMantenimiento> ListarMantenimientos()
        {
            return con.VW_tbMantenimiento.AsList();
        }

        public RequestStatus InsertarMantenimientos(tbMantenimiento item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@mant_Descripcion", item.mant_Descricion, DbType.String, ParameterDirection.Input);
            parametros.Add("@mant_UsuarioCreador", item.mant_UsuarioCreador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMantenimiento_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdateMatenimientos(tbMantenimiento item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@mant_Id", item.mant_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@mant_Descripcion", item.mant_Descricion, DbType.String, ParameterDirection.Input);
            parametros.Add("@mant_UsuarioModificador", item.mant_UsuarioModificador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMantenimiento_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeleteMantenimientos(tbMantenimiento item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@mant_Id", item.mant_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMantenimiento_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbMantenimiento> DetailsMantenimientos(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@mant_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<tbMantenimiento>(ScriptsDataBase.UDP_tbMantenimiento_Details, parametros, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbMantenimiento Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMantenimiento item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbMantenimiento> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbMantenimiento item)
        {
            throw new NotImplementedException();
        }
    }
}
