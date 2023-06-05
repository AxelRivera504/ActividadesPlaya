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
    public class MantenimientoXEquipoRepository : IRepository<tbMantenimientoXEquipo>
    {
        public RequestStatus Insert(tbMantenimientoXEquipo item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@equi_Id", item.equi_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@mant_Id", item.mant_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@maeq_UsuarioCreador", item.maeq_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbMantenimientoXEquipo_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public IEnumerable<tbMantenimientoXEquipo> List()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<tbMantenimientoXEquipo>(ScriptsDataBase.UDP_tbMantenimientoXEquipo_Select, null, commandType: CommandType.StoredProcedure);
        }

        public IEnumerable<tbMantenimientoXEquipo> Reporte(DateTime fechaInicio, DateTime fechaFin)
        {

            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@fechaInicio", fechaInicio, DbType.DateTime, ParameterDirection.Input);
            parametros.Add("@fechaFin", fechaFin, DbType.DateTime, ParameterDirection.Input);
            return db.Query<tbMantenimientoXEquipo>(ScriptsDataBase.UDP_tbMantenimientoXEquipo_Reporte, parametros, commandType: CommandType.StoredProcedure);
        }
        public RequestStatus Delete(tbMantenimientoXEquipo item)
        {
            throw new NotImplementedException();
        }

        public tbMantenimientoXEquipo Find(int? id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbMantenimientoXEquipo item)
        {
            throw new NotImplementedException();
        }
    }
}
