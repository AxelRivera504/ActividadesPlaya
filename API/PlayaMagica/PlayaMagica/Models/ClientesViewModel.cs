using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ClientesViewModel
    {
        public int clie_id { get; set; }
        public string clie_Nombres { get; set; }
        public string clie_Apellidos { get; set; }
        public string clie_DNI { get; set; }
        public string clie_Email { get; set; }
        public string clie_Sexo { get; set; }
        public DateTime? clie_FechaNac { get; set; }
        public bool? clie_Estado { get; set; }
        public int? clie_UsuarioCreador { get; set; }
        public DateTime? clie_FechaCreacion { get; set; }
        public int? clie_UsuarioModificador { get; set; }
        public DateTime? clie_FechaModificacion { get; set; }

    }
}
