using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class RolesViewModel
    {
        public int role_ID { get; set; }
        public string role_Descripcion { get; set; }
        public bool? role_Estado { get; set; }
        public int? role_UsuarioCreador { get; set; }
        public DateTime? role_FechaCreacion { get; set; }
        public int? role_UsuarioModificador { get; set; }
        public DateTime? role_FechaModificacion { get; set; }

    }
}
