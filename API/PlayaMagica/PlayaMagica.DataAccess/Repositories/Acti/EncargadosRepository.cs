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
    public class EncargadosRepository : IRepository<tbEncargados, VW_tbEncargados>
    {

        PlayaMagicaContext con = new PlayaMagicaContext();
        public IEnumerable<VW_tbEncargados> ListarEncargados()
        {
            return con.VW_tbEncargados.AsList();
        }


        public IEnumerable<tbEncargados> ListarEncargadosddl()
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            var parametros = new DynamicParameters();
            return db.Query<tbEncargados>(ScriptsDataBase.UDP_tbEncargados_ddl, null, commandType: CommandType.StoredProcedure);
        }

        public RequestStatus InsertarEncargados(tbEncargados item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@enca_Nombre", item.enca_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Apellidos", item.enca_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_DNI", item.enca_DNI, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Email", item.enca_Email, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Telefono", item.enca_Telefono, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Sexo", item.enca_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@esci_id", item.esci_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@enca_FechaNac", item.enca_FechaNac, DbType.Date, ParameterDirection.Input);
            parametros.Add("@enca_UsuarioCreador", item.enca_UsuarioCreador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEncargados_Insert, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus UpdateEncargados(tbEncargados item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@enca_id", item.enca_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@enca_Nombre", item.enca_Nombres, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Apellidos", item.enca_Apellidos, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_DNI", item.enca_DNI, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Email", item.enca_Email, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Telefono", item.enca_Telefono, DbType.String, ParameterDirection.Input);
            parametros.Add("@enca_Sexo", item.enca_Sexo, DbType.String, ParameterDirection.Input);
            parametros.Add("@esci_id", item.esci_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@enca_FechaNac", item.enca_FechaNac, DbType.Date, ParameterDirection.Input);
            parametros.Add("@enca_UsuarioModificador", item.enca_UsuarioModificador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEncargados_Update, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus DeleteEncargados(tbEncargados item)
        {
            using var db = new SqlConnection(PlayaMagicaContext.ConnectionString);
            RequestStatus result = new RequestStatus();
            var parametros = new DynamicParameters();
            parametros.Add("@enca_id", item.enca_id, DbType.Int32, ParameterDirection.Input);
            parametros.Add("@enca_UsuarioModificador", item.enca_UsuarioModificador, DbType.Int32, ParameterDirection.Input);
            var answer = db.QueryFirst<int>(ScriptsDataBase.UDP_tbEncargados_Delete, parametros, commandType: CommandType.StoredProcedure);

            result.CodeStatus = answer;
            return result;
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public VW_tbEncargados Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbEncargados item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<VW_tbEncargados> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbEncargados item)
        {
            throw new NotImplementedException();
        }
    }
}
