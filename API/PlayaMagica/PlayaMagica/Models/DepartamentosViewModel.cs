using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class DepartamentosViewModel
    {
        public string dept_id { get; set; }
        public string dept_Descripcion { get; set; }
        public bool? dept_Estado { get; set; }
        public int? dept_UsuarioCreador { get; set; }
        public DateTime? dept_FechaCreacion { get; set; }
        public int? dept_UsuarioModificador { get; set; }
        public DateTime? dept_FechaModificacion { get; set; }
    }
}
