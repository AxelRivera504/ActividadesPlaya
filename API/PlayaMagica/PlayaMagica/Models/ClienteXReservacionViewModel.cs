using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class ClienteXReservacionViewModel
    {
        [NotMapped]
        public string acti_Nombre { get; set; }
        public int Num_Masculino { get; set; }
        public int Num_Femenino { get; set; }
        public int acti_Id { get; set; }
        public int clre_Id { get; set; }
        public int? clie_Id { get; set; }
        public int? rese_Id { get; set; }
        public bool? rese_OwnerPayy { get; set; }
        public bool? clre_Estado { get; set; }
        public int? clre_UsuarioCreador { get; set; }
        public DateTime? clre_FechaCreacion { get; set; }
        public int? clre_UsuarioModificador { get; set; }
        public DateTime? clre_FechaModificacion { get; set; }
    }
}
