using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class EstadosCivilesViewModel
    {
        public int esci_id { get; set; }
        public string esci_Descripcion { get; set; }
        public bool? esci_Estado { get; set; }
        public int? esci_UsuarioCreador { get; set; }
        public DateTime? esci_FechaCreacion { get; set; }
        public int? esci_UsuarioModificador { get; set; }
        public DateTime? esci_FechaModificacion { get; set; }
    }
}
