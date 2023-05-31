USE DB_ArenaMagica
GO

--******************************************* Procedimientos Almacenados y vistas ***********************************************************--


--***************************************************** UDP Y VISTA DEPARTAMENTOS ***********************************************************--

/*Vista Departamentos*/
CREATE OR ALTER VIEW Gral.VW_tbDepartamentos
AS
SELECT	dept_Id, 
        dept_Descripcion,
		dept_UsuarioCreador,[UsuarioCreador].usua_Usuario AS dept_UsuarioCreador_Nombre,
		dept_FechaCreacion,
		dept_UsuarioModificador,[UsuarioCreador].usua_Usuario AS dept_UsuarioModificador_Nombre,
		dept_FechaModificacion
FROM Gral.tbDepartamentos dept INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON dept.dept_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON dept.dept_UsuarioModificador = [UsuarioModificador].usua_UsuarioModificador
GO

/*Vista Departamentos UDP*/
CREATE OR ALTER PROCEDURE Gral.UDP_tbDepartamentos_VW
AS
BEGIN
	SELECT * FROM Gral.VW_tbDepartamentos
END

--Insertar Departamentos
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDepartamentos_InsertarDepartamentos
	@dept_Id				CHAR(2),
	@dept_Descripcion		NVARCHAR(150),
	@dept_UsuarioCreador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT dept_Id,dept_Descripcion FROM Gral.tbDepartamentos WHERE dept_id = @dept_Id OR dept_Descripcion = @dept_Descripcion)
			BEGIN
				INSERT INTO Gral.tbDepartamentos([dept_Id],[dept_Descripcion], [dept_Estado], [dept_UsuarioCreador], [dept_FechaCreacion], [dept_UsuarioModificador], [dept_FechaModificacion])
				VALUES(@dept_Id,@dept_Descripcion,1,@dept_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		IF EXISTS(SELECT dept_Id,dept_Descripcion FROM Gral.tbDepartamentos WHERE dept_id = @dept_Id AND  dept_Descripcion = @dept_Descripcion AND dept_Estado = 0)
			BEGIN
				UPDATE Gral.tbDepartamentos
				SET dept_Estado = 1
				WHERE dept_id = @dept_Id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
    BEGIN CATCH
      SELECT 0
    END CATCH
END

--Editar Departamentos
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDepartamentos_EditarDepartamentos
@dept_Id					CHAR(2),
@dept_Descripcion			NVARCHAR(100),
@dept_UsuarioModificador	INT
AS
BEGIN
BEGIN TRY
		IF NOT EXISTS (SELECT dept_Descripcion FROM Gral.tbDepartamentos WHERE dept_Descripcion = @dept_Descripcion AND dept_Id != @dept_Id)
			BEGIN
						UPDATE	Gral.tbDepartamentos							
				SET		dept_Descripcion			=@dept_Descripcion,
						dept_UsuarioModificador		=@dept_UsuarioModificador		
				WHERE	dept_Id = @dept_Id
				SELECT 1
			END
		ELSE
			BEGIN
		SELECT 2
			END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END

--***************************************************** /UDP Y VISTA DEPARTAMENTOS ***********************************************************--

--***************************************************** UDP Y VISTA MUNICIPIOS ***************************************************************--

/*Vista Municipios*/
GO
CREATE OR ALTER VIEW Gral.VW_tbMunicipios
AS
SELECT	muni_Id, 
		muni_Descripcion,
		t2.dept_Id,
		T2.dept_Descripcion,
		muni_UsuarioCreador,[UsuarioCreador].usua_Usuario AS muni_UsuarioCreador_Nombre,
		muni_FechaCreacion,
		muni_UsuarioModificador,[UsuarioModificador].usua_Usuario AS muni_UsuarioModificador_Nombre,
		muni_FechaModificacion
FROM Gral.tbMunicipios T1 INNER JOIN Gral.tbDepartamentos T2
ON T1.dept_Id = T2.dept_Id
INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON T1.muni_UsuarioCreador = [UsuarioCreador].usua_ID
LEFT JOIN Acce.tbUsuarios [UsuarioModificador] 
ON T1.muni_UsuarioModificador = [UsuarioModificador].usua_ID


/*Vista Municipios UDP*/
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbMunicipios_VW
AS
BEGIN
	SELECT * FROM Gral.VW_tbMunicipios
END

--Insertar Municipios
GO
CREATE OR ALTER PROCEDURE Gral_tbMunicipios_InsertarMunicipios
@muni_id				CHAR(4),
@dept_Id				CHAR(2),
@muni_Descripcion		NVARCHAR(150),
@muni_UsuarioCreador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT muni_id,muni_Descripcion FROM Gral.tbMunicipios WHERE dept_id != @dept_Id AND muni_id = @muni_id OR muni_Descripcion = @muni_Descripcion)
			BEGIN
				INSERT INTO Gral.tbMunicipios([muni_id], [muni_Descripcion], [dept_id], [muni_Estado], [muni_UsuarioCreador], [muni_FechaCreacion], [muni_UsuarioModificador], [muni_FechaModificacion])
				VALUES(@muni_id,@muni_Descripcion,@dept_Id,1,@muni_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		ELSE IF EXISTS (SELECT muni_id,muni_Descripcion FROM Gral.tbMunicipios WHERE dept_id != @dept_Id AND muni_id = @muni_id OR muni_Descripcion = @muni_Descripcion AND muni_Estado = 0)
			BEGIN
				UPDATE Gral.tbMunicipios
				SET muni_Estado = 1
				WHERE muni_id = @muni_id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO

--Editar Municipios
CREATE OR ALTER PROCEDURE Gral.UDP_tbMunicipios_EditarMunicipios
@muni_Id					CHAR(4),
@dept_Id					CHAR(2),
@muni_Descripcion			NVARCHAR(150),
@muni_UsuarioModificador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS (SELECT * FROM Gral.tbMunicipios WHERE dept_id != @dept_Id AND muni_id != @muni_Id AND muni_Descripcion = @muni_Descripcion)
			BEGIN
				UPDATE Gral.tbMunicipios
				SET dept_id = @dept_Id,
					muni_Descripcion = @muni_Descripcion,
					muni_UsuarioModificador = @muni_UsuarioModificador,
					muni_FechaModificacion = GETDATE()
					WHERE muni_id = @muni_Id
					SELECT 1	
			END	
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END

--**************************************************** /UDP Y VISTA MUNICIPIOS ***************************************************************--
GO
--**************************************************** UDP Y VISTA ESTADOS CIVILES ***************************************************************--

/*Vista Estados Civiles*/
CREATE OR ALTER VIEW Gral.VW_tbEstadosCiviles
AS
SELECT	esci_id, esci_Descripcion, 
esci_Estado, esci_UsuarioCreador,[UsuarioCreador].usua_Usuario AS esci_UsuarioCreador_Nombre,
esci_FechaCreacion, esci_UsuarioModificador,[UsuarioModificador].usua_Usuario AS esci_UsuarioModificador_Nombre, 
esci_FechaModificacion
FROM Gral.tbEstadosCiviles esci INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON esci.esci_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON esci.esci_UsuarioModificador = [UsuarioModificador].usua_ID

/*Vista Estados Civiles UDP*/
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbEstadosCiviles_VW
AS
BEGIN
	SELECT * FROM Gral.VW_tbEstadosCiviles
END
GO



--Find Estados Civiles
CREATE OR ALTER PROCEDURE Gral.UDP_tbEstadosCiviles_Find
	@esci_id		INT
AS
BEGIN
	SELECT	esci_id
			esci_Descripcion
	FROM	Gral.tbEstadosCiviles
	WHERE	esci_id = @esci_id
END

--Insertar Estados Civiles
GO
CREATE OR ALTER  PROCEDURE Gral.UDP_tbEstadosCiviles_Insertar
@esci_Descripcion				NVARCHAR(150),	
@esci_UsuarioCreador			INT
AS
BEGIN 
	BEGIN TRY
		IF NOT EXISTS (SELECT @esci_Descripcion FROM Gral.tbEstadosCiviles WHERE esci_Descripcion =  @esci_Descripcion)
			BEGIN
				INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, 
				esci_UsuarioCreador, esci_FechaCreacion, 
				esci_UsuarioModificador, esci_FechaModificacion)
				VALUES(@esci_Descripcion,1,@esci_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		IF EXISTS (SELECT @esci_Descripcion FROM Gral.tbEstadosCiviles WHERE esci_Descripcion =  @esci_Descripcion AND esci_Estado = 0)
			BEGIN
				UPDATE Gral.tbEstadosCiviles
				SET esci_Estado = 1
				WHERE esci_Descripcion = @esci_Descripcion
				SELECT 1
			END
		ELSE
		BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END

--Editar Estados Civiles
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbEstadosCiviles_Update
@esci_Id						INT,
@esci_Descripcion				NVARCHAR(150),	
@esci_UsuarioModificador		INT
AS
BEGIN

BEGIN TRY
		IF NOT EXISTS (SELECT esci_Descripcion FROM Gral.tbEstadosCiviles WHERE esci_Descripcion = @esci_Descripcion AND esci_id != @esci_Id)
		BEGIN
			UPDATE Gral.tbEstadosCiviles
			SET esci_Descripcion = @esci_Descripcion,
				esci_FechaModificacion = GETDATE(),
				esci_UsuarioModificador = @esci_UsuarioModificador
			WHERE esci_id = @esci_Id
			SELECT 1
		END
	ELSE BEGIN
		SELECT 2
	END
END TRY

BEGIN CATCH
	SELECT 0
END CATCH
END

--**************************************************** /UDP Y VISTA ESTADOS CIVILES ***************************************************************--

 --****************************************************UDP Y VISTA METODOS DE PAGO  ***************************************************************--

/*Vista Metodos de Pago*/
GO
CREATE OR ALTER VIEW Gral.VW_tbMetodosPago
AS
SELECT mepa_id, mepa_Descripcion, 
mepa_Estado, mepa_UsuarioCreador,[UsuarioCreador].usua_Usuario AS mepa_UsuarioCreador_Nombre, 
mepa_FechaCreacion, mepa_UsuarioModificador,[UsuarioModificador].usua_Usuario AS mepa_UsuarioModificador_Nombre, 
mepa_FechaModificacion
FROM	Gral.tbMetodosPago mepa INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON mepa.mepa_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON mepa.mepa_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE   mepa_Estado  = 1

/*Vista Metodos de Pago UDP*/
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_VW
AS
BEGIN
	SELECT * FROM Gral.VW_tbMetodosPago
END

--Insertar Metodos de pago
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_InsertarMetodosPago
@mepa_Descripcion		NVARCHAR(150),
@mepa_UsuarioCreador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS (SELECT mepa_Descripcion FROM Gral.tbMetodosPago WHERE mepa_Descripcion = @mepa_Descripcion)
			BEGIN
				INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, 
				mepa_Estado, mepa_UsuarioCreador, 
				mepa_FechaCreacion, mepa_UsuarioModificador, 
				mepa_FechaModificacion)
				VALUES(@mepa_Descripcion,1,@mepa_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		ELSE IF EXISTS (SELECT mepa_Descripcion FROM Gral.tbMetodosPago WHERE mepa_Descripcion = @mepa_Descripcion AND mepa_Estado = 0)
			BEGIN
				UPDATE Gral.tbMetodosPago
				SET mepa_Estado = 1
				WHERE mepa_Descripcion = @mepa_Descripcion
				SELECT 1
			END
		BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

--Editar Metodos de pago
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_EditarMetodosPago
@mepa_id					INT,
@mepa_Descripcion			NVARCHAR(150),
@mepa_UsuarioModificador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Gral.tbMetodosPago WHERE mepa_Descripcion = @mepa_Descripcion AND mepa_id != @mepa_id)
			BEGIN
				UPDATE Gral.tbMetodosPago
				SET mepa_Descripcion = @mepa_Descripcion,
					mepa_FechaModificacion = GETDATE(),
					mepa_UsuarioModificador = @mepa_UsuarioModificador
					WHERE mepa_id = @mepa_id
					SELECT 1
			END	
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END 

GO

--Eliminar Metodos de Pago
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_EliminarMetodosPago
@mepa_id			INT
AS
BEGIN
BEGIN TRY			
	IF NOT EXISTS(SELECT mepa_Id FROM Acti.tbFactura WHERE mepa_Id = @mepa_id)
		BEGIN
		UPDATE	[Gral].[tbMetodosPago]						
		SET		mepa_Estado = 0
		WHERE	mepa_id = @mepa_id
		SELECT 1	
		END
	ELSE BEGIN
		SELECT 2
	END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END

--**************************************************** /UDP Y VISTA METODOS DE PAGO ***************************************************************--
 GO
 --****************************************************UDP Y VISTA PLAYA  *************************************************************************--

 /*Vista Playa*/
 CREATE OR ALTER VIEW Acti.VW_tbPlayas
AS
SELECT play_Id, play_Playa, 
play.dire_Id,dire.dire_DireccionExacta, play_ImgUrl, 
play_Estado, play_UsuarioCreador,[UsuarioCreador].usua_Usuario AS play_UsuarioCreador_Nombre,
play_FechaCreacion, 
play_UsuarioModificador,[UsuarioModificador].usua_Usuario AS play_UsuarioModificador_Nombre, 
play_FechaModificacion
FROM Acti.tbPlayas play INNER JOIN [Gral].[tbDirecciones] dire
ON play.dire_Id = dire.dire_Id INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON play.play_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON play.play_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE play_Estado = 1

/*Vista Playas UDP*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbPlayas_VW
AS
BEGIN
	SELECT * FROM Acti.VW_tbPlayas
END

--Insertar Playa
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbPlayas_InsertarPlayas
	@play_Playa				NVARCHAR(150),
	@dire_id				INT,
	@play_ImgUrl			NVARCHAR(MAX),
	@play_UsuarioCreador	INT
AS
BEGIN
BEGIN TRY
	IF NOT EXISTS (SELECT play_Playa FROM Acti.tbPlayas WHERE play_Playa = @play_Playa)
		BEGIN
			INSERT INTO Acti.tbPlayas(play_Playa, dire_Id, 
			play_ImgUrl, play_Estado, 
			play_UsuarioCreador, play_FechaCreacion, 
			play_UsuarioModificador, play_FechaModificacion)
			VALUES (@play_Playa,@dire_id,@play_ImgUrl,1,@play_UsuarioCreador,GETDATE(),NULL,NULL)
			SELECT 1
		END
	ELSE IF EXISTS(SELECT play_Playa FROM Acti.tbPlayas WHERE play_Playa = @play_Playa AND play_Estado = 1)
		BEGIN
			UPDATE Acti.tbPlayas
			SET play_Estado = 1
			WHERE play_Playa = @play_Playa
			SELECT 1
		END	
	ELSE
	BEGIN
		SELECT 2
	END
END TRY

BEGIN CATCH
	SELECT 0
END CATCH
END

--Editar Playa
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbPlayas_EditarPlayas
	@play_Id					INT,
	@play_Playa					NVARCHAR(150),
	@dire_id					INT,
	@play_ImgUrl				NVARCHAR(MAX),
	@play_UsuarioModificador	INT
AS
BEGIN 
	BEGIN TRY
		IF NOT EXISTS(SELECT play_Playa FROM Acti.tbPlayas WHERE play_Playa = @play_Playa AND play_Id != @play_Id)
			BEGIN 
				UPDATE Acti.tbPlayas
				SET play_Playa = @play_Playa,
					dire_Id = @dire_id,
					play_ImgUrl = @play_ImgUrl,
					play_UsuarioModificador = @play_UsuarioModificador,
					play_FechaModificacion = GETDATE()
				WHERE play_Id = @play_Id
				SELECT 1
			END
		ELSE 
		BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

--Eliminar Playas
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbPlayas_EliminarPlayas
@play_id			INT
AS
BEGIN
BEGIN TRY		
	
		UPDATE	Acti.tbPlayas					
		SET		play_Estado = 0
		WHERE	play_id = @play_id
		SELECT 1
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END

--**************************************************** /UDP Y VISTA PLAYA ******************************************************************************--
 GO
--****************************************************UDP Y DIRECCIONES  ********************************************************************************--


 --Vista Direcciones
CREATE OR ALTER VIEW Gral.VW_tbDirecciones
AS
SELECT	dire_Id, dire_DireccionExacta, 
dire.muni_Id,muni.muni_Descripcion, dire_Estado, 
dire_UsuarioCreador,[UsuarioCreador].usua_Usuario AS dire_UsuarioCreador_Nombre, dire_FechaCreacion, 
dire_UsuarioModificador,[UsuarioModificador].usua_Usuario AS dire_UsuarioModificador_Nombre, dire_FechaModificacion
FROM [Gral].[tbDirecciones] dire INNER JOIN Gral.tbMunicipios muni
ON dire.muni_Id = muni.muni_id INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON dire.dire_UsuarioCreador  = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON dire.dire_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE dire_Estado = 1

/*Vista Direcciones UDP*/
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_VW
AS
BEGIN
	SELECT * FROM Gral.VW_tbDirecciones
END

--Insertar Direcciones
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_InsertarDirecciones
@dire_DireccionExacta		NVARCHAR(150),
@muni_Id					CHAR(4),
@dire_UsuarioCreador		INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS (SELECT * FROM Gral.tbDirecciones WHERE dire_DireccionExacta = @dire_DireccionExacta)
			BEGIN
				INSERT INTO Gral.tbDirecciones(dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
				VALUES(@dire_DireccionExacta,@muni_Id,1,@dire_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		IF EXISTS (SELECT * FROM Gral.tbDirecciones WHERE dire_DireccionExacta = @dire_DireccionExacta AND dire_Estado = 0)
			BEGIN
				UPDATE Gral.tbDirecciones
				SET dire_Estado = 1
				WHERE dire_DireccionExacta = @dire_DireccionExacta
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	
	BEGIN CATCH
		SELECT 0
	END CATCH
END


--Editar Direcciones
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_Update
@dire_Id					INT,
@dire_DireccionExacta			NVARCHAR(150),
@muni_Id					CHAR(4),
@dire_UsuarioModificador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM tbDirecciones WHERE dire_DireccionExacta = @dire_DireccionExacta AND dire_Id != @dire_Id AND muni_Id != @muni_Id)
			BEGIN
				UPDATE Gral.tbDirecciones 
				SET dire_DireccionExacta = @dire_DireccionExacta,
					muni_Id = @muni_Id,
					dire_FechaModificacion = GETDATE(),
					dire_UsuarioModificador = @dire_UsuarioModificador
				WHERE dire_Id = @dire_Id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END 


--Eliminar Direcciones
GO
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_EliminarDirecciones
@dire_Id			INT
AS
BEGIN
	BEGIN TRY		
		IF NOT EXISTS(SELECT dire_Id FROM Acti.tbPlayas WHERE dire_Id = @dire_Id)
			BEGIN
				UPDATE	Gral.tbDirecciones							
				SET		dire_Estado = 0
				WHERE	dire_Id = @dire_Id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO

 --****************************************************UDP Y VISTA Encargados  *************************************************************************--
 /*Encargados Vista*/
 GO
 CREATE OR ALTER VIEW Acti.VW_tbEncargados 
 AS 
 SELECT enca.enca_id, enca_Nombres, 
 enca_Apellidos,CONCAT(enca_Nombres,' ',enca_Apellidos) AS enca_NombreCompleto, enca_DNI, 
 enca_Email, enca_Telefono, 
 enca_Sexo, enca.esci_id,[EstadoCivil].esci_Descripcion, 
 enca_FechaNac, enca_Estado, 
 enca_UsuarioCreador,[UsuarioCreador].usua_Usuario AS enca_UsuarioCreador_Nombre, enca_FechaCreacion, 
 enca_UsuarioModificador,[UsuarioModificador].usua_Usuario AS enca_UsuarioModificador_Nombre, enca_FechaModificacion
 FROM Acti.tbEncargados enca INNER JOIN Acce.tbUsuarios [UsuarioCreador]
 ON enca.enca_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
 ON enca.enca_UsuarioModificador = [UsuarioModificador].usua_ID INNER JOIN Gral.tbEstadosCiviles [EstadoCivil]
 ON enca.esci_id = [EstadoCivil].esci_id
 WHERE enca_Estado = 1

 /*Encargados Vista UDP*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargados_VW
 AS
 BEGIN
 SELECT * FROM Acti.VW_tbEncargados 
 END

 /*Encargados Insert*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargados_Insert
 @enca_Nombre			VARCHAR(300),
 @enca_Apellidos		VARCHAR(300),
 @enca_DNI				CHAR(13),
 @enca_Email			NVARCHAR(300),
 @enca_Telefono			CHAR(8),
 @enca_Sexo				CHAR,
 @esci_id				INT,
 @enca_FechaNac			DATE,
 @enca_UsuarioCreador	INT
 AS
 BEGIN
	BEGIN TRY
			IF NOT EXISTS (SELECT enca_DNI FROM Acti.tbEncargados WHERE enca_DNI = @enca_DNI)
				BEGIN
					INSERT INTO Acti.tbEncargados 
					(enca_Nombres, 
					enca_Apellidos, enca_DNI, 
					enca_Email, enca_Telefono, 
					enca_Sexo, esci_id, 
					enca_FechaNac, enca_Estado, 
					enca_UsuarioCreador, enca_FechaCreacion, 
					enca_UsuarioModificador, enca_FechaModificacion)
					VALUES(@enca_Nombre,@enca_Apellidos,
					@enca_DNI,@enca_Email,
					@enca_Telefono,@enca_Sexo,
					@esci_id,@enca_FechaNac,
					1,@enca_UsuarioCreador,
					GETDATE(),NULL,NULL)
					SELECT 1
				END
				ELSE IF EXISTS (SELECT enca_DNI FROM Acti.tbEncargados WHERE enca_DNI = @enca_DNI AND enca_Estado = 0)
						BEGIN
							UPDATE	Acti.tbEncargados
							SET enca_Estado = 1
							WHERE enca_DNI = @enca_DNI
							SELECT 1
						END
				ELSE 
					BEGIN
						SELECT 2
					END
	END TRY	
	BEGIN CATCH
		SELECT 0
	END CATCH
 END

 /*Encargados Update*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargados_Update
 @enca_id					INT,
 @enca_Nombre				VARCHAR(300),
 @enca_Apellidos			VARCHAR(300),
 @enca_DNI					CHAR(13),
 @enca_Email				NVARCHAR(300),
 @enca_Telefono				CHAR(8),
 @enca_Sexo					CHAR,
 @esci_id					INT,
 @enca_FechaNac				DATE,
 @enca_UsuarioModificador	INT
 AS
 BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT enca_DNI FROM Acti.tbEncargados WHERE enca_DNI = enca_DNI AND enca_id != enca_id)
			BEGIN
				UPDATE Acti.tbEncargados
				SET enca_Nombres = @enca_Nombre,
					enca_Apellidos = @enca_Apellidos,
					enca_DNI = @enca_DNI,
					enca_Email = @enca_Email,
					enca_Telefono = @enca_Telefono,
					enca_Sexo = @enca_Sexo,
					esci_id = @esci_id,
					enca_FechaNac = @enca_FechaNac,
					enca_UsuarioModificador = @enca_UsuarioModificador,
					enca_FechaModificacion = GETDATE()
				WHERE enca_id = @enca_id
				SELECT 1
			END
			BEGIN
				SELECT 2
			END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
 END

 /*Encargados Delete*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargados_Delete
 @enca_id					INT,
 @enca_UsuarioModificador	INT
 AS
 BEGIN
	BEGIN TRY
		UPDATE Acti.tbEncargados
		SET enca_Estado = 0,
			enca_UsuarioModificador = @enca_UsuarioModificador,
			enca_FechaModificacion = GETDATE()
		WHERE enca_id = @enca_id
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
 END

  --****************************************************//////UDP Y VISTA Encargados  *************************************************************************--

 --****************************************************UDP Y VISTA Equipos  *************************************************************************--
  /*Vista Equipos*/
GO
CREATE OR ALTER VIEW Acti.VW_tbEquipos
AS
SELECT
  equi_Id,
  equi_Descripcion,
  equi_UsoActual,
  equi_UsoLimite,
  equi_ImgUrL,
  equi_Estado,
  equi_UsuarioCreador,
  [UsuarioCreador].usua_Usuario AS equi_UsuarioCreador_Nombre,
  equi_FechaCreacion,
  equi_UsuarioModificador,
  [UsuarioModificador].usua_Usuario AS equi_UsuarioModificador_Nombre,
  equi_FechaModificacion,
  CASE
    WHEN equi_UsoActual >= equi_UsoLimite THEN 'Requerido'
    WHEN equi_UsoLimite - equi_UsoActual <= 3 THEN 'Recomendado'
    ELSE 'No requerido'
  END AS mantenimiento
FROM
  Acti.tbEquipos equi
  INNER JOIN Acce.tbUsuarios [UsuarioCreador] ON equi.equi_UsuarioCreador = [UsuarioCreador].usua_ID
  LEFT JOIN Acce.tbUsuarios [UsuarioModificador] ON equi.equi_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE
  equi_Estado = 1
	
  /*Vista Equipos UDP*/
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_VW
  AS
  BEGIN
    SELECT * FROM Acti.VW_tbEquipos
  END

  /*Insertar equipos*/
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Insert
  @equi_Descripcion NVARCHAR(250),
  @equi_UsoLimite INT,
  @equi_ImgUrl NVARCHAR(MAX),
  @equi_UsuarioCreador INT
  AS
  BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT equi_Descripcion FROM Acti.tbEquipos WHERE equi_Descripcion = @equi_Descripcion)
			BEGIN
				INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_ImgUrL, 
				equi_UsoActual, equi_UsoLimite, 
				equi_Estado, equi_UsuarioCreador, 
				equi_FechaCreacion, equi_UsuarioModificador, 
				equi_FechaModificacion)
				VALUES (@equi_Descripcion,@equi_ImgUrl,0,@equi_UsoLimite,1,@equi_UsuarioCreador,GETDATE(),NULL,NULL)
				SELECT 1
			END
		ELSE IF EXISTS(SELECT equi_Descripcion FROM Acti.tbEquipos WHERE equi_Descripcion = @equi_Descripcion AND equi_Estado = 0)
			BEGIN
				UPDATE Acti.tbEquipos 
				SET equi_Estado = 1
				WHERE equi_Descripcion = @equi_Descripcion
				SELECT 1
			END
		ELSE
		SELECT 2
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
  END

  /*Editar Equipos*/
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Update
  @equi_id INT,
  @equi_Descripcion NVARCHAR(250),
  @equi_UsoLimite INT,
  @equi_ImgUrl NVARCHAR(MAX),
  @equi_UsuarioModificador INT
  AS
  BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT equi_Descripcion FROM Acti.tbEquipos WHERE equi_Descripcion = @equi_Descripcion AND equi_Id != @equi_id)
			BEGIN
				UPDATE Acti.tbEquipos
				SET equi_Descripcion = @equi_Descripcion,
					equi_UsoLimite = @equi_UsoLimite,
					equi_ImgUrL = @equi_ImgUrl,
					equi_FechaModificacion = GETDATE(),
					equi_UsuarioModificador = @equi_UsuarioModificador
				WHERE equi_Id = @equi_id
				SELECT 1
			END
			ELSE
				BEGIN
					SELECT 2
				END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
  END
 
 /*Eliminar Equipos*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Delete
 @equi_Id INT
 AS
 BEGIN 
	BEGIN TRY
		IF NOT EXISTS(SELECT [equi_Id] FROM [Acti].[tbEquipoXActividades] WHERE [equi_Id] = @equi_Id)
			BEGIN
				UPDATE Acti.tbEquipos
				SET equi_Estado = 0
				WHERE equi_Id = @equi_Id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
 END

 /*Mantenimiento equipo*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Mantenimiento
 @equi_Id INT
 AS
 BEGIN
	BEGIN TRY
		DECLARE @usoActual INT = (SELECT equi_UsoActual FROM Acti.tbEquipos WHERE equi_Id = @equi_Id)
		DECLARE @usoLimte INT = (SELECT equi_UsoLimite FROM Acti.tbEquipos WHERE equi_Id = @equi_Id)
		IF @usoLimte - @usoActual <= 3 
			BEGIN
				UPDATE Acti.tbEquipos
				SET equi_UsoActual = 0
				WHERE equi_Id = @equi_Id
				SELECT 1
			END	
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
 END

	
  --******************* *********************************//////UDP Y VISTA Equipos  *************************************************************************--


    --******************* ********************************UDP Y VISTA Actividades  *************************************************************************--
	/*Vista Actividades*/
	GO
	CREATE OR ALTER VIEW Acti.VW_tbActividades
	AS
	SELECT acti_Id, 
	acti_Nombre,  
	acti_Cupo, 
	acti_Precio,
	acti_ImgUrl,
	play_playa,
	acti.play_Id, 
	acti_Estado, 
	acti_UsuarioCreador,
	[UsuarioCreador].usua_Usuario AS acti_UsuarioCreador_Nombre, 
	acti_FechaCreacion, 
	acti_UsuarioModificador,
	[UsuarioModificador].usua_Usuario AS acti_UsuarioModificador_Nombre, 
	acti_FechaModificacion
	FROM Acti.tbActividades	acti INNER JOIN Acce.tbUsuarios [UsuarioCreador]
	ON acti.acti_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador] 
	ON acti.acti_UsuarioModificador = [UsuarioModificador].usua_ID INNER JOIN Acti.tbPlayas playa
	ON	acti.play_Id = playa.play_Id
	WHERE acti_Estado = 1

	--/*Vista Actividades UDP*/
	GO 
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_VW
	AS
	BEGIN
	SELECT * FROM Acti.VW_tbActividades
	END

	--******************* ********************************UDP Y VISTA Actividades  *************************************************************************--
	/*Vista Actividades*/
	GO
	CREATE OR ALTER VIEW Acti.VW_tbActividades
	AS
	SELECT acti_Id, 
	acti_Nombre,  
	acti_Cupo, 
	acti_Precio,
	acti_ImgUrl,
	play_playa,
	acti.play_Id, 
	acti_Estado, 
	acti_UsuarioCreador,
	[UsuarioCreador].usua_Usuario AS acti_UsuarioCreador_Nombre, 
	acti_FechaCreacion, 
	acti_UsuarioModificador,
	[UsuarioModificador].usua_Usuario AS acti_UsuarioModificador_Nombre, 
	acti_FechaModificacion
	FROM Acti.tbActividades	acti INNER JOIN Acce.tbUsuarios [UsuarioCreador]
	ON acti.acti_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador] 
	ON acti.acti_UsuarioModificador = [UsuarioModificador].usua_ID INNER JOIN Acti.tbPlayas playa
	ON	acti.play_Id = playa.play_Id
	WHERE acti_Estado = 1

	--/*Vista Actividades UDP*/
	GO 
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_VW
	AS
	BEGIN
	SELECT * FROM Acti.VW_tbActividades
	END

	/*Insertar Actividades*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_Insert
	@acti_Nombre				VARCHAR(250),
	@acti_Cupo					INT,
	@acti_Precio				DECIMAL(18,2),
	@play_Id					INT,
	@acti_ImgUrl				NVARCHAR(MAX),
	@acti_UsuarioCreador		INT
	AS
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (SELECT acti_Nombre FROM Acti.tbActividades WHERE acti_Nombre = @acti_Nombre)
				BEGIN
					INSERT INTO Acti.tbActividades(acti_Nombre,  
					acti_Cupo, 
					acti_Precio, play_Id,acti_ImgUrl, 
					acti_Estado, acti_UsuarioCreador, 
					acti_FechaCreacion, acti_UsuarioModificador, 
					acti_FechaModificacion)
					VALUES(@acti_Nombre,@acti_Cupo,@acti_Precio,@play_Id,@acti_ImgUrl,1,@acti_UsuarioCreador,GETDATE(),NULL,NULL)
					SELECT SCOPE_IDENTITY()
				END
			IF EXISTS (SELECT acti_Nombre FROM Acti.tbActividades WHERE acti_Nombre = @acti_Nombre AND acti_Estado = 0)
				BEGIN
					UPDATE Acti.tbActividades
					SET acti_Estado = 1
					WHERE acti_Nombre = @acti_Nombre
					SELECT -1
				END
			ELSE
				BEGIN
					SELECT -2
				END
		END TRY

		BEGIN CATCH
		 SELECT 0
		END CATCH
	END

	/*Actividades Update*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_Update
	@acti_Id					INT,
	@acti_Nombre				VARCHAR(250),
	@acti_Cupo					INT,
	@acti_Precio				DECIMAL(18,2),
	@acti_ImgUrl				NVARCHAR(MAX),
	@play_Id					INT,
	@acti_UsuarioModificador	INT
	AS
	BEGIN
		BEGIN TRY
			IF NOT EXISTS(SELECT acti_Nombre FROM acti.tbActividades WHERE acti_Nombre = @acti_Nombre AND acti_Id != @acti_Id)
				BEGIN
					UPDATE Acti.tbActividades
					SET	acti_Nombre = @acti_Nombre,
					acti_Cupo = @acti_Cupo,
					acti_Precio = @acti_Precio,
					acti_ImgUrl = @acti_ImgUrl,
					play_Id = @play_Id,
					acti_UsuarioModificador = @acti_UsuarioModificador,
					acti_FechaModificacion = GETDATE()
					WHERE acti_Id = @acti_Id
					SELECT 1
				END
				BEGIN
					SELECT 2
				END
		END TRY

		BEGIN CATCH
			SELECT 0
		END CATCH
	END

	/*Actividades Delete*/
	GO 
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_Delete
	@acti_Id INT
	AS
	BEGIN
		BEGIN TRY
			IF NOT EXISTS(SELECT acti_Id FROM Acti.tbActividadesXFecha WHERE acti_Id = @acti_Id)
				BEGIN
					UPDATE Acti.tbActividades
					SET acti_Estado = 0
					WHERE acti_Id = @acti_Id
					SELECT 1
				END	
			ELSE BEGIN
				SELECT 2
			END
		END TRY

		BEGIN CATCH
			SELECT 0
		END CATCH
	END


	--******************* ********************************////UDP Y VISTA Actividades  *************************************************************************--

	--******************* ********************************  UDP Y VISTA Reservaciones  *************************************************************************--
	/*Vista Reservaciones*/
	GO
	CREATE OR ALTER VIEW Acti.VW_tbReservaciones
	AS
	SELECT rese_Id, rese_Cantidad, 
	rese.acti_Id,acti.acti_Nombre, rese_Estado, 
	rese_UsuarioCreador,[UsuarioCreador].usua_Usuario AS rese_UsuarioCreador_Nombre, rese_FechaCreacion, 
	rese_UsuarioModificador,[UsuarioModificador].usua_Usuario AS rese_UsuarioModificador_Nombre, rese_FechaModificacion
	FROM Acti.tbReservaciones rese INNER JOIN Acti.tbActividades acti
	ON rese.acti_Id = acti.acti_Id  INNER JOIN Acce.tbUsuarios [UsuarioCreador]
	ON rese.rese_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
	ON rese.rese_UsuarioModificador = [UsuarioModificador].usua_ID
	WHERE rese_Estado = 1

	/*Vista Reservaciones UDP*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbReservaciones_VW
	AS
	BEGIN
		SELECT * FROM Acti.VW_tbReservaciones
	END

	/*Reservaciones Insert*/
	GO


	CREATE OR ALTER PROCEDURE Acti.UDP_tbReservaciones_Insert
	(	
	  @acti_Id					 INT,
	  @rese_Cantidad			INT,
	  @rese_FechaReservacion	DATETIME,	
	  @rese_UsuarioCreador		INT
	)
	AS
	BEGIN
	  BEGIN TRY
					DECLARE @CantidadActividad INT = (SELECT acti_Cupo FROM Acti.tbActividades WHERE acti_Id = @acti_Id)
					DECLARE @Resultado2 INT = @CantidadActividad - @rese_Cantidad;

					 INSERT INTO [Acti].[tbReservaciones]
							   ([rese_Cantidad]
							   ,[acti_Id]
							   ,[rese_FechaReservacion]
							   ,[rese_Estado]
							   ,[rese_UsuarioCreador]
							   ,[rese_FechaCreacion]
							   ,[rese_UsuarioModificador]
							   ,[rese_FechaModificacion])
						 VALUES
							   (@rese_Cantidad
							   ,@acti_Id
							   ,@rese_FechaReservacion
							   ,1
							   ,@rese_UsuarioCreador
							   ,GETDATE()
							   ,NULL
							   ,NULL)

						INSERT INTO [Acti].[tbActividadesXFecha]
							   ([acti_Id]
							   ,[acfe_Fecha]
							   ,[acfe_Cantidad]
							   ,[acfe_Estado]
							   ,[acfe_UsuarioCreador]
							   ,[acfe_FechaCreacion]
							   ,[acfe_UsuarioModificador]
							   ,[acfe_FechaModificacion])
						 VALUES
							   (@acti_Id
							   ,@rese_FechaReservacion
							   ,@Resultado2
							   ,1
							   ,@rese_UsuarioCreador
							   ,GETDATE()
							   ,NULL
							   ,NULL)
	    
						DECLARE @LastID2 INT;
						SELECT TOP 1 @LastID2 =  rese_Id
						FROM	Acti.tbReservaciones
						ORDER BY rese_Id DESC

						SELECT  @LastID2 -- Éxito: reservación insertada		
	  END TRY
	  BEGIN CATCH
	    SELECT  0 -- Error: no hay cupo disponible
	  END CATCH
	END
	GO

	CREATE OR ALTER PROCEDURE Acti.UDP_tbReservaciones_InsertExiste
	(	
	  @acti_Id					 INT,
	  @rese_Cantidad			INT,
	  @rese_FechaReservacion	DATE,	
	  @rese_UsuarioCreador		INT
	)
	AS
	BEGIN
		BEGIN TRY
				DECLARE @acfe_Cantidad INT = (SELECT acfe_Cantidad FROM [Acti].[tbActividadesXFecha] WHERE acfe_Fecha = @rese_FechaReservacion AND acti_Id = @acti_Id)
				DECLARE @resultado INT = @acfe_Cantidad - @rese_Cantidad;


					 INSERT INTO [Acti].[tbReservaciones]
						   ([rese_Cantidad]
						   ,[acti_Id]
						   ,[rese_FechaReservacion]
						   ,[rese_Estado]
						   ,[rese_UsuarioCreador]
						   ,[rese_FechaCreacion]
						   ,[rese_UsuarioModificador]
						   ,[rese_FechaModificacion])
					 VALUES
						   (@rese_Cantidad
						   ,@acti_Id
						   ,@rese_FechaReservacion
						   ,1
						   ,@rese_UsuarioCreador
						   ,GETDATE()
						   ,NULL
						   ,NULL)


					   UPDATE [Acti].[tbActividadesXFecha]
					   SET acfe_Cantidad = @resultado
					   WHERE acfe_Fecha = @rese_FechaReservacion 
					   AND acti_Id = @acti_Id


					DECLARE @LastID INT;
					SELECT TOP 1 @LastID = rese_Id
					FROM	Acti.tbReservaciones
					ORDER BY rese_Id DESC

					SELECT  @LastID -- Éxito: reservación insertada
		END TRY
		BEGIN CATCH
			SELECT 0
		END CATCH
	END

	/*Reservacion Update*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbReservaciones_Update
(
  @rese_Id INT,
  @rese_Cantidad INT,
  @rese_FechaReservacion DATE,
  @resultado INT OUT
)
AS
BEGIN
  -- Obtener la actividad asociada a la reservación
  DECLARE @acti_Id INT
  SELECT @acti_Id = acti_Id
  FROM Acti.tbReservaciones
  WHERE rese_Id = @rese_Id

  -- Verificar si hay cupo disponible
  DECLARE @cuposDisponibles INT
  SELECT @cuposDisponibles = acti_Cupo - ISNULL(SUM(acfe_Cantidad), 0)
  FROM Acti.tbActividades a
  LEFT JOIN Acti.ActividadesXFecha axf ON a.acti_Id = axf.acti_Id
  WHERE a.acti_Id = @acti_Id
    AND axf.acfe_Fecha = @rese_FechaReservacion
  GROUP BY a.acti_Cupo

  -- Actualizar reservación si hay cupo disponible
  IF @cuposDisponibles >= (@rese_Cantidad - (SELECT rese_Cantidad FROM Acti.tbReservaciones WHERE rese_Id = @rese_Id))
  BEGIN
    UPDATE Acti.tbReservaciones
    SET rese_Cantidad = @rese_Cantidad,
        rese_FechaReservacion = @rese_FechaReservacion,
        rese_FechaModificacion = GETDATE()
    WHERE rese_Id = @rese_Id

    SET @resultado = 1 -- Éxito: reservación actualizada
  END
  ELSE
  BEGIN
    SET @resultado = 0 -- Error: no hay cupo disponible
  END
END
GO

/*Reservaciones Delete*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbReservacion_Delete
(
  @rese_Id INT,
  @resultado INT OUT
)
AS
BEGIN
  -- Verificar si la fecha de la reservación es anterior a la fecha actual
  DECLARE @fechaReservacion DATE
  SELECT @fechaReservacion = rese_FechaReservacion
  FROM Acti.tbReservaciones
  WHERE rese_Id = @rese_Id

  IF @fechaReservacion < GETDATE()
  BEGIN
    -- Eliminar la reservación
    DELETE FROM Acti.tbReservaciones
    WHERE rese_Id = @rese_Id

    SET @resultado = 1 -- Éxito: reservación eliminada
  END
  ELSE
  BEGIN
    SET @resultado = 0 -- Error: no se puede eliminar una reservación futura
  END
END
GO



--******************* ********************************///UDP Y VISTA Reservaciones  *************************************************************************--
--******************* ********************************UDP Y VISTA Clientes  ****************************************************************************--
/*Vista Clientes*/
GO
CREATE OR ALTER VIEW Acti.VW_tbClientes
AS
SELECT	clie_id, clie_Nombres, 
clie_Apellidos,CONCAT(clie_Nombres,+' '+clie_Apellidos) AS clie_NombreCompleto, clie_DNI, 
clie_Email, clie_Sexo, 
clie_FechaNac, clie_Estado, 
clie_UsuarioCreador,[UsuarioCreador].usua_Usuario AS clie_UsuarioCreador_Nombre, clie_FechaCreacion, 
clie_UsuarioModificador,[UsuarioModificador].usua_Usuario AS clie_UsuarioModificador_Nombre, clie_FechaModificacion
FROM Acti.tbClientes clie INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON clie.clie_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON clie.clie_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE clie_Estado = 1

/*Vista Clientes UDP*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbClientes_VW
AS
BEGIN
	SELECT * FROM Acti.VW_tbClientes
END

/*Clientes Insert*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbClientes_Insert
@clie_Nombres NVARCHAR(300),
@clie_Apellidos NVARCHAR(300),
@clie_DNI CHAR(13),
@clie_Email NVARCHAR(300),
@clie_Sexo CHAR,
@clie_FechaNac DATE,
@clie_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acti.tbClientes WHERE clie_DNI = @clie_DNI)
			BEGIN
				INSERT INTO Acti.tbClientes (
				clie_Nombres, clie_Apellidos, 
				clie_DNI, clie_Email, 
				clie_Sexo, clie_FechaNac, 
				clie_Estado, clie_UsuarioCreador, 
				clie_FechaCreacion, clie_UsuarioModificador, 
				clie_FechaModificacion)
				VALUES(@clie_Nombres,@clie_Apellidos,
				@clie_DNI,@clie_Email,
				@clie_Sexo,@clie_FechaNac,
				1,@clie_UsuarioCreador,
				GETDATE(),NULL,NULL)
				SELECT 1
			END
		ELSE IF EXISTS(SELECT * FROM Acti.tbClientes WHERE clie_DNI = @clie_DNI AND clie_Estado = 0)
			BEGIN
				UPDATE Acti.tbClientes
				SET clie_Estado = 1
				WHERE clie_DNI = @clie_DNI
				SELECT 1
			END
		ELSE
		BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Clientes Update*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbClientes_Update
@clie_id INT,
@clie_Nombres NVARCHAR(300),
@clie_Apellidos NVARCHAR(300),
@clie_DNI CHAR(13),
@clie_Email NVARCHAR(300),
@clie_Sexo CHAR,
@clie_FechaNac DATE,
@clie_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acti.tbClientes WHERE clie_DNI = @clie_DNI AND clie_id != @clie_id)
			BEGIN
				UPDATE Acti.tbClientes
				SET clie_Nombres = @clie_Nombres,
				clie_Apellidos = @clie_Apellidos,
				clie_DNI = @clie_DNI,
				clie_Email = @clie_Email,
				clie_Sexo = @clie_Sexo,
				clie_FechaNac = @clie_FechaNac,
				clie_FechaModificacion = GETDATE(),
				clie_UsuarioModificador = @clie_UsuarioModificador
				WHERE clie_id = @clie_id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Clientes Delete*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbClientes_Delete
@clie_id					INT,
@clie_UsuarioModificador	INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT [clie_Id] FROM [Acti].[tbClienteXReservacion] WHERE clie_Id = @clie_id)
			BEGIN
				UPDATE Acti.tbClientes
				SET clie_Estado = 0
				WHERE clie_id = @clie_id
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
	SELECT 0
	END CATCH
END

--******************* ********************************////UDP Y VISTA Clientes  ****************************************************************************--

--******************* ********************************UDP Y VISTA Roles  ****************************************************************************--
/*Vista Roles*/
GO
CREATE OR ALTER VIEW Acce.VW_tbRoles
AS
SELECT role.role_ID, role_Descripcion, 
role_Estado, role_UsuarioCreador,[UsuarioCreador].usua_Usuario AS role_UsuarioCreador_Nombre, 
role_FechaCreacion, role_UsuarioModificador,[UsuarioModificador].usua_Usuario AS role_UsuarioModificador_Nombre, 
role_FechaModificacion
FROM [Acce].[tbRoles] role INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON role.role_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON role.role_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE role_Estado = 1

/*Vista Roles UDP*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_VW
AS
BEGIN
	SELECT * FROM Acce.VW_tbRoles WHERE role_Estado =  1
END

/*******************************Roles insert *************************/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_Insert
@role_Descripcion VARCHAR(250),
@role_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acce.tbRoles WHERE role_Descripcion = @role_Descripcion)
			BEGIN
				INSERT INTO Acce.tbRoles(role_Descripcion, 
				role_Estado, role_UsuarioCreador, 
				role_FechaCreacion, role_UsuarioModificador, 
				role_FechaModificacion)
				VALUES(@role_Descripcion,1,@role_UsuarioCreador,GETDATE(),NULL,NULL)

				Declare @classid INT = (select top 1 role_ID From Acce.tbRoles order by role_ID desc )
				SELECT @classid
			END
		ELSE IF EXISTS(SELECT * FROM Acce.tbRoles WHERE role_Descripcion = @role_Descripcion AND role_Estado = 0)
			BEGIN
				UPDATE Acce.tbRoles
				SET role_Estado = 1
				WHERE role_Descripcion = @role_Descripcion
				
				SELECT role_ID 
				from Acce.tbRoles
				Where role_Descripcion = @role_Descripcion
			END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Roles Update*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_Update
@role_ID INT,
@role_Descripcion VARCHAR(250),
@role_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acce.tbRoles WHERE role_Descripcion = @role_Descripcion AND role_ID != @role_ID)
			BEGIN
				UPDATE Acce.tbRoles
				SET role_Descripcion = @role_Descripcion,
					role_UsuarioModificador = @role_UsuarioModificador,
					role_FechaModificacion = GETDATE()
				WHERE role_ID = @role_ID
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Roles Delete*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_Delete 19
@role_ID INT
AS
BEGIN
	BEGIN TRY
		DECLARE @existe INT= 1

		IF EXISTS(SELECT [role_ID] FROM [Acce].[tbUsuarios] WHERE [role_ID] = @role_ID)
			BEGIN
				SET @existe = 2
			END

		IF @existe = 1
			BEGIN
				UPDATE Acce.tbRoles
				SET role_Estado = 0
				WHERE role_ID = @role_ID
				SELECT @existe
			END
			ELSE BEGIN
				SELECT @existe
			END

	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

--******************* ********************************///UDP Y VISTA Roles  ****************************************************************************--

--******************* ********************************UDP RolesXPantallas ****************************************************************************--
/*Vista RolesXPantalla*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantallas_Select
AS
BEGIN
	SELECT * FROM Acce.tbRolesXPantallas WHERE roleXpant_Estado = 1
END

/*RolesXPantalla Insert*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_RolesXPantallas_Insert
@role_ID INT,
@pant_ID INT,
@roleXpant_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY		
		INSERT INTO Acce.tbRolesXPantallas (role_ID, pant_ID, 
		roleXpant_Estado, roleXpant_UsuarioCreador, 
		roleXpant_FechaCreacion, roleXpant_UsuarioModificador, 
		roleXpant_FechaModificacion)
		VALUES(@role_ID,@pant_ID,1,@roleXpant_UsuarioCreador,GETDATE(),NULL,NULL)
		SELECT 1
	END TRY
	
	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*RolesXPantalla Delete*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantalla_Delete
@roleXpant_ID INT
AS
BEGIN
	BEGIN TRY
		DELETE Acce.tbRolesXPantallas
		WHERE roleXpant_ID = @roleXpant_ID
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END


/*RolesXPantallas_Select_ByRoleID */
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantallas_Select_ByRoleID 
@role_ID INT
AS
BEGIN
	SELECT t1.role_ID,t1.pant_ID,t2.pant_Descripcion
	FROM Acce.tbRolesXPantallas t1 inner join Acce.tbPantallas t2 
	on t1.pant_ID = t2.pant_ID
	WHERE roleXpant_Estado = 1 AND role_ID = @role_ID
END

--******************* ********************************///UDP RolesXPantallas ****************************************************************************--

--******************* ********************************UDP Y VISTA Pantallas ****************************************************************************--
/*Vista Pantallas*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbPantallas_Select
AS
BEGIN
	SELECT * FROM Acce.tbPantallas WHERE pant_Estado = 1
END

--******************* ********************************///UDP Y VISTA Pantallas ****************************************************************************--

--******************* ********************************UDP Y VISTA Usuarios ****************************************************************************--
/*Vista Usuarios*/
GO
CREATE OR ALTER VIEW Acce.VW_tbUsuarios
AS
SELECT usua.usua_ID, usua.usua_Usuario, 
usua.usua_Clave,
usua.enca_ID,CONCAT(enca.enca_Nombres,enca.enca_Apellidos) AS enca_NombreCompleto, usua.role_ID,role.role_Descripcion, 
usua.usua_Estado, usua.usua_UsuarioCreador, [UsuarioCreador].usua_Usuario AS usua_UsuarioCreador_Nombre,
usua.usua_FechaCreacion, usua.usua_UsuarioModificador, [UsuarioModificador].usua_Usuario AS usua_UsuarioModificador_Nombre,
usua.usua_FechaModificacion
FROM Acce.tbUsuarios usua INNER JOIN Acti.tbEncargados enca
ON usua.enca_id = enca.enca_id INNER JOIN Acce.tbRoles role
ON usua.role_ID = role.role_ID  INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON usua.usua_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON usua.usua_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE usua.usua_Estado = 1

/*Vista Usuarios UDP*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_VW
AS
BEGIN
	SELECT * FROM Acce.VW_tbUsuarios
END

/*Login*/
GO

CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Login
(
	@usua_Usuario  NVARCHAR(100),
	@usua_Clave    NVARCHAR(MAX)
)
AS
BEGIN
	DECLARE @Pass AS NVARCHAR(MAX);
	SET @Pass = CONVERT(NVARCHAR(MAX), HASHBYTES('sha2_512', @usua_Clave), 2);
	IF EXISTS (SELECT * FROM Acce.tbUsuarios WHERE usua_Usuario = @usua_Usuario AND usua_Clave = @usua_Clave)
		BEGIN
			SELECT 2
		END
	ELSE
	BEGIN
	SELECT	usua_ID , 
			usua_Usuario,
			tb1.role_ID,
			tb3.role_Descripcion,
		    tb2.enca_id,
			tb2.enca_Nombres + ' ' + tb2.enca_Apellidos AS enca_NombreCompleto
					    			
	  FROM   Acce . tbUsuarios  tb1
INNER JOIN  Acti.tbEncargados tb2
		ON  tb1.enca_ID = tb2.enca_id
INNER JOIN   Acce.tbRoles tb3 
		ON  tb1.role_Id =tb3.role_Id
	 WHERE   usua_Usuario  = @usua_Usuario AND  usua_Clave  = @Pass
	   AND   usua_Estado  = 1
	   END
END
GO

CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_DDLencargadosTieneusuario
AS
BEGIN
	SELECT t2.enca_id, 
		   t2.enca_Nombres+' '+  t2.enca_Apellidos as enca_NombreCompleto		  
	  FROM Acce. tbUsuarios  t1 
 FULL JOIN Acti.tbEncargados  t2  
		ON t1.enca_Id = t2.enca_Id 
	 WHERE t1.usua_Id IS NULL 
	   AND t2.enca_Estado  = 1 
END

GO

/*Usuarios Insert*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Insert
@usua_Usuario NVARCHAR(100),
@usua_Clave   NVARCHAR(MAX),
@enca_ID INT,
@role_ID INT,
@usua_UsuarioCreador INT
AS
BEGIN
 BEGIN TRY
 		IF NOT EXISTS(SELECT * FROM Acce.tbUsuarios WHERE usua_Usuario = @usua_Usuario)
			BEGIN
				DECLARE @contraEncriptada NVARCHAR(MAX) = HASHBYTES('SHA2_512', @usua_Clave);
				INSERT INTO Acce.tbUsuarios(usua_Usuario, usua_Clave, 
				enca_ID, 
				role_ID, usua_Estado, 
				usua_UsuarioCreador, usua_FechaCreacion, 
				usua_UsuarioModificador, usua_FechaModificacion)
				VALUES(@usua_Usuario,@contraEncriptada,@enca_ID,
				@role_ID,1,@usua_UsuarioCreador,
				GETDATE(),NULL,NULL)
				SELECT 1
			END
		IF EXISTS (SELECT * FROM Acce.tbUsuarios WHERE usua_Usuario = @usua_Usuario AND usua_Estado = 0)
			BEGIN
				UPDATE Acce.tbUsuarios 
				SET usua_Estado = 1
				WHERE usua_Usuario = @usua_Usuario
				SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
 END TRY

 BEGIN CATCH
	SELECT 0
 END CATCH
END

/*Usuarios Update*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Update
@usua_ID INT,
@usua_EsAdmin INT,
@enca_ID INT,
@role_ID INT,
@usua_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
				UPDATE Acce.tbUsuarios	
				SET	enca_ID = @enca_ID,
					role_ID = @role_ID,
					usua_FechaModificacion = GETDATE(),
					usua_UsuarioModificador = @usua_UsuarioModificador
				SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0 
	END CATCH
END

/*Usuarios Delete*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Delete
@usua_ID INT
AS
BEGIN
	BEGIN TRY
		UPDATE Acce.tbUsuarios
		SET usua_Estado = 0
		WHERE usua_ID = @usua_ID
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END
--******************* ********************************///UDP Y VISTA Usuarios ****************************************************************************--

--******************* ********************************UDP Y VISTA Mantenimiento ****************************************************************************--
/*Vista Mantenimiento*/
GO
CREATE OR ALTER VIEW Acti.VW_tbMantenimiento
AS
SELECT mant_Id, mant_Descricion, 
mant_Estado, mant_UsuarioCreador,[UsuarioCreador].usua_Usuario AS mant_UsuarioCreador_Nombre, 
mant_FechaCreacion, mant_UsuarioModificador,[UsuarioModificador].usua_Usuario AS mant_UsuarioModificador_Nombre, 
mant_FechaModificacion
FROM Acti.tbMantenimiento mant INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON mant.mant_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON mant.mant_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE mant_Estado = 1

/*Vista Mantenimiento UDP*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimiento_VW
AS
BEGIN
	SELECT * FROM Acti.VW_tbMantenimiento
END

/*Mantenimiento Insert*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimiento_Insert
@mant_Descripcion NVARCHAR(MAX),
@mant_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acti.tbMantenimiento WHERE mant_Descricion = @mant_Descripcion)
	    	BEGIN
	    		INSERT INTO Acti.tbMantenimiento(mant_Descricion, mant_Estado, 
	    		mant_UsuarioCreador, mant_FechaCreacion, 
	    		mant_UsuarioModificador, mant_FechaModificacion)
	    		VALUES (@mant_Descripcion,1,@mant_UsuarioCreador,GETDATE(),NULL,NULL)
	    		SELECT 1
	    	END
	    ELSE IF EXISTS (SELECT * FROM Acti.tbMantenimiento WHERE mant_Descricion = @mant_Descripcion AND mant_Estado = 0)
	    	BEGIN
	    		UPDATE Acti.tbMantenimiento
	    		SET mant_Estado = 1
	    		WHERE mant_Descricion = @mant_Descripcion
	    		SELECT 1
	    	END
	    ELSE BEGIN
	    	SELECT 2
	    END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Mantenimiento Update*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimiento_Update
@mant_Id INT,
@mant_Descripcion NVARCHAR(MAX),
@mant_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT * FROM Acti.tbMantenimiento WHERE mant_Descricion = @mant_Descripcion AND mant_Id != @mant_Id)
		BEGIN
			UPDATE Acti.tbMantenimiento
			SET mant_Descricion = @mant_Descripcion,
				mant_FechaModificacion = GETDATE(),
				mant_UsuarioModificador = @mant_UsuarioModificador
			WHERE mant_Id = @mant_Id
			SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Mantenimento Delete*/
GO 
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimiento_Delete
@mant_Id INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT [mant_Id] FROM [Acti].[tbMantenimientoXEquipo] WHERE [mant_Id] = @mant_Id)
			BEGIN
				UPDATE Acti.tbMantenimiento
				SET	mant_Estado = 0
				WHERE mant_Id = @mant_Id
		SELECT 1
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END


--***************************************************///UDP Y VISTA Mantenimiento ****************************************************************************--

--***************************************************UDP Y VISTA MantenimientoXEquipo ****************************************************************************--
/*Vista MantenimientoXEquipo*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimientoXEquipo_Select
AS
BEGIN
	SELECT maeq_Id, equi_Id, 
	mant_Id, maeq_Estado, 
	maeq_UsuarioCreador, maeq_FechaCreacion, 
	maeq_UsuarioModificador, maeq_FechaModificacion
	FROM [Acti].[tbMantenimientoXEquipo]
	WHERE maeq_Estado = 1
END

/*MantenimientoXEquipo Insert*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimientoXEquipo_Insert
@equi_Id INT,
@mant_Id INT,
@maeq_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, 
		maeq_Estado, maeq_UsuarioCreador, 
		maeq_FechaCreacion, maeq_UsuarioModificador, 
		maeq_FechaModificacion)
		VALUES(@equi_Id,@mant_Id,1,@maeq_UsuarioCreador,GETDATE(),NULL,NULL)
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*MantenimientoXEquipo Update*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimientoXEquipo_Update
@maeq_Id INT,
@equi_Id INT,
@mant_Id INT,
@maeq_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
		UPDATE Acti.tbMantenimientoXEquipo
		SET equi_Id = @equi_Id,
			mant_Id = @mant_Id,
			maeq_UsuarioModificador = @maeq_UsuarioModificador,
			maeq_FechaModificacion = GETDATE()
		WHERE maeq_Id = @maeq_Id
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*MantenimientoXEquipo Delete*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_MantenimientoXEquipo_Delete
@maeq_Id INT
AS
BEGIN
	UPDATE Acti.tbMantenimientoXEquipo
	SET maeq_Estado = 0
	WHERE maeq_Id = @maeq_Id
END
--***************************************************///UDP Y VISTA MantenimientoXEquipo ****************************************************************************--

--***************************************************UDP Y VISTA Factura****************************************************************************--
/*Vista Factura*/
GO
CREATE OR ALTER VIEW Acti.VW_tbFactura
AS
SELECT fuct_Id, rese_Id, 
fuct_Subtotal, fuct_Isv, 
fuct_Total, fuct_Estado, 
fuct_UsuarioCreador,[UsuarioCreador].usua_Usuario AS fuct_UsuarioCreador_Nombre, fuct_FechaCreacion, 
fuct_UsuarioModificador,[UsuarioModificador].usua_Usuario AS fuct_UsuarioModificador_Nombre, fuct_FechaModificacion
FROM [Acti].[tbFactura] fuct INNER JOIN  Acce.tbUsuarios [UsuarioCreador]
ON fuct.fuct_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON fuct.fuct_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE fuct_Estado = 1

/*Vista Factura UDP*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbFactura_VW
AS
BEGIN
	SELECT * FROM Acti.VW_tbFactura
END

/*Vista Factura Insert*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbFactura_Insert
@rese_Id				INT,
@fuct_Subtotal			DECIMAL(18,2),
@fuct_Isv				DECIMAL(18,2),
@fuct_Total				DECIMAL(18,2),
@mepa_id				INT,
@fuct_UsuarioCreador	INT
AS
BEGIN	
	BEGIN TRY
		INSERT INTO Acti.tbFactura(rese_Id,mepa_id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_Estado, fuct_UsuarioCreador, fuct_FechaCreacion, fuct_UsuarioModificador, fuct_FechaModificacion)
		VALUES(@rese_Id,@mepa_id,@fuct_Subtotal,@fuct_Isv,@fuct_Total,1,@fuct_UsuarioCreador,GETDATE(),NULL,NULL)
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Vista Factura Delete*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbFactura_Delete
@fuct_Id INT
AS
BEGIN
	BEGIN TRY
		UPDATE Acti.tbFactura
		SET fuct_Estado = 0
		WHERE fuct_Id = @fuct_Id
		SELECT 1
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END
GO
--***************************************************///UDP Y VISTA Factura****************************************************************************--

--*************************************************** UDP Y VISTA tbReservacionesXClientes****************************************************************************--

CREATE OR ALTER PROCEDURE Acti.UDP_tbClienteXReservacion_Insertar
	@clie_Id				INT,
	@rese_Id				INT,
	@clre_UsuarioCreador	INT
AS
BEGIN
	BEGIN TRY
		INSERT INTO Acti.tbClienteXReservacion([clie_Id], [rese_Id], [clre_Estado], [clre_UsuarioCreador], [clre_FechaCreacion], [clre_UsuarioModificador], [clre_FechaModificacion])
		VALUES (@clie_Id,@rese_Id,1,@clre_UsuarioCreador,GETDATE(),NULL, NULL ) 
		SELECT 1
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END


--*************************************************** /UDP Y VISTA tbReservacionesXClientes****************************************************************************--



--*************************************************** UDP Y VISTA tbEquipoXActividades ****************************************************************************--
/*Vista EquipoXActividades*/
GO
CREATE OR ALTER VIEW Acti.VW_tbEquipoXActividades
AS
SELECT [eqac_Id], eqac.[acti_Id],acti.acti_Nombre, 
eqac.[equi_Id],equi.equi_Descripcion, [eqac_UsuarioCreador], 
[eqac_FechaCreacion], [eqac_UsuarioModificador], 
[eqac_FechaModificacion]
FROM Acti.tbEquipoXActividades eqac INNER JOIN Acti.tbActividades acti
ON eqac.acti_Id = acti.acti_Id INNER JOIN Acti.tbEquipos equi
ON eqac.equi_Id = equi.equi_Id

/*Vista EquipoXActividades UDP*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipoXActividades_VW
AS
BEGIN
	SELECT * FROM Acti.VW_tbEquipoXActividades
END



/*Insertar EquipoXActividades*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipoXActividades_Insert
@acti_Id INT,
@equi_Id INT,
@eqac_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		INSERT INTO Acti.tbEquipoXActividades([acti_Id], [equi_Id], [eqac_UsuarioCreador], [eqac_FechaCreacion], [eqac_UsuarioModificador], [eqac_FechaModificacion])
		VALUES(@acti_Id,@equi_Id,@eqac_UsuarioCreador,GETDATE(),NULL,NULL)
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Eliminar EquipoXActividades*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipoXActividades_Delete
@acti_Id INT
AS
BEGIN
	BEGIN TRY
		DELETE Acti.tbEquipoXActividades
		WHERE acti_Id = @acti_Id
		SELECT 1
	END TRY
	
	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*EquipoXActividad*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_EquipoXActividad 
@acti_Id INT
AS
BEGIN
    SELECT equi.equi_Id, equi.equi_Descripcion, equi.equi_ImgUrL, equi.equi_UsoActual, 
           equi.equi_UsoLimite, equi.equi_Estado, equi.equi_UsuarioCreador, 
           equi.equi_FechaCreacion, equi.equi_UsuarioModificador, equi.equi_FechaModificacion
    FROM Acti.tbEquipos equi
    INNER JOIN Acti.tbEquipoXActividades eqac ON equi.equi_Id = eqac.equi_Id
    WHERE eqac.acti_Id = @acti_Id
END

--*************************************************** ///UDP Y VISTA tbEquipoXActividades ****************************************************************************--
GO
--**************************************************** ///UDP Y Vista tbActividadesXFecha ****************************************************************--

CREATE OR ALTER PROCEDURE Acti.UDP_tbActividadesXFecha_VerificarCuposFecha
	@acti_Id		INT,
	@acfe_Fecha		DATE
AS
BEGIN
	BEGIN TRY
	IF EXISTS (SELECT acfe_Id FROM [Acti].[tbActividadesXFecha] WHERE acti_id = @acti_Id AND acfe_Fecha = @acfe_Fecha)
		BEGIN
			SELECT acfe_Cantidad FROM [Acti].[tbActividadesXFecha] WHERE acti_id = @acti_Id AND acfe_Fecha = @acfe_Fecha
		END
	ELSE 
		BEGIN 
			SELECT -2
		END		
	END TRY
	BEGIN CATCH
		SELECT -0
	END CATCH 
END

--**************************************************** ///UDP Y Vista tbActividadesXFecha ****************************************************************--


--**************************************************** UDP Y Vista EncargadosXActividades****************************************************************--
/*EncargadosXActividad*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargadosXActividad
    @actividadId INT
AS
BEGIN
    SELECT * FROM [Acti].[tbEncargados] enca INNER JOIN Acti.tbEncargadosXActividades enac
	ON enca.enca_id = enac.enca_Id WHERE enac.acti_Id = @actividadId
END
GO

/*Insertar EncargadosXActividad*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargadosXActividad_Insert
@enca_Id INT,
@acti_Id INT,
@enac_UsuarioCreador INT
AS
BEGIN
	BEGIN TRY
		INSERT INTO Acti.tbEncargadosXActividades([enca_Id], [acti_Id], 
		[enac_Estado], [enac_UsuarioCreador], 
		[enac_FechaCreacion], [enac_UsuarioModificador], 
		[enac_FechaModificacion])
		VALUES(@enca_Id,@acti_Id,1,@enac_UsuarioCreador,GETDATE(),NULL,NULL)
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

/*Eliminar EncargadosXActividad*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargadosXActividad_Delete
@actividadId INT
AS
BEGIN
	BEGIN TRY
		DELETE [Acti].[tbEncargadosXActividades]
		WHERE acti_Id = @actividadId 
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END


--**************************************************** ///UDP Y Vista EncargadosXActividades****************************************************************--
