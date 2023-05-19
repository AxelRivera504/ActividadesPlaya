using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class PantallasViewModel
    {
        public int pant_ID { get; set; }
        public string pant_Descripcion { get; set; }
        public bool? pant_Estado { get; set; }
        public int? pant_UsuarioCreador { get; set; }
        public DateTime? pant_FechaCreacion { get; set; }
        public int? pant_UsuarioModificador { get; set; }
        public DateTime? pant_FechaModificacion { get; set; }
    }
}
