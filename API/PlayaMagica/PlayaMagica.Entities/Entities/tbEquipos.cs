﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbEquipos
    {
        public tbEquipos()
        {
            tbMantenimientoXEquipo = new HashSet<tbMantenimientoXEquipo>();
        }

        public int equi_Id { get; set; }
        public string equi_Descripcion { get; set; }
        public int? equi_UsoActual { get; set; }
        public int? equi_UsoLimite { get; set; }
        public bool? equi_Estado { get; set; }
        public int? equi_UsuarioCreador { get; set; }
        public DateTime? equi_FechaCreacion { get; set; }
        public int? equi_UsuarioModificador { get; set; }
        public DateTime? equi_FechaModificacion { get; set; }

        public virtual ICollection<tbMantenimientoXEquipo> tbMantenimientoXEquipo { get; set; }
    }
}