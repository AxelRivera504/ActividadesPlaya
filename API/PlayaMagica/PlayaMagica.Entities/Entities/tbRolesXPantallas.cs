﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PlayaMagica.Entities.Entities
{
    public partial class tbRolesXPantallas
    {
        public int roleXpant_ID { get; set; }
        public int? role_ID { get; set; }
        public int? pant_ID { get; set; }
        public bool? roleXpant_Estado { get; set; }
        public int? roleXpant_UsuarioCreador { get; set; }
        public DateTime? roleXpant_FechaCreacion { get; set; }
        public int? roleXpant_UsuarioModificador { get; set; }
        public DateTime? roleXpant_FechaModificacion { get; set; }

        public virtual tbPantallas pant { get; set; }
        public virtual tbRoles role { get; set; }
        public virtual tbUsuarios roleXpant_UsuarioCreadorNavigation { get; set; }
        public virtual tbUsuarios roleXpant_UsuarioModificadorNavigation { get; set; }
    }
}