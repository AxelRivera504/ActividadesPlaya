﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbDepartamentos
    {
        public tbDepartamentos()
        {
            tbMunicipios = new HashSet<tbMunicipios>();
        }

        public string dept_id { get; set; }
        public string dept_Descripcion { get; set; }
        public bool? dept_Estado { get; set; }
        public int? dept_UsuarioCreador { get; set; }
        public DateTime? dept_FechaCreacion { get; set; }
        public int? dept_UsuarioModificador { get; set; }
        public DateTime? dept_FechaModificacion { get; set; }

        public virtual ICollection<tbMunicipios> tbMunicipios { get; set; }
    }
}