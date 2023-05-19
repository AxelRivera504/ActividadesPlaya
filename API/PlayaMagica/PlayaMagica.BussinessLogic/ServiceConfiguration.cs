using Microsoft.Extensions.DependencyInjection;
using PlayaMagica.BussinessLogic.Services.GeneralServices;
using PlayaMagica.DataAccess;
using PlayaMagica.DataAccess.Repositories.Acce;
using PlayaMagica.DataAccess.Repositories.Gral;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.BussinessLogic
{
    public static class ServiceConfiguration
    {
        public static void DataAccess(this IServiceCollection services, string connection)
        {
            services.AddScoped<DepartamentosRepository>();
            services.AddScoped<DireccionesRepository>();
            services.AddScoped<EstadosCivilesRepository>();
            services.AddScoped<MunicipiosRepository>();
            services.AddScoped<PlayasRepository>();
            services.AddScoped<TipoDePagoRepository>();
            services.AddScoped<PantallasRepository>();
            services.AddScoped<RolesPantallaRepository>();
            services.AddScoped<RolesRepository>();
            services.AddScoped<UsuariosRepository>();
            PlayaMagicaContext.BuildConnectionString(connection);
        }

        public static void BussinessLogic(this IServiceCollection services)
        {
            services.AddScoped<GeneralServices>();
        }
    }
}
