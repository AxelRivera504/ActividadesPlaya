﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbClienteXReservacion
    {
        [NotMapped]
        public string acti_Nombre { get; set; }
        public int clre_Id { get; set; }
        public int? clie_Id { get; set; }
        public int? rese_Id { get; set; }
        [NotMapped]
        public int? Num_Masculino { get; set; }
        [NotMapped]
        public int? Num_Femenino { get; set; }
        [NotMapped]
        public string clie_Nombres { get; set; }
        [NotMapped]
        public string clie_Apellidos { get; set; }
        [NotMapped]
        public string clie_DNI { get; set; }
        [NotMapped]
        public string clie_Email { get; set; }
        [NotMapped]
        public string clie_NombreCompleto { get; set; }
        [NotMapped]
        public int acti_Id { get; set; }
        public bool? rese_OwnerPayy { get; set; }
        public bool? clre_Estado { get; set; }
        public int? clre_UsuarioCreador { get; set; }
        public DateTime? clre_FechaCreacion { get; set; }
        public int? clre_UsuarioModificador { get; set; }
        public DateTime? clre_FechaModificacion { get; set; }

        public virtual tbUsuarios clre_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios clre_UsuarioModificadorNavigation { get; set; }
        public virtual tbReservaciones rese { get; set; }
    }
}