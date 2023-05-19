using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class DireccionesViewModel
    {
        public int dire_Id { get; set; }
        public string dire_DireccionExacta { get; set; }
        public string muni_Id { get; set; }
        public bool? dire_Estado { get; set; }
        public int? dire_UsuarioCreador { get; set; }
        public DateTime? dire_FechaCreacion { get; set; }
        public int? dire_UsuarioModificador { get; set; }
        public DateTime? dire_FechaModificacion { get; set; }
    }
}
