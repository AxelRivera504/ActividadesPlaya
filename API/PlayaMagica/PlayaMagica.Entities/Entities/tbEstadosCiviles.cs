﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbEstadosCiviles
    {
        public tbEstadosCiviles()
        {
            tbEncargados = new HashSet<tbEncargados>();
        }

        public int esci_id { get; set; }
        public string esci_Descripcion { get; set; }
        public bool? esci_Estado { get; set; }
        public int? esci_UsuarioCreador { get; set; }
        public DateTime? esci_FechaCreacion { get; set; }
        public int? esci_UsuarioModificador { get; set; }
        public DateTime? esci_FechaModificacion { get; set; }

        public virtual ICollection<tbEncargados> tbEncargados { get; set; }
    }
}