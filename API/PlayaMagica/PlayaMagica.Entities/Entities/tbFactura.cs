﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbFactura
    {
        public int fuct_Id { get; set; }
        public int? rese_Id { get; set; }
        public int? mepa_id { get; set; }
        public decimal? fuct_Subtotal { get; set; }
        public decimal? fuct_Isv { get; set; }
        public decimal? fuct_Total { get; set; }
        public bool? fuct_Estado { get; set; }
        [NotMapped]
        public DateTime? rese_FechaReservacion { get; set; }
        [NotMapped]
        public int? rese_Cantidad { get; set; }
        [NotMapped]
        public string acti_Nombre { get; set; }
        [NotMapped]
        public decimal? acti_Precio { get; set; }
        [NotMapped]
        public string play_Playa { get; set; }
        [NotMapped]
        public string dire_DireccionExacta { get; set; }
        [NotMapped]
        public string muni_Descripcion { get; set; }
        [NotMapped]
        public string dept_Descripcion { get; set; }
        [NotMapped]
        public string NombreCompleto { get; set; }
        [NotMapped]
        public string clie_NombreCompleto { get; set; }
        [NotMapped]
        public int clie_id { get; set; }
        [NotMapped]
        public string clie_DNI { get; set; }
        [NotMapped]
        public string clie_Email { get; set; }

        public int? fuct_UsuarioCreador { get; set; }
        public DateTime? fuct_FechaCreacion { get; set; }
        public int? fuct_UsuarioModificador { get; set; }
        public DateTime? fuct_FechaModificacion { get; set; }
        public virtual tbUsuarios fuct_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios fuct_UsuarioModificadorNavigation { get; set; }
        public virtual tbMetodosPago mepa { get; set; }
        public virtual tbReservaciones rese { get; set; }
    }
}