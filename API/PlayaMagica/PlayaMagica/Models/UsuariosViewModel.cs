using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class UsuariosViewModel
    {
        public int usua_ID { get; set; }
        public string usua_Usuario { get; set; }
        public string usua_Clave { get; set; }  
        public int? enca_ID { get; set; }
        [NotMapped]
        public string enca_NombreCompleto { get; set; }
        [NotMapped]
        public string role_Descripcion { get; set; }
        public int? role_ID { get; set; }
        public bool? usua_Estado { get; set; }
        public int? usua_UsuarioCreador { get; set; }
        public DateTime? usua_FechaCreacion { get; set; }
        public int? usua_UsuarioModificador { get; set; }
        public DateTime? usua_FechaModificacion { get; set; }

    }
}
