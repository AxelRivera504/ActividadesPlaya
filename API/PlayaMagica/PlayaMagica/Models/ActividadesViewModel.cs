using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ActividadesViewModel
    {
        public int acti_Id { get; set; }

        [NotMapped]
        public string acti_Nombre { get; set; }
        public int? acti_Cupo { get; set; }
        public decimal? acti_Precio { get; set; }
        public int? play_Id { get; set; }
        public string acti_ImgUrl { get; set; }
        public bool? acti_Estado { get; set; }
        public int? acti_UsuarioCreador { get; set; }
        public DateTime? acti_FechaCreacion { get; set; }
        public int? acti_UsuarioModificador { get; set; }
        public DateTime? acti_FechaModificacion { get; set; }
    }
}
