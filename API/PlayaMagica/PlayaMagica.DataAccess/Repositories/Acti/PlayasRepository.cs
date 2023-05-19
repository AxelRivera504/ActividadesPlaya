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
    public class PlayasRepository : IRepository<tbPlayas, VW_tbPlayas>
    {
        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbPlayas> ListarPlayas()
        {
            return con.VW_tbPlayas.AsList();
        }

        public RequestStatus InsertarPlayas(tbPlayas item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@play_Playa", item.play_Playa, DbType.String, ParameterDirection.Input);
            parametros.Add("@dire_id", item.dire_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@play_ImgUrl", item.play_ImgUrl, DbType.String, ParameterDirection.Input);
            parametros.Add("@play_UsuarioCreador", item.play_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbPlayas_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdatePlayas(tbPlayas item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@play_Id", item.play_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@play_Playa", item.play_Playa, DbType.String, ParameterDirection.Input);
            parametros.Add("@dire_id", item.dire_Id, DbType.String, ParameterDirection.Input);
            parametros.Add("@play_ImgUrl", item.play_ImgUrl, DbType.String, ParameterDirection.Input);
            parametros.Add("@play_UsuarioModificador", item.play_UsuarioModificador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbPlayas_Update , parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeletePlayas(tbPlayas item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@play_id", item.play_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbPlayas_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }
        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbPlayas Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbPlayas item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbPlayas> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbPlayas item)
        {
            throw new NotImplementedException();
        }
    }
}