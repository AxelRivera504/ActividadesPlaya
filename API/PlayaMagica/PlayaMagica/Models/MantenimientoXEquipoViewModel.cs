using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class MantenimientoXEquipoViewModel
    {
        public int maeq_Id { get; set; }
        public int? equi_Id { get; set; }
        public int? mant_Id { get; set; }
        [NotMapped]
        public string equi_Descripcion { get; set; }
        [NotMapped]
        public string equi_ImgUrL { get; set; }
        [NotMapped]
        public string mant_Descricion { get; set; }
        public bool? maeq_Estado { get; set; }
        public int? maeq_UsuarioCreador { get; set; }
        public DateTime? maeq_FechaCreacion { get; set; }
        public int? maeq_UsuarioModificador { get; set; }
        public DateTime? maeq_FechaModificacion { get; set; }
    }
}
