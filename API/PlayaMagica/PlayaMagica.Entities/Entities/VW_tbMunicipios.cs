﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class VW_tbMunicipios
    {
        public string muni_Id { get; set; }
        public string muni_Descripcion { get; set; }
        public string dept_Id { get; set; }
        public string dept_Descripcion { get; set; }
        public int? muni_UsuarioCreador { get; set; }
        public string muni_UsuarioCreador_Nombre { get; set; }
        public DateTime? muni_FechaCreacion { get; set; }
        public int? muni_UsuarioModificador { get; set; }
        public string muni_UsuarioModificador_Nombre { get; set; }
        public DateTime? muni_FechaModificacion { get; set; }
    }
}