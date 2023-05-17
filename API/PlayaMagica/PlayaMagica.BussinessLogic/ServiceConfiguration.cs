using Microsoft.Extensions.DependencyInjection;
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
            //Events_Company.BuildConnectionString(connection);
        }

        public static void BussinessLogic(this IServiceCollection services)
        {
            
        }
    }
}
