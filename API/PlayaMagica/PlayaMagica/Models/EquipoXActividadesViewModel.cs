using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class EquipoXActividadesViewModel
    {
        public int eqac_Id { get; set; }
        public int? acti_Id { get; set; }
        public int? equi_Id { get; set; }
        public int? eqac_UsuarioCreador { get; set; }
        public DateTime? eqac_FechaCreacion { get; set; }
        public int? eqac_UsuarioModificador { get; set; }
        public DateTime? eqac_FechaModificacion { get; set; }
    }
}
