using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ReservacionesViewModel
    {
        public int rese_Id { get; set; }
        public int? rese_Cantidad { get; set; }
        public int? acti_Id { get; set; }
        public DateTime? rese_FechaReservacion { get; set; }
        public bool? rese_Estado { get; set; }
        public int? rese_UsuarioCreador { get; set; }
        public DateTime? rese_FechaCreacion { get; set; }
        public int? rese_UsuarioModificador { get; set; }
        public DateTime? rese_FechaModificacion { get; set; }
    }
}
