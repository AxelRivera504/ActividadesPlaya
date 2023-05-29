using Microsoft.Extensions.DependencyInjection;
using PlayaMagica.BussinessLogic.Services.AccesoServices;
using PlayaMagica.BussinessLogic.Services.ActividadesServices;
using PlayaMagica.BussinessLogic.Services.GeneralServices;
using PlayaMagica.DataAccess;
using PlayaMagica.DataAccess.Repositories.Acce;
using PlayaMagica.DataAccess.Repositories.Acti;
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
            services.AddScoped<TipoDePagoRepository>();
            services.AddScoped<PantallasRepository>();
            services.AddScoped<RolesPantallaRepository>();
            services.AddScoped<RolesRepository>();
            services.AddScoped<UsuariosRepository>();

            services.AddScoped<PlayasRepository>();
            services.AddScoped<ClientesRepository>();
            services.AddScoped<EncargadosRepository>();
            services.AddScoped<MantenimientoRepository>();
            services.AddScoped<EquipoRepository>();
            services.AddScoped<ActividadesRepository>();
            services.AddScoped<ReservacionesRepository>();
            services.AddScoped<ClienteXReservacionRepository>();
            services.AddScoped<ActividadesXFechaRepository>();
            services.AddScoped<FacturaRepository>();
            services.AddScoped<EquipoXActividadesRepository>();
            services.AddScoped<EquiposRepository>();

            PlayaMagicaContext.BuildConnectionString(connection);
        }

        public static void BussinessLogic(this IServiceCollection services)
        {
            services.AddScoped<GeneralServices>();
            services.AddScoped<ActividadesServices>();
            services.AddScoped<AccesoServices>();
        }
    }
}
