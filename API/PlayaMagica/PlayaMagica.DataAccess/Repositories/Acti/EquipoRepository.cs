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
    public class EquipoRepository : IRepository<tbEquipos, VW_tbEquipos>
    {
        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbEquipos> ListarEquipos()
        {
            return con.VW_tbEquipos.AsList();
        }

        public RequestStatus InsertarEquipos(tbEquipos item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@equi_Descripcion", item.equi_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@equi_UsoLimite", item.equi_UsoLimite, DbType.String, ParameterDirection.Input);
            parametros.Add("@equi_UsuarioCreador", item.equi_UsuarioCreador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEquipos_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdateEquipos(tbEquipos item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@equi_id", item.equi_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@equi_Descripcion", item.equi_Descripcion, DbType.String, ParameterDirection.Input);
            parametros.Add("@equi_UsoLimite", item.equi_UsoLimite, DbType.String, ParameterDirection.Input);
            parametros.Add("@equi_UsuarioModificador", item.equi_UsuarioModificador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEquipos_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeleteEquipos(tbEquipos item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@equi_id", item.equi_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEquipos_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public VW_tbEquipos Find(int id)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<VW_tbEquipos> EquipoXActividad(int id)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", id, DbType.Int32, ParameterDirection.Input);
            return db.Query<VW_tbEquipos>(ScriptsDataBase.UDP_EquipoXActividad, parametros, commandType: CommandType.StoredProcedure);
        
        }

        public IEnumerable<VW_tbEquipos> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEquipos item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEquipos item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
