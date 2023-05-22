using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class MunicipiosViewModel
    {
        public string muni_id { get; set; }
        public string muni_Descripcion { get; set; }
        public string dept_id { get; set; }
        public bool? muni_Estado { get; set; }
        public int? muni_UsuarioCreador { get; set; }
        public DateTime? muni_FechaCreacion { get; set; }
        public int? muni_UsuarioModificador { get; set; }
        public DateTime? muni_FechaModificacion { get; set; }
    }
}
