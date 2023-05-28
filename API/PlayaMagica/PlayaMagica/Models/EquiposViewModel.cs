using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class EquiposViewModel
    {
        public int equi_Id { get; set; }
        public string equi_Descripcion { get; set; }
        public int? equi_UsoActual { get; set; }
        public int? equi_UsoLimite { get; set; }
        public string? equi_ImgUrL { get; set; }
        public bool? equi_Estado { get; set; }
        public int? equi_UsuarioCreador { get; set; }
        public DateTime? equi_FechaCreacion { get; set; }
        public int? equi_UsuarioModificador { get; set; }
        public DateTime? equi_FechaModificacion { get; set; }
    }
}
