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
    public class ActividadesRepository : IRepository<tbActividades, VW_tbActividades>
    {
        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbActividades> ListarActividades()
        {
            return con.VW_tbActividades.AsList();
        }

        public RequestStatus InsertarActividades(tbActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Nombre", item.acti_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@acti_Cupo", item.acti_Cupo, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_Precio", item.acti_Precio, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@play_Id", item.play_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_ImgUrl", item.acti_ImgUrl, DbType.String, ParameterDirection.Input);
            parametros.Add("@acti_UsuarioCreador", item.acti_UsuarioCreador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbActividades_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdateActividades(tbActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_Nombre", item.acti_Nombre, DbType.String, ParameterDirection.Input);
            parametros.Add("@acti_Cupo", item.acti_Cupo, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_ImgUrl", item.acti_ImgUrl, DbType.String, ParameterDirection.Input);
            parametros.Add("@acti_Precio", item.acti_Precio, DbType.Decimal, ParameterDirection.Input);
            parametros.Add("@play_Id", item.play_Id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@acti_UsuarioModificador", item.acti_UsuarioModificador, DbType.String, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbActividades_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeleteActividades(tbActividades item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@acti_Id", item.acti_Id, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbActividades_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbActividades Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbActividades item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbActividades> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbActividades item)
        {
            throw new NotImplementedException();
        }
    }
}
