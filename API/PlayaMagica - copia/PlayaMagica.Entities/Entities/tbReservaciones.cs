﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbReservaciones
    {
        public tbReservaciones()
        {
            tbClienteXReservacion = new HashSet<tbClienteXReservacion>();
            tbFactura = new HashSet<tbFactura>();
        }

        public int rese_Id { get; set; }
        public int? rese_Cantidad { get; set; }
        public int? acti_Id { get; set; }
        public DateTime? rese_FechaReservacion { get; set; }
        public bool? rese_Estado { get; set; }
        public int? rese_UsuarioCreador { get; set; }
        public DateTime? rese_FechaCreacion { get; set; }
        public int? rese_UsuarioModificador { get; set; }
        public DateTime? rese_FechaModificacion { get; set; }

        public virtual tbActividades acti { get; set; }
        public virtual ICollection<tbClienteXReservacion> tbClienteXReservacion { get; set; }
        public virtual ICollection<tbFactura> tbFactura { get; set; }
    }
}