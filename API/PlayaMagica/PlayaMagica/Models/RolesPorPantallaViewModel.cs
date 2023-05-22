using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class RolesPorPantallaViewModel
    {

        public int roleXpant_ID { get; set; }
        public int? role_ID { get; set; }
        public int? pant_ID { get; set; }

        [NotMapped]
        public string pant_Descripcion { get; set; }

        public bool? roleXpant_Estado { get; set; }
        public int? roleXpant_UsuarioCreador { get; set; }
        public DateTime? roleXpant_FechaCreacion { get; set; }
        public int? roleXpant_UsuarioModificador { get; set; }
        public DateTime? roleXpant_FechaModificacion { get; set; }

    }
}
