﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class ActividadesXFecha
    {
        public int acfe_Id { get; set; }
        public int? acti_Id { get; set; }
        public DateTime? acfe_Fecha { get; set; }
        public int? acfe_Cantidad { get; set; }
        public bool? acfe_Estado { get; set; }
        public int? acfe_UsuarioCreador { get; set; }
        public DateTime? acfe_FechaCreacion { get; set; }
        public int? acfe_UsuarioModificador { get; set; }
        public DateTime? acfe_FechaModificacion { get; set; }

        public virtual tbActividades acti { get; set; }
    }
}