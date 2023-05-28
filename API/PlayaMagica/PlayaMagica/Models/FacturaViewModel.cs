using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class FacturaViewModel
    {
        public int fuct_Id { get; set; }
        public int? rese_Id { get; set; }
        public int? mepa_id { get; set; }
        public decimal? fuct_Subtotal { get; set; }
        public decimal? fuct_Isv { get; set; }
        public decimal? fuct_Total { get; set; }
        public bool? fuct_Estado { get; set; }
        public int? fuct_UsuarioCreador { get; set; }
        public DateTime? fuct_FechaCreacion { get; set; }
        public int? fuct_UsuarioModificador { get; set; }
        public DateTime? fuct_FechaModificacion { get; set; }
    }
}
