using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class MetodosPagoViewModel
    {
        public int mepa_id { get; set; }
        public string mepa_Descripcion { get; set; }
        public bool? mepa_Estado { get; set; }
        public int? mepa_UsuarioCreador { get; set; }
        public DateTime? mepa_FechaCreacion { get; set; }
        public int? mepa_UsuarioModificador { get; set; }
        public DateTime? mepa_FechaModificacion { get; set; }
    }
}
