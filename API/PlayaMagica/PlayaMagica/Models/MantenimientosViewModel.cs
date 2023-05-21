using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class MantenimientosViewModel
    {
        public int mant_Id { get; set; }
        public string mant_Descricion { get; set; }
        public bool? mant_Estado { get; set; }
        public int? mant_UsuarioCreador { get; set; }
        public DateTime? mant_FechaCreacion { get; set; }
        public int? mant_UsuarioModificador { get; set; }
        public DateTime? mant_FechaModificacion { get; set; }

    }
}
