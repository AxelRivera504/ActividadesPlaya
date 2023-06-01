using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ActividadesXFechaViewModel
    {
        public int acfe_Id { get; set; }
        public int? acti_Id { get; set; }
        public DateTime? acfe_Fecha { get; set; }
        public int? acfe_Cantidad { get; set; }
        public bool? acfe_Estado { get; set; }
        public int? acfe_UsuarioCreador { get; set; }
        public DateTime? acfe_FechaCreacion { get; set; }
        public int? acfe_UsuarioModificador { get; set; }
        public DateTime? acfe_FechaModificacion { get; set; }
    }
}
