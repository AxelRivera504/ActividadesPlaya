using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class EncargadosXActividadViewModel
    {
        public int enac_Id { get; set; }
        public int? enca_Id { get; set; }
        public int? acti_Id { get; set; }
        public bool? enac_Estado { get; set; }
        public string NombreCompletoEnca { get; set; }
        public string enca_Telefono { get; set; }
        public string enca_Email { get; set; }
        public int? enac_UsuarioCreador { get; set; }
        public DateTime? enac_FechaCreacion { get; set; }
        public int? enac_UsuarioModificador { get; set; }
        public DateTime? enac_FechaModificacion { get; set; }
    }
}
