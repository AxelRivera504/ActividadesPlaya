using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ClienteXReservacionViewModel
    {
        public int clre_Id { get; set; }
        public int? clie_Id { get; set; }
        public int? rese_Id { get; set; }
        public bool? clre_Estado { get; set; }
        public int? clre_UsuarioCreador { get; set; }
        public DateTime? clre_FechaCreacion { get; set; }
        public int? clre_UsuarioModificador { get; set; }
        public DateTime? clre_FechaModificacion { get; set; }
    }
}
