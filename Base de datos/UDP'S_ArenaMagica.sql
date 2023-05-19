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

--Insertar Departamentos
CREATE OR ALTER PROCEDURE Gral.UDP_tbDepartamentos_InsertarDepartamentos
	@dept_Descripcion		NVARCHAR(150),
	@dept_UsuarioCreador	INT,
	@Status					INT OUTPUT
AS
BEGIN
	BEGIN TRY
        IF NOT EXISTS (SELECT * FROM Gral.tbDepartamentos WHERE dept_Descripcion = @dept_Descripcion)
            BEGIN
                DECLARE @IdDepto AS CHAR(2);
                SELECT @IdDepto = dept_Id FROM Gral.tbDepartamentos ORDER BY dept_Id ASC
                DECLARE @NextNewIdDepto AS CHAR(2);
                SET @NextNewIdDepto = CONVERT(CHAR(2), CONVERT(INT, @IdDepto) + 1);

                INSERT INTO gral.tbDepartamentos (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)
                VALUES (@NextNewIdDepto,@dept_Descripcion,1,@dept_UsuarioCreador,GETDATE(),NULL,NULL);

                SET @Status = 1
            END
        ELSE 
        BEGIN
            SET @Status = 2 
        END
    END TRY
    BEGIN CATCH
        SET @Status = 0
    END CATCH
END

GO

--Editar Departamentos
CREATE OR ALTER PROCEDURE Gral.UDP_tbDepartamentos_EditarDepartamentos
@dept_Id					CHAR(2),
@dept_Descripcion			NVARCHAR(100),
@dept_UsuarioModificador	INT,
@Status						INT OUTPUT
AS
BEGIN
BEGIN TRY
		IF NOT EXISTS (SELECT * FROM Gral.tbDepartamentos WHERE dept_Descripcion = @dept_Descripcion and dept_Id = @dept_Id)
			BEGIN
						UPDATE	Gral.tbDepartamentos							
				SET		dept_Descripcion			=@dept_Descripcion			,
						dept_UsuarioModificador		=@dept_UsuarioModificador		
				WHERE	dept_Id = @dept_Id
				SET @Status = 1
			END
		ELSE
			BEGIN
				SET @Status = 2
			END
	END TRY
	BEGIN CATCH
		SET @Status = 3
	END CATCH
END

--***************************************************** /UDP Y VISTA DEPARTAMENTOS ***********************************************************--
GO
--***************************************************** UDP Y VISTA MUNICIPIOS ***************************************************************--

/*Vista Municipios*/
CREATE OR ALTER VIEW Gral.VW_tbMunicipios
AS
SELECT	muni_Id, 
		muni_Descripcion,
		t2.dept_Id,
		T2.dept_Descripcion,
		muni_UsuarioCreador,
		muni_FechaCreacion,
		muni_UsuarioModificador,
		muni_FechaModificacion
FROM Gral.tbMunicipios T1 INNER JOIN Gral.tbDepartamentos T2
ON T1.dept_Id = T2.dept_Id

GO

--Insertar Municipios
CREATE OR ALTER PROCEDURE Gral_tbMunicipios_InsertarMunicipios
@dept_Id				CHAR(2),
@muni_Descripcion		NVARCHAR(150),
@muni_UsuarioCreador	INT,
@Status					INT OUTPUT
AS
BEGIN
BEGIN TRY
		IF NOT EXISTS (SELECT * FROM Gral.tbMunicipios WHERE muni_Descripcion = @muni_Descripcion AND dept_id = @dept_Id)
			BEGIN
				DECLARE @IdMuni AS CHAR(2)
				SELECT @IdMuni = SUBSTRING(muni_Id, 3, 2) FROM Gral.tbMunicipios WHERE dept_Id = @dept_Id ORDER BY muni_Id ASC 
	
				DECLARE @muni_Id AS CHAR(4)
				DECLARE @num AS INT
				SET @num = CONVERT(INT, @IdMuni) + 1
				SELECT @muni_Id = @dept_Id + RIGHT('00' + CONVERT(VARCHAR(2), @num), 2)
				
				INSERT INTO Gral.tbMunicipios(dept_id, muni_id, muni_Descripcion, muni_Estado, muni_UsuarioCreador, muni_FechaCreacion, muni_UsuarioModificador, muni_FechaModificacion)
				VALUES (@dept_Id,@muni_Id,@muni_Descripcion,1,@muni_UsuarioCreador,GETDATE(),NULL,NULL);
				SET @Status = 1
			END
		ELSE 
		BEGIN
			SET @Status = 2
		END
	END TRY
	BEGIN CATCH
		SET @Status = 0
	END CATCH
END
GO

--Editar Municipios
CREATE OR ALTER PROCEDURE Gral.UDP_tbMunicipios_EditarMunicipios
@muni_Id					CHAR(4),
@dept_Id					CHAR(2),
@muni_Descripcion			NVARCHAR(150),
@muni_UsuarioModificador	INT,
@Status						INT OUTPUT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS (SELECT muni_Id FROM Gral.tbMunicipios WHERE muni_Id = @muni_Id)
			BEGIN
				SET @Status = 1
			END	
		ELSE
			BEGIN
				UPDATE	Gral.tbMunicipios							
				SET		muni_Descripcion			=@muni_Descripcion			,
						dept_Id 					=@dept_Id,
						muni_UsuarioModificador		=@muni_UsuarioModificador		
				WHERE	muni_Id = @muni_Id
				SET @Status = 2
			END
	END TRY
	BEGIN CATCH
		SET @Status = 0
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



--Insertar Estados Civiles
GO
CREATE OR ALTER  PROCEDURE gral.UDP_tbEstadosCiviles_Insertar
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
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Update
@esci_Id						CHAR(1),
@esci_Descripcion				NVARCHAR(150),	
@esci_UsuarioModificador		INT
AS
BEGIN
	IF NOT EXISTS (SELECT esci_Descripcion FROM Gral.tbEstadosCiviles WHERE esci_Descripcion = @esci_Descripcion AND esci_id = @esci_Id)
		BEGIN
			UPDATE Gral.tbEstadosCiviles
			SET esci_Descripcion = @esci_Descripcion,
				esci_FechaModificacion = GETDATE(),
				esci_UsuarioModificador = @esci_UsuarioModificador
			WHERE esci_id = @esci_Id
			SELECT 1
		END
	ELSE
	BEGIN
		SELECT 0
	END
END

--**************************************************** /UDP Y VISTA ESTADOS CIVILES ***************************************************************--

 --****************************************************UDP Y VISTA METODOS DE PAGO  ***************************************************************--

/*Vista Metodos de Pago*/
GO
CREATE OR ALTER VIEW Gral_tbMetodosPago
AS
SELECT mepa_id, mepa_Descripcion, 
mepa_Estado, mepa_UsuarioCreador,[UsuarioCreador].usua_Usuario AS mepa_UsuarioCreador_Nombre, 
mepa_FechaCreacion, mepa_UsuarioModificador,[UsuarioModificador].usua_Usuario AS mepa_UsuarioModificador_Nombre, 
mepa_FechaModificacion
FROM	Gral.tbMetodosPago mepa INNER JOIN Acce.tbUsuarios [UsuarioCreador]
ON mepa.mepa_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
ON mepa.mepa_UsuarioModificador = [UsuarioModificador].usua_ID
WHERE   mepa_Estado  = 1

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
		ELSE
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
					mepa_UsuarioCreador = @mepa_UsuarioModificador
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
@mepa_id			INT,
@status				INT OUTPUT
AS
BEGIN
BEGIN TRY		
	
		UPDATE	[Gral].[tbMetodosPago]						
		SET		mepa_Estado = 0
		WHERE	mepa_id = @mepa_id
		SET @status = 1;
			
	END TRY
	BEGIN CATCH
		SET @status = 0;
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
	@play_UsuarioModificador	INT,
	@Status						INT OUTPUT
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
CREATE OR ALTER PROCEDURE Gral.UDP_tbPlayas_EliminarPlayas
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
		IF NOT EXISTS(SELECT * FROM tbDirecciones WHERE dire_DireccionExacta = @dire_DireccionExacta AND dire_Id != @dire_Id)
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
@dire_Id			INT,
@status				INT OUTPUT
AS
BEGIN
BEGIN TRY		
	
		UPDATE	Gral.tbDirecciones							
		SET		dire_Estado = 0
		WHERE	dire_Id = @dire_Id
		SET @status = 1		
	END TRY
	BEGIN CATCH
		SET @status = 0
	END CATCH
END
GO

 --****************************************************UDP Y VISTA Encargados  *************************************************************************--
 /*Encargados Vista*/
 GO
 CREATE OR ALTER VIEW Acti.VW_tbEncargados 
 AS 
 SELECT enca.enca_id, enca_Nombres, 
 enca_Apellidos, enca_DNI, 
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
						SELECT 1
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
 @enca_id INT
 AS
 BEGIN
	BEGIN TRY
		UPDATE Acti.tbEncargados
		SET enca_Estado = 0
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
  SELECT equi_Id, equi_Descripcion, 
  equi_UsoActual, equi_UsoLimite, 
  equi_Estado, equi_UsuarioCreador,[UsuarioCreador].usua_Usuario AS equi_UsuarioCreador_Nombre, 
  equi_FechaCreacion, equi_UsuarioModificador,[UsuarioModificador].usua_Usuario AS equi_UsuarioModificador_Nombre, 
  equi_FechaModificacion
  FROM Acti.tbEquipos equi INNER JOIN Acce.tbUsuarios [UsuarioCreador]
  ON equi.equi_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador]
  ON equi.equi_UsuarioModificador = [UsuarioModificador].usua_ID
  WHERE equi_Estado = 0

  /*Vista Equipos UDP*/
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_VW
  AS
  BEGIN
    SELECT * FROM Acti.VW_tbEquipos
  END

  /*Vista Equipos Insert */
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Insert
  @equi_Descripcion NVARCHAR(250),
  @equi_UsoLimite INT,
  @equi_UsuarioCreador INT
  AS
  BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT equi_Descripcion FROM Acti.tbEquipos WHERE equi_Descripcion = @equi_Descripcion)
			BEGIN
				INSERT INTO Acti.tbEquipos (equi_Descripcion, 
				equi_UsoActual, equi_UsoLimite, 
				equi_Estado, equi_UsuarioCreador, 
				equi_FechaCreacion, equi_UsuarioModificador, 
				equi_FechaModificacion)
				VALUES (@equi_Descripcion,0,@equi_UsoLimite,1,@equi_UsuarioCreador,GETDATE(),NULL,NULL)
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

  /*Equipos Update*/
  GO
  CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Update
  @equi_id INT,
  @equi_Descripcion NVARCHAR(250),
  @equi_UsoLimite INT,
  @equi_UsuarioModificador INT
  AS
  BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT equi_Descripcion FROM Acti.tbEquipos WHERE equi_Descripcion = @equi_Descripcion AND equi_Id != @equi_id)
			BEGIN
				UPDATE Acti.tbEquipos
				SET equi_Descripcion = @equi_Descripcion,
					equi_UsoLimite = @equi_UsoLimite,
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
 
 /*Equipos Delete*/
 GO
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEquipos_Delete
 @equi_Id INT
 AS
 BEGIN 
	BEGIN TRY
		UPDATE Acti.tbEquipos
		SET equi_Estado = 0
		WHERE equi_Id = @equi_Id
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
	SELECT acti_Id, acti_Nombre,  
	acti_Cupo, 
	acti_Precio, play_Id, 
	acti_Estado, acti_UsuarioCreador,[UsuarioCreador].usua_Usuario AS acti_UsuarioCreador_Nombre, 
	acti_FechaCreacion, acti_UsuarioModificador,[UsuarioModificador].usua_Usuario AS acti_UsuarioModificador_Nombre, 
	acti_FechaModificacion
	FROM Acti.tbActividades	acti INNER JOIN Acce.tbUsuarios [UsuarioCreador]
	ON acti.acti_UsuarioCreador = [UsuarioCreador].usua_ID LEFT JOIN Acce.tbUsuarios [UsuarioModificador] 
	ON acti.acti_UsuarioModificador = [UsuarioModificador].usua_ID
	WHERE acti_Estado = 1

	--/*Vista Actividades UDP*/
	GO 
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_VW
	AS
	BEGIN
	SELECT * FROM Acti.VW_tbActividades
	END

	/*Actividades Insert*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_Insert
	@acti_Nombre				VARCHAR(250),
	@acti_Cupo					INT,
	@acti_Precio				DECIMAL(18,2),
	@play_Id					INT,
	@acti_UsuarioCreador		INT
	AS
	BEGIN
		BEGIN TRY
			IF NOT EXISTS (SELECT acti_Nombre FROM Acti.tbActividades WHERE acti_Nombre = @acti_Nombre)
				BEGIN
					INSERT INTO Acti.tbActividades(acti_Nombre,  
					acti_Cupo, 
					acti_Precio, play_Id, 
					acti_Estado, acti_UsuarioCreador, 
					acti_FechaCreacion, acti_UsuarioModificador, 
					acti_FechaModificacion)
					VALUES(@acti_Nombre,@acti_Cupo,@acti_Precio,@play_Id,1,@acti_UsuarioCreador,GETDATE(),NULL,NULL)
					SELECT 1
				END
			IF EXISTS (SELECT acti_Nombre FROM Acti.tbActividades WHERE acti_Nombre = @acti_Nombre AND acti_Estado = 0)
				BEGIN
					UPDATE Acti.tbActividades
					SET acti_Estado = 1
					WHERE acti_Nombre = @acti_Nombre
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

	/*Actividades Update*/
	GO
	CREATE OR ALTER PROCEDURE Acti.UDP_tbActividades_Update
	@acti_Id					INT,
	@acti_Nombre				VARCHAR(250),
	@acti_Cupo					INT,
	@acti_Precio				DECIMAL(18,2),
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
			UPDATE Acti.tbActividades
			SET acti_Estado = 0
			WHERE acti_Id = @acti_Id
			SELECT 1
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
	CREATE OR ALTER PROCEDURE Acti.InsertarReservacion
	(
	  @acti_Id INT,
	  @rese_Cantidad INT,
	  @rese_FechaReservacion DATE,
	  @resultado INT OUT
	)
	AS
	BEGIN
	  -- Verificar si hay cupo disponible
	  DECLARE @cuposDisponibles INT
	  SELECT @cuposDisponibles = acti_Cupo - ISNULL(SUM(acfe_Cantidad), 0)
	  FROM Acti.tbActividades a
	  LEFT JOIN Acti.ActividadesXFecha axf ON a.acti_Id = axf.acti_Id
	  WHERE a.acti_Id = @acti_Id
	    AND axf.acfe_Fecha = @rese_FechaReservacion
	  GROUP BY a.acti_Cupo
	
	  -- Insertar reservación si hay cupo disponible
	  IF @cuposDisponibles >= @rese_Cantidad
	  BEGIN
	    INSERT INTO Acti.tbReservaciones (acti_Id, rese_Cantidad, rese_FechaReservacion)
	    VALUES (@acti_Id, @rese_Cantidad, @rese_FechaReservacion)
	    
	    SET @resultado = 1 -- Éxito: reservación insertada
	  END
	  ELSE
	  BEGIN
	    SET @resultado = 0 -- Error: no hay cupo disponible
	  END
	END
	GO

	/*Reservacion Update*/
	GO
	CREATE OR ALTER PROCEDURE Acti.ActualizarReservacion
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
clie_Apellidos,CONCAT(clie_Nombres,clie_Apellidos) AS clie_NombreCompleto, clie_DNI, 
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
@clie_id INT 
AS
BEGIN
	BEGIN TRY
			UPDATE Acti.tbClientes
			SET clie_Estado = 1
			WHERE clie_id = @clie_id
			SELECT 1
	END TRY

	BEGIN CATCH
	SELECT 0
	END CATCH
END
--******************* ********************************////UDP Y VISTA Clientes  ****************************************************************************--

--******************* ********************************UDP Y VISTA Roles  ****************************************************************************--
/*Vista Roles*/
GO
CREATE OR ALTER VIEW Acce.VW_Roles
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
	SELECT * FROM Acce.VW_Roles
END

/*Roles Insert*/
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
				SELECT 1
			END
		ELSE IF EXISTS(SELECT * FROM Acce.tbRoles WHERE role_Descripcion = @role_Descripcion AND role_Estado = 0)
			BEGIN
				UPDATE Acce.tbRoles
				SET role_Estado = 1
				WHERE role_Descripcion = @role_Descripcion
				SELECT 1
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
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_Delete
@role_ID INT
AS
BEGIN
	BEGIN TRY
		UPDATE Acce.tbRoles
		SET role_Estado = 1
		WHERE role_ID = @role_ID
		SELECT 1
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

/*Vista RolesXPantalla ByRoleID*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantallas_Select_ByRoleID
@role_ID INT
AS
BEGIN
	SELECT * FROM Acce.tbRolesXPantallas WHERE roleXpant_Estado = 1 AND role_ID = @role_ID
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
/*Login*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Login
@usua_Usuario NVARCHAR(100),
@usua_Clave VARCHAR(MAX)
AS
BEGIN
	DECLARE @contraEncriptada NVARCHAR(MAX) = HASHBYTES('SHA2_512', @usua_Clave);
	SELECT usua_ID, usua_Usuario, usua_Clave, usua_EsAdmin, usua.enca_ID,
	CONCAT(enca.enca_Nombres,enca.enca_Apellidos) AS enca_NombreCompleto, role_ID 
	FROM Acce.tbUsuarios usua INNER JOIN Acti.tbEncargados enca
	ON usua.enca_ID = enca.enca_id
	WHERE usua_Usuario = @usua_Usuario
	AND usua_Clave = @usua_Clave 
	AND usua_Estado = 1
END

/*Usuarios Insert*/
GO
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Insert
@usua_Usuario NVARCHAR(100),
@usua_Clave VARCHAR(MAX),
@usua_EsAdmin INT,
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
				usua_EsAdmin, enca_ID, 
				role_ID, usua_Estado, 
				usua_UsuarioCreador, usua_FechaCreacion, 
				usua_UsuarioModificador, usua_FechaModificacion)
				VALUES(@usua_Usuario,@contraEncriptada,
				@usua_EsAdmin,@enca_ID,
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
				SET	usua_EsAdmin = @usua_EsAdmin,
					enca_ID = @enca_ID,
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
		SELECT 1
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
		UPDATE Acti.tbMantenimiento
		SET	mant_Estado = 0
		WHERE mant_Id = @mant_Id
		SELECT 1
	END TRY
	BEGIN CATCH
		SELECT 0
	END CATCH
END


--***************************************************///UDP Y VISTA Mantenimiento ****************************************************************************--

--***************************************************UDP Y VISTA MantenimientoXEquipo ****************************************************************************--
/*Vista MantenimientoXEquipo*/
GO
CREATE OR ALTER PROCEDURE Acti.UDP_tbMantenimientoXEquipo_UDP
AS
BEGIN
	SELECT maeq_Id, equi_Id, 
	mant_Id, maeq_Estado, 
	maeq_UsuarioCreador, maeq_FechaCreacion, 
	maeq_UsuarioModificador, maeq_FechaModificacion
	FROM [Acti].[tbMantenimientoXEquipo]
	WHERE maeq_Estado = 1
END
--***************************************************///UDP Y VISTA MantenimientoXEquipo ****************************************************************************--