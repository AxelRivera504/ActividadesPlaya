﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbDirecciones
    {
        public tbDirecciones()
        {
            tbPlayas = new HashSet<tbPlayas>();
        }

        public int dire_Id { get; set; }
        public string dire_DireccionExacta { get; set; }
        public string muni_Id { get; set; }
        public bool? dire_Estado { get; set; }
        public int? dire_UsuarioCreador { get; set; }
        public DateTime? dire_FechaCreacion { get; set; }
        public int? dire_UsuarioModificador { get; set; }
        public DateTime? dire_FechaModificacion { get; set; }

        public virtual tbMunicipios muni { get; set; }
        public virtual ICollection<tbPlayas> tbPlayas { get; set; }
    }
}