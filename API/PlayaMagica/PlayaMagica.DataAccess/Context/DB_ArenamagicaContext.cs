﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using PlayaMagica.Entities.Entities;

#nullable disable

namespace PlayaMagica.DataAccess.Context
{
    public partial class DB_ArenamagicaContext : DbContext
    {
        public DB_ArenamagicaContext()
        {
        }

        public DB_ArenamagicaContext(DbContextOptions<DB_ArenamagicaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ActividadesXFecha> ActividadesXFecha { get; set; }
        public virtual DbSet<Gral_tbMetodosPago> Gral_tbMetodosPago { get; set; }
        public virtual DbSet<VW_tbActividades> VW_tbActividades { get; set; }
        public virtual DbSet<VW_tbDepartamentos> VW_tbDepartamentos { get; set; }
        public virtual DbSet<VW_tbDirecciones> VW_tbDirecciones { get; set; }
        public virtual DbSet<VW_tbEncargados> VW_tbEncargados { get; set; }
        public virtual DbSet<VW_tbEquipos> VW_tbEquipos { get; set; }
        public virtual DbSet<VW_tbEstadosCiviles> VW_tbEstadosCiviles { get; set; }
        public virtual DbSet<VW_tbMunicipios> VW_tbMunicipios { get; set; }
        public virtual DbSet<VW_tbPlayas> VW_tbPlayas { get; set; }
        public virtual DbSet<VW_tbReservaciones> VW_tbReservaciones { get; set; }
        public virtual DbSet<tbActividades> tbActividades { get; set; }
        public virtual DbSet<tbClienteXReservacion> tbClienteXReservacion { get; set; }
        public virtual DbSet<tbClientes> tbClientes { get; set; }
        public virtual DbSet<tbDepartamentos> tbDepartamentos { get; set; }
        public virtual DbSet<tbDirecciones> tbDirecciones { get; set; }
        public virtual DbSet<tbEncargados> tbEncargados { get; set; }
        public virtual DbSet<tbEncargadosXActividades> tbEncargadosXActividades { get; set; }
        public virtual DbSet<tbEquipoXActividades> tbEquipoXActividades { get; set; }
        public virtual DbSet<tbEquipos> tbEquipos { get; set; }
        public virtual DbSet<tbEstadosCiviles> tbEstadosCiviles { get; set; }
        public virtual DbSet<tbFactura> tbFactura { get; set; }
        public virtual DbSet<tbMantenimiento> tbMantenimiento { get; set; }
        public virtual DbSet<tbMantenimientoXEquipo> tbMantenimientoXEquipo { get; set; }
        public virtual DbSet<tbMetodosPago> tbMetodosPago { get; set; }
        public virtual DbSet<tbMunicipios> tbMunicipios { get; set; }
        public virtual DbSet<tbPantallas> tbPantallas { get; set; }
        public virtual DbSet<tbPlayas> tbPlayas { get; set; }
        public virtual DbSet<tbReservaciones> tbReservaciones { get; set; }
        public virtual DbSet<tbRoles> tbRoles { get; set; }
        public virtual DbSet<tbRolesXPantallas> tbRolesXPantallas { get; set; }
        public virtual DbSet<tbUsuarios> tbUsuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<ActividadesXFecha>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ActividadesXFecha", "Acti");

                entity.Property(e => e.acfe_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.acfe_Fecha).HasColumnType("date");

                entity.Property(e => e.acfe_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.acfe_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.acfe_Id).ValueGeneratedOnAdd();

                entity.HasOne(d => d.acti)
                    .WithMany()
                    .HasForeignKey(d => d.acti_Id)
                    .HasConstraintName("FK_Acti_tbActi_acti_Id");
            });

            modelBuilder.Entity<Gral_tbMetodosPago>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("Gral_tbMetodosPago");

                entity.Property(e => e.mepa_Descripcion).HasMaxLength(200);

                entity.Property(e => e.mepa_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.mepa_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.mepa_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.mepa_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbActividades>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbActividades", "Acti");

                entity.Property(e => e.acti_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.acti_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.acti_Nombre).HasMaxLength(250);

                entity.Property(e => e.acti_Precio).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.acti_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.acti_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbDepartamentos>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbDepartamentos", "Gral");

                entity.Property(e => e.dept_Descripcion).HasMaxLength(200);

                entity.Property(e => e.dept_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.dept_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.dept_Id)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.dept_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.dept_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbDirecciones>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbDirecciones", "Gral");

                entity.Property(e => e.dire_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.dire_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.dire_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.dire_UsuarioModificador_Nombre).HasMaxLength(100);

                entity.Property(e => e.muni_Descripcion).HasMaxLength(200);

                entity.Property(e => e.muni_Id)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<VW_tbEncargados>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbEncargados", "Acti");

                entity.Property(e => e.enca_Apellidos)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.enca_DNI)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_Email).HasMaxLength(300);

                entity.Property(e => e.enca_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.enca_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.enca_FechaNac).HasColumnType("date");

                entity.Property(e => e.enca_Nombres)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.enca_Sexo)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_Telefono)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.enca_UsuarioModificador_Nombre).HasMaxLength(100);

                entity.Property(e => e.esci_Descripcion)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VW_tbEquipos>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbEquipos", "Acti");

                entity.Property(e => e.equi_Descripcion).HasMaxLength(250);

                entity.Property(e => e.equi_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.equi_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.equi_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.equi_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbEstadosCiviles>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbEstadosCiviles", "Gral");

                entity.Property(e => e.esci_Descripcion)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.esci_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.esci_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.esci_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.esci_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbMunicipios>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbMunicipios", "Gral");

                entity.Property(e => e.dept_Descripcion).HasMaxLength(200);

                entity.Property(e => e.dept_Id)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.muni_Descripcion).HasMaxLength(200);

                entity.Property(e => e.muni_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.muni_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.muni_Id)
                    .IsRequired()
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<VW_tbPlayas>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbPlayas", "Acti");

                entity.Property(e => e.play_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.play_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.play_Playa).HasMaxLength(250);

                entity.Property(e => e.play_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.play_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<VW_tbReservaciones>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VW_tbReservaciones", "Acti");

                entity.Property(e => e.acti_Nombre).HasMaxLength(250);

                entity.Property(e => e.rese_FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.rese_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.rese_UsuarioCreador_Nombre).HasMaxLength(100);

                entity.Property(e => e.rese_UsuarioModificador_Nombre).HasMaxLength(100);
            });

            modelBuilder.Entity<tbActividades>(entity =>
            {
                entity.HasKey(e => e.acti_Id)
                    .HasName("PK_Acti_tbActividades_acti_Id");

                entity.ToTable("tbActividades", "Acti");

                entity.Property(e => e.acti_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.acti_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.acti_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.acti_Nombre).HasMaxLength(250);

                entity.Property(e => e.acti_Precio).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.acti_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.play)
                    .WithMany(p => p.tbActividades)
                    .HasForeignKey(d => d.play_Id)
                    .HasConstraintName("FK_Actil_tbActividades_play_id_Acti_tbPlayas_play_Id");
            });

            modelBuilder.Entity<tbClienteXReservacion>(entity =>
            {
                entity.HasKey(e => e.clre_Id)
                    .HasName("PK_Acti_tbClienteXReservacion_clre_Id");

                entity.ToTable("tbClienteXReservacion", "Acti");

                entity.Property(e => e.clre_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.clre_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.clre_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.clre_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.rese)
                    .WithMany(p => p.tbClienteXReservacion)
                    .HasForeignKey(d => d.rese_Id)
                    .HasConstraintName("FK_Acti_ClienteXReservacion_rese_id_Acti_tbreservacion_rese_Id");
            });

            modelBuilder.Entity<tbClientes>(entity =>
            {
                entity.HasKey(e => e.clie_id)
                    .HasName("PK_Acti_tbClientes_clie_Id");

                entity.ToTable("tbClientes", "Acti");

                entity.Property(e => e.clie_Apellidos)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.clie_DNI)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.clie_Email).HasMaxLength(300);

                entity.Property(e => e.clie_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.clie_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.clie_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.clie_FechaNac).HasColumnType("date");

                entity.Property(e => e.clie_Nombres)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.clie_Sexo)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.clie_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbDepartamentos>(entity =>
            {
                entity.HasKey(e => e.dept_id)
                    .HasName("PK_gral_tbDepartamentos_dept_Id");

                entity.ToTable("tbDepartamentos", "Gral");

                entity.Property(e => e.dept_id)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.dept_Descripcion).HasMaxLength(200);

                entity.Property(e => e.dept_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.dept_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.dept_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.dept_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbDirecciones>(entity =>
            {
                entity.HasKey(e => e.dire_Id)
                    .HasName("PK_gral_tbDirecciones_dire_Id");

                entity.ToTable("tbDirecciones", "Gral");

                entity.Property(e => e.dire_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.dire_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.dire_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.dire_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.Property(e => e.muni_Id)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.HasOne(d => d.muni)
                    .WithMany(p => p.tbDirecciones)
                    .HasForeignKey(d => d.muni_Id)
                    .HasConstraintName("FK_gral_tbDirecciones_muni_id_gral_tbmunicipios_muni_Id");
            });

            modelBuilder.Entity<tbEncargados>(entity =>
            {
                entity.HasKey(e => e.enca_id)
                    .HasName("PK_gral_tbEncargados_empl_Id");

                entity.ToTable("tbEncargados", "Acti");

                entity.Property(e => e.enca_Apellidos)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.enca_DNI)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_Email).HasMaxLength(300);

                entity.Property(e => e.enca_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.enca_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.enca_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.enca_FechaNac).HasColumnType("date");

                entity.Property(e => e.enca_Nombres)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.enca_Sexo)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_Telefono)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.enca_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.esci)
                    .WithMany(p => p.tbEncargados)
                    .HasForeignKey(d => d.esci_id)
                    .HasConstraintName("FK_gral_tbEncargados_estciv_id_gral_tbEstadosCiviles_estciv_Id");
            });

            modelBuilder.Entity<tbEncargadosXActividades>(entity =>
            {
                entity.HasKey(e => e.enac_Id)
                    .HasName("PK_Acti_EncargadosXActividades_enac_Id");

                entity.ToTable("tbEncargadosXActividades", "Acti");

                entity.Property(e => e.enac_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.enac_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.enac_FechaModificacion).HasColumnType("datetime");

                entity.HasOne(d => d.acti)
                    .WithMany(p => p.tbEncargadosXActividades)
                    .HasForeignKey(d => d.acti_Id)
                    .HasConstraintName("FK_Acti_tbActividades_acti_Id");

                entity.HasOne(d => d.enca)
                    .WithMany(p => p.tbEncargadosXActividades)
                    .HasForeignKey(d => d.enca_Id)
                    .HasConstraintName("FK_Acti_EncargadosXActividades_enca_Id");
            });

            modelBuilder.Entity<tbEquipoXActividades>(entity =>
            {
                entity.HasKey(e => e.eqac_Id)
                    .HasName("PK_Acti_EquipoXActividades_aceq_Id");

                entity.ToTable("tbEquipoXActividades", "Acti");

                entity.Property(e => e.eqac_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.eqac_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.eqac_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.acti)
                    .WithMany(p => p.tbEquipoXActividades)
                    .HasForeignKey(d => d.acti_Id)
                    .HasConstraintName("FK_Acti_EquipoXActividades_acti_Id_Acti_tbActividades_acti_Id");
            });

            modelBuilder.Entity<tbEquipos>(entity =>
            {
                entity.HasKey(e => e.equi_Id)
                    .HasName("PK_Acti_tbEquipos_equi_Id");

                entity.ToTable("tbEquipos", "Acti");

                entity.Property(e => e.equi_Descripcion).HasMaxLength(250);

                entity.Property(e => e.equi_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.equi_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.equi_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.equi_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbEstadosCiviles>(entity =>
            {
                entity.HasKey(e => e.esci_id)
                    .HasName("PK_gral_tbEstadosCiviles_estciv_Id");

                entity.ToTable("tbEstadosCiviles", "Gral");

                entity.Property(e => e.esci_Descripcion)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.esci_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.esci_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.esci_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.esci_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbFactura>(entity =>
            {
                entity.HasKey(e => e.fuct_Id)
                    .HasName("PK_Acti_tbFactura_fuct_Id");

                entity.ToTable("tbFactura", "Acti");

                entity.Property(e => e.fuct_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.fuct_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.fuct_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.fuct_Isv).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.fuct_Subtotal).HasColumnType("decimal(8, 2)");

                entity.Property(e => e.fuct_Total).HasColumnType("decimal(8, 2)");

                entity.HasOne(d => d.rese)
                    .WithMany(p => p.tbFactura)
                    .HasForeignKey(d => d.rese_Id)
                    .HasConstraintName("FK_Acti_tbFactura_rese_Id");
            });

            modelBuilder.Entity<tbMantenimiento>(entity =>
            {
                entity.HasKey(e => e.mant_Id)
                    .HasName("PK_Acti_tbMantenimiento_mant_Id");

                entity.ToTable("tbMantenimiento", "Acti");

                entity.Property(e => e.mant_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.mant_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.mant_FechaModificacion).HasColumnType("datetime");
            });

            modelBuilder.Entity<tbMantenimientoXEquipo>(entity =>
            {
                entity.HasKey(e => e.maeq_Id)
                    .HasName("PK_Acti_tbMantenimientoXEquipo_maeq_Id");

                entity.ToTable("tbMantenimientoXEquipo", "Acti");

                entity.Property(e => e.maeq_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.maeq_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.maeq_FechaModificacion).HasColumnType("datetime");

                entity.HasOne(d => d.equi)
                    .WithMany(p => p.tbMantenimientoXEquipo)
                    .HasForeignKey(d => d.equi_Id)
                    .HasConstraintName("FK_Acti_tbMantenimientoXEquipo_equi_Id");

                entity.HasOne(d => d.mant)
                    .WithMany(p => p.tbMantenimientoXEquipo)
                    .HasForeignKey(d => d.mant_Id)
                    .HasConstraintName("FK_Acti_tbMantenimientoXEquipo_mant_Id");
            });

            modelBuilder.Entity<tbMetodosPago>(entity =>
            {
                entity.HasKey(e => e.mepa_id)
                    .HasName("PK_gral_tbMetodosPago_pago_Id");

                entity.ToTable("tbMetodosPago", "Gral");

                entity.Property(e => e.mepa_Descripcion).HasMaxLength(200);

                entity.Property(e => e.mepa_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.mepa_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.mepa_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.mepa_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbMunicipios>(entity =>
            {
                entity.HasKey(e => e.muni_id)
                    .HasName("PK_gral_tbMunicipios_muni_Id");

                entity.ToTable("tbMunicipios", "Gral");

                entity.Property(e => e.muni_id)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.dept_id)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.muni_Descripcion).HasMaxLength(200);

                entity.Property(e => e.muni_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.muni_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.muni_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.muni_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.dept)
                    .WithMany(p => p.tbMunicipios)
                    .HasForeignKey(d => d.dept_id)
                    .HasConstraintName("FK_gral_tbMunicipios_tbDepartamentos_dept_Id");
            });

            modelBuilder.Entity<tbPantallas>(entity =>
            {
                entity.HasKey(e => e.pant_ID)
                    .HasName("PK_Acce_tbPantallas_pant_ID");

                entity.ToTable("tbPantallas", "Acce");

                entity.Property(e => e.pant_Descripcion)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.pant_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.pant_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.pant_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.pant_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbPlayas>(entity =>
            {
                entity.HasKey(e => e.play_Id)
                    .HasName("PK_gral_tbPlayas_play_Id");

                entity.ToTable("tbPlayas", "Acti");

                entity.Property(e => e.play_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.play_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.play_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.play_Playa).HasMaxLength(250);

                entity.Property(e => e.play_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.dire)
                    .WithMany(p => p.tbPlayas)
                    .HasForeignKey(d => d.dire_Id)
                    .HasConstraintName("FK_gral_tbPlayas_play_id_gral_tbDirecciones_dire_Id");
            });

            modelBuilder.Entity<tbReservaciones>(entity =>
            {
                entity.HasKey(e => e.rese_Id)
                    .HasName("PK_Acti_tbReservaciones_rese_Id");

                entity.ToTable("tbReservaciones", "Acti");

                entity.Property(e => e.rese_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.rese_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.rese_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.rese_FechaReservacion).HasColumnType("date");

                entity.Property(e => e.rese_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.acti)
                    .WithMany(p => p.tbReservaciones)
                    .HasForeignKey(d => d.acti_Id)
                    .HasConstraintName("FK_Acti_tbReservaciones_rese_id_Acti_tbActividades_acti_Id");
            });

            modelBuilder.Entity<tbRoles>(entity =>
            {
                entity.HasKey(e => e.role_ID)
                    .HasName("PK_Acce_tbRoles_role_ID");

                entity.ToTable("tbRoles", "Acce");

                entity.Property(e => e.role_Descripcion)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.role_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.role_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.role_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.role_UsuarioCreador).HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<tbRolesXPantallas>(entity =>
            {
                entity.HasKey(e => e.roleXpant_ID)
                    .HasName("PK_Acce_tbRolesXPantallas_roleXpant_ID");

                entity.ToTable("tbRolesXPantallas", "Acce");

                entity.Property(e => e.roleXpant_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.roleXpant_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.roleXpant_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.roleXpant_UsuarioCreador).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.pant)
                    .WithMany(p => p.tbRolesXPantallas)
                    .HasForeignKey(d => d.pant_ID)
                    .HasConstraintName("FK_Acce_tbRolesXPantallas_tbPantallas_pant_ID");

                entity.HasOne(d => d.role)
                    .WithMany(p => p.tbRolesXPantallas)
                    .HasForeignKey(d => d.role_ID)
                    .HasConstraintName("FK_Acce_tbRolesXPantallas_tbRoles_role_ID");
            });

            modelBuilder.Entity<tbUsuarios>(entity =>
            {
                entity.HasKey(e => e.usua_ID)
                    .HasName("PK_Acce_tbUsuarios_usua_ID");

                entity.ToTable("tbUsuarios", "Acce");

                entity.HasIndex(e => e.usua_Usuario, "UQ_Acce_tbUsuarios_usua_Usuario")
                    .IsUnique();

                entity.Property(e => e.usua_Clave).IsUnicode(false);

                entity.Property(e => e.usua_Estado).HasDefaultValueSql("((1))");

                entity.Property(e => e.usua_FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.usua_FechaModificacion).HasColumnType("datetime");

                entity.Property(e => e.usua_Usuario).HasMaxLength(100);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}