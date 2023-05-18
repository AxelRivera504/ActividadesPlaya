--drop database DB_ArenaMagica
--DROP SCHEMA Gral
--DROP SCHEMA Acce
--DROP SCHEMA Acti
CREATE DATABASE DB_ArenaMagica
go
use DB_ArenaMagica
go 

CREATE SCHEMA Gral

go
CREATE SCHEMA Acce

go
CREATE SCHEMA Acti

CREATE TABLE Gral.tbEstadosCiviles(
	esci_id					INT IDENTITY(1,1),
	esci_Descripcion	    VARCHAR(200),
	esci_Estado				BIT DEFAULT (1),
	esci_UsuarioCreador		INT DEFAULT 1,
	esci_FechaCreacion		DATETIME DEFAULT GETDATE(),
	esci_UsuarioModificador	INT,
	esci_FechaModificacion	DATETIME
	CONSTRAINT PK_gral_tbEstadosCiviles_estciv_Id PRIMARY KEY (esci_id)
)
GO


--CREACION DE TABLA tbDepartamentos
CREATE TABLE Gral.tbDepartamentos(
	dept_id						CHAR(2),
	dept_Descripcion			NVARCHAR(200),
	dept_Estado					BIT DEFAULT (1),
	dept_UsuarioCreador			INT DEFAULT 1,
	dept_FechaCreacion			DATETIME DEFAULT GETDATE(),
	dept_UsuarioModificador		INT,
	dept_FechaModificacion		DATETIME,	
	CONSTRAINT PK_gral_tbDepartamentos_dept_Id PRIMARY KEY (dept_id)
)
GO


--CREACION DE TABLA tbMunicipios
CREATE TABLE Gral.tbMunicipios(
	muni_id						CHAR(4),
	muni_Descripcion			NVARCHAR(200),
	dept_id						CHAR(2),
	muni_Estado					BIT DEFAULT 1,
	muni_UsuarioCreador			INT DEFAULT 1,
	muni_FechaCreacion			DATETIME DEFAULT GETDATE(),
	muni_UsuarioModificador		INT,
	muni_FechaModificacion		DATETIME,
	CONSTRAINT PK_gral_tbMunicipios_muni_Id PRIMARY KEY (muni_id),
	CONSTRAINT FK_gral_tbMunicipios_tbDepartamentos_dept_Id FOREIGN KEY(dept_id) 
	REFERENCES gral.tbDepartamentos (dept_id),
)
GO

--CREACION DE TABLA tbMetodosPago
CREATE TABLE Gral.tbMetodosPago(
	mepa_id						INT IDENTITY(1,1),
	mepa_Descripcion			NVARCHAR (200),
	mepa_Estado					BIT DEFAULT 1,
	mepa_UsuarioCreador			INT DEFAULT 1,
	mepa_FechaCreacion			DATETIME DEFAULT GETDATE(),
	mepa_UsuarioModificador		INT,
	mepa_FechaModificacion		DATETIME,

	CONSTRAINT PK_gral_tbMetodosPago_pago_Id PRIMARY KEY (mepa_id),
)
GO

CREATE TABLE Gral.tbDirecciones(
    dire_Id                     INT IDENTITY(1,1), 
    dire_DireccionExacta        NVARCHAR(MAX),
	muni_Id                     CHAR(4),

	dire_Estado					BIT DEFAULT 1,
    dire_UsuarioCreador			INT DEFAULT 1,
    dire_FechaCreacion			DATETIME DEFAULT GETDATE(),
    dire_UsuarioModificador		INT,
    dire_FechaModificacion		DATETIME


	CONSTRAINT PK_gral_tbDirecciones_dire_Id PRIMARY KEY (dire_id),
	CONSTRAINT FK_gral_tbDirecciones_muni_id_gral_tbmunicipios_muni_Id FOREIGN KEY(muni_id)
	REFERENCES Gral.tbMunicipios(muni_id)
)
GO

CREATE TABLE Acti.tbPlayas
(
  play_Id     INT IDENTITY(1,1), 
  play_Playa  NVARCHAR(250),
  dire_Id     INT,
  play_ImgUrl NVARCHAR(MAX),

  play_Estado					BIT DEFAULT 1,
  play_UsuarioCreador			INT DEFAULT 1,
  play_FechaCreacion			DATETIME DEFAULT GETDATE(),
  play_UsuarioModificador		INT,
  play_FechaModificacion		DATETIME

  CONSTRAINT PK_gral_tbPlayas_play_Id PRIMARY KEY (play_id),
  CONSTRAINT FK_gral_tbPlayas_play_id_gral_tbDirecciones_dire_Id FOREIGN KEY(dire_id)
  REFERENCES Gral.tbDirecciones(dire_id)
)
GO

CREATE TABLE Acti.tbEncargados
(
    enca_id						INT IDENTITY(1,1),
	enca_Nombres				VARCHAR(300),
	enca_Apellidos				VARCHAR(300),
	enca_DNI					CHAR(13),
	enca_Email					NVARCHAR(300),
	enca_Telefono				CHAR(8),
	enca_Sexo					CHAR(1),
	esci_id			     		INT,
	enca_FechaNac               DATE,
	enca_Estado					BIT DEFAULT 1,
	enca_UsuarioCreador			INT DEFAULT 1,
	enca_FechaCreacion			DATETIME DEFAULT GETDATE(),
	enca_UsuarioModificador		INT,
	enca_FechaModificacion		DATETIME,

	CONSTRAINT PK_gral_tbEncargados_empl_Id PRIMARY KEY (enca_id),
	CONSTRAINT FK_gral_tbEncargados_estciv_id_gral_tbEstadosCiviles_estciv_Id FOREIGN KEY(esci_id)
    REFERENCES Gral.tbEstadosCiviles(esci_id)
)
GO

CREATE TABLE Acti.tbClientes
(
    clie_id						INT IDENTITY(1,1),
	clie_Nombres				VARCHAR(300),
	clie_Apellidos				VARCHAR(300),
	clie_DNI					CHAR(13),
	clie_Email					NVARCHAR(300),
	clie_Sexo					CHAR(1),
    clie_FechaNac               DATE,    
	clie_Estado					BIT DEFAULT 1,
	clie_UsuarioCreador			INT DEFAULT 1,
	clie_FechaCreacion			DATETIME DEFAULT GETDATE(),
	clie_UsuarioModificador		INT,
	clie_FechaModificacion		DATETIME,

	CONSTRAINT PK_Acti_tbClientes_clie_Id PRIMARY KEY (clie_id),
)
GO


CREATE TABLE Acti.tbActividades 
(
   acti_Id						INT IDENTITY(1,1),
   acti_Nombre					NVARCHAR(250),
   acti_Cupo					INT,
   acti_Precio					DECIMAL(8,2),
   play_Id						INT,
   
   acti_Estado					BIT DEFAULT 1,
   acti_UsuarioCreador			INT DEFAULT 1,
   acti_FechaCreacion			DATETIME DEFAULT GETDATE(),
   acti_UsuarioModificador		INT,
   acti_FechaModificacion		DATETIME,

   CONSTRAINT PK_Acti_tbActividades_acti_Id PRIMARY KEY (acti_id),
   CONSTRAINT FK_Actil_tbActividades_play_id_Acti_tbPlayas_play_Id FOREIGN KEY(play_id)
    REFERENCES Acti.tbPlayas(play_id)
)
GO


CREATE TABLE Acti.tbReservaciones
(
  rese_Id                   INT IDENTITY(1,1), 
  rese_Cantidad             INT,
  acti_Id                   INT,
  rese_FechaReservacion  	Date,

  rese_Estado				    BIT DEFAULT 1,
  rese_UsuarioCreador			INT DEFAULT 1,
  rese_FechaCreacion			DATETIME DEFAULT GETDATE(),
  rese_UsuarioModificador		INT,
  rese_FechaModificacion		DATETIME,

  CONSTRAINT PK_Acti_tbReservaciones_rese_Id PRIMARY KEY (rese_Id),
  CONSTRAINT FK_Acti_tbReservaciones_rese_id_Acti_tbActividades_acti_Id FOREIGN KEY(acti_id)
  REFERENCES Acti.tbActividades(acti_id)
)
GO


CREATE TABLE Acti.tbClienteXReservacion
(
   clre_Id                      INT IDENTITY(1,1), 
   clie_Id                      INT, 
   rese_Id                      INT,

   clre_Estado					BIT DEFAULT 1,
   clre_UsuarioCreador			INT DEFAULT 1,
   clre_FechaCreacion			DATETIME DEFAULT GETDATE(),
   clre_UsuarioModificador		INT,
   clre_FechaModificacion		DATETIME,

   CONSTRAINT PK_Acti_tbClienteXReservacion_clre_Id PRIMARY KEY (clre_Id),
   CONSTRAINT FK_Acti_ClienteXReservacion_rese_id_Acti_tbreservacion_rese_Id FOREIGN KEY(rese_Id)
   REFERENCES Acti.tbReservaciones(rese_Id)

)
GO


CREATE TABLE Acti.tbEquipos 
(
  equi_Id                       INT IDENTITY(1,1),
  equi_Descripcion              NVARCHAR(250),
  equi_UsoActual				INT,
  equi_UsoLimite                INT,
  equi_Estado                   BIT DEFAULT 1,

   
  equi_UsuarioCreador			INT DEFAULT 1,
  equi_FechaCreacion			DATETIME DEFAULT GETDATE(),
  equi_UsuarioModificador		INT,
  equi_FechaModificacion		DATETIME,

   CONSTRAINT PK_Acti_tbEquipos_equi_Id PRIMARY KEY (equi_Id),

)
GO

CREATE TABLE Acti.tbEquipoXActividades 
(
  eqac_Id       INT IDENTITY(1,1),
  acti_Id       INT,
  equi_Id       INT,

  eqac_UsuarioCreador			INT DEFAULT 1,
  eqac_FechaCreacion			DATETIME DEFAULT GETDATE(),
  eqac_UsuarioModificador		INT,
  eqac_FechaModificacion		DATETIME

   
   CONSTRAINT PK_Acti_EquipoXActividades_aceq_Id PRIMARY KEY (eqac_Id),
   CONSTRAINT FK_Acti_EquipoXActividades_acti_Id_Acti_tbActividades_acti_Id FOREIGN KEY(acti_Id)
   REFERENCES Acti.tbActividades(acti_Id)

)
GO

CREATE TABLE Acti.tbEncargadosXActividades
(
  enac_Id    INT IDENTITY(1,1),
  enca_Id    INT,
  acti_Id    INT,

  enac_Estado					BIT DEFAULT 1,
  enac_UsuarioCreador			INT,
  enac_FechaCreacion			DATETIME DEFAULT GETDATE(),
  enac_UsuarioModificador		INT,
  enac_FechaModificacion		DATETIME,

  CONSTRAINT PK_Acti_EncargadosXActividades_enac_Id PRIMARY KEY (enac_Id), 
  CONSTRAINT FK_Acti_EncargadosXActividades_enca_Id FOREIGN KEY (enca_Id) REFERENCES Acti.tbEncargados (enca_Id),
  CONSTRAINT FK_Acti_tbActividades_acti_Id FOREIGN KEY (acti_Id) REFERENCES Acti.tbActividades (acti_Id),
)
GO


CREATE TABLE Acti.tbMantenimiento
(
  mant_Id                       INT IDENTITY(1,1),
  mant_Descricion               NVARCHAR(MAX),

  mant_Estado					BIT DEFAULT 1,
  mant_UsuarioCreador			INT,
  mant_FechaCreacion			DATETIME DEFAULT GETDATE(),
  mant_UsuarioModificador		INT,
  mant_FechaModificacion		DATETIME

   CONSTRAINT PK_Acti_tbMantenimiento_mant_Id PRIMARY KEY (mant_Id), 
)

GO


CREATE TABLE Acti.tbMantenimientoXEquipo
(
  maeq_Id      INT IDENTITY(1,1),
  equi_Id      INT, 
  mant_Id      INT,

  maeq_Estado					BIT DEFAULT 1,
  maeq_UsuarioCreador			INT,
  maeq_FechaCreacion			DATETIME DEFAULT GETDATE(),
  maeq_UsuarioModificador		INT,
  maeq_FechaModificacion		DATETIME

  
  
  CONSTRAINT PK_Acti_tbMantenimientoXEquipo_maeq_Id PRIMARY KEY (maeq_Id), 
  CONSTRAINT FK_Acti_tbMantenimientoXEquipo_equi_Id  FOREIGN KEY (equi_Id ) REFERENCES Acti.tbEquipos (equi_Id),
  CONSTRAINT FK_Acti_tbMantenimientoXEquipo_mant_Id  FOREIGN KEY (mant_Id ) REFERENCES Acti.tbMantenimiento (mant_Id),
)
GO

CREATE TABLE Acti.tbFactura 
(
  fuct_Id    INT IDENTITY(1,1),
  rese_Id    INT,
  fuct_Subtotal  Decimal(8,2),
  fuct_Isv   Decimal (8,2),
  fuct_Total  Decimal(8,2),

  fuct_Estado					BIT DEFAULT 1,
  fuct_UsuarioCreador			INT,
  fuct_FechaCreacion			DATETIME DEFAULT GETDATE(),
  fuct_UsuarioModificador		INT,
  fuct_FechaModificacion		DATETIME
   
  CONSTRAINT PK_Acti_tbFactura_fuct_Id PRIMARY KEY (fuct_Id), 
  CONSTRAINT FK_Acti_tbFactura_rese_Id FOREIGN KEY (rese_Id ) REFERENCES Acti.tbReservaciones (rese_Id),

)
GO

CREATE TABLE Acti.ActividadesXFecha
(
  acfe_Id              INT IDENTITY(1,1),
  acti_Id              INT,
  acfe_Fecha           DATE,
  acfe_Cantidad        INT, 

  acfe_Estado					BIT DEFAULT 1,
  acfe_UsuarioCreador			INT,
  acfe_FechaCreacion			DATETIME DEFAULT GETDATE(),
  acfe_UsuarioModificador		INT,
  acfe_FechaModificacion		DATETIME


  CONSTRAINT FK_Acti_tbActi_acti_Id FOREIGN KEY (acti_Id) REFERENCES Acti.tbActividades(acti_Id),
)
GO


CREATE TABLE Acce.tbRoles(
	role_ID						INT IDENTITY(1,1),
	role_Descripcion			VARCHAR(250),
	
	role_Estado					BIT DEFAULT 1,
	role_UsuarioCreador			INT DEFAULT 1,
	role_FechaCreacion			DATETIME DEFAULT GETDATE(),
	role_UsuarioModificador		INT,
	role_FechaModificacion		DATETIME,
	CONSTRAINT PK_Acce_tbRoles_role_ID PRIMARY KEY (role_ID),
)
GO


CREATE TABLE Acce.tbPantallas(
	pant_ID						INT IDENTITY(1,1),
	pant_Descripcion			VARCHAR (250),
	
	pant_Estado					BIT DEFAULT 1,
	pant_UsuarioCreador			INT DEFAULT	1,
	pant_FechaCreacion			DATETIME DEFAULT GETDATE(),
	pant_UsuarioModificador		INT,
	pant_FechaModificacion		DATETIME,
	CONSTRAINT PK_Acce_tbPantallas_pant_ID	PRIMARY KEY (pant_ID),
)
GO


CREATE TABLE Acce.tbRolesXPantallas(
	roleXpant_ID					INT IDENTITY(1,1),
	role_ID							INT,
	pant_ID							INT,
	
	roleXpant_Estado				BIT DEFAULT 1,
	roleXpant_UsuarioCreador		INT DEFAULT 1,
	roleXpant_FechaCreacion			DATETIME DEFAULT GETDATE(),
	roleXpant_UsuarioModificador	INT,
	roleXpant_FechaModificacion		DATETIME,

	CONSTRAINT PK_Acce_tbRolesXPantallas_roleXpant_ID PRIMARY KEY (roleXpant_ID),
	CONSTRAINT FK_Acce_tbRolesXPantallas_tbRoles_role_ID FOREIGN KEY (role_ID) REFERENCES Acce.tbRoles (role_ID),
	CONSTRAINT FK_Acce_tbRolesXPantallas_tbPantallas_pant_ID FOREIGN KEY (pant_ID) REFERENCES Acce.tbPantallas (pant_ID),
)
GO


CREATE TABLE Acce.tbUsuarios( 
	usua_ID						INT IDENTITY(1,1), 
	usua_Usuario				NVARCHAR(100), 
	usua_Clave					VARCHAR(MAX),
	usua_EsAdmin				INT,
	enca_ID						INT,
	role_ID                     INT,
	
	usua_Estado					BIT DEFAULT 1,
	usua_UsuarioCreador			INT,
	usua_FechaCreacion			DATETIME DEFAULT GETDATE(),
	usua_UsuarioModificador		INT,
	usua_FechaModificacion		DATETIME,

	CONSTRAINT PK_Acce_tbUsuarios_usua_ID PRIMARY KEY (usua_ID), 
	CONSTRAINT UQ_Acce_tbUsuarios_usua_Usuario UNIQUE (usua_Usuario),
)
GO