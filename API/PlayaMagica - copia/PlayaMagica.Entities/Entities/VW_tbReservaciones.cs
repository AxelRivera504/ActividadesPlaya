﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class VW_tbReservaciones
    {
        public int rese_Id { get; set; }
        public int? rese_Cantidad { get; set; }
        public int? acti_Id { get; set; }
        public string acti_Nombre { get; set; }
        public bool? rese_Estado { get; set; }
        public int? rese_UsuarioCreador { get; set; }
        public string rese_UsuarioCreador_Nombre { get; set; }
        public DateTime? rese_FechaCreacion { get; set; }
        public int? rese_UsuarioModificador { get; set; }
        public string rese_UsuarioModificador_Nombre { get; set; }
        public DateTime? rese_FechaModificacion { get; set; }
    }
}