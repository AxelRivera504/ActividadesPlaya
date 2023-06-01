using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class EncargadosViewModel
    {
        public int enca_id { get; set; }
        public string enca_Nombres { get; set; }
        public string enca_Apellidos { get; set; }

        
        public string enca_NombreCompleto { get; set; }

        public string enca_DNI { get; set; }
        public string enca_Email { get; set; }
        public string enca_Telefono { get; set; }
        public string enca_Sexo { get; set; }
        public int? esci_id { get; set; }
        public DateTime? enca_FechaNac { get; set; }
        public bool? enca_Estado { get; set; }
        public int? enca_UsuarioCreador { get; set; }
        public DateTime? enca_FechaCreacion { get; set; }
        public int? enca_UsuarioModificador { get; set; }
        public DateTime? enca_FechaModificacion { get; set; }
    }
}
