using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlayaMagica.Models
{
    public class PlayasViewModel
    {
        public int play_Id { get; set; }
        public string play_Playa { get; set; }
        public int? dire_Id { get; set; }
        public string play_ImgUrl { get; set; }
        public bool? play_Estado { get; set; }
        public int? play_UsuarioCreador { get; set; }
        public DateTime? play_FechaCreacion { get; set; }
        public int? play_UsuarioModificador { get; set; }
        public DateTime? play_FechaModificacion { get; set; }
    }
}
