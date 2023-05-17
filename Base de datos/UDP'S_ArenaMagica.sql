USE DB_ArenaMagica
GO

--******************************************* Procedimientos Almacenados y vistas ***********************************************************--


--***************************************************** UDP Y VISTA DEPARTAMENTOS ***********************************************************--

--Vista
CREATE OR ALTER VIEW Gral.VW_tbDepartamentos
AS
SELECT	dept_Id, 
        dept_Descripcion,
		dept_UsuarioCreador,
		dept_FechaCreacion,
		dept_UsuarioModificador,
		dept_FechaModificacion
FROM Gral.tbDepartamentos 

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
        SET @Status = 3
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

--Vista
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
		SET @Status = 3
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
		SET @Status = 3
	END CATCH
END

--**************************************************** /UDP Y VISTA MUNICIPIOS ***************************************************************--
GO
--**************************************************** UDP Y VISTA ESTADOS CIVILES ***************************************************************--

--Vista
CREATE OR ALTER VIEW Gral.VW_tbEstadosCiviles
AS
SELECT	esci_Id, 
		esci_Descripcion,
		esci_UsuarioCreador,
		esci_FechaCreacion,
		esci_UsuarioModificador,
		esci_FechaModificacion
FROM Gral.tbEstadosCiviles

GO

--Insertar Estados Civiles
CREATE OR ALTER  PROCEDURE gral.UDP_tbEstadosCiviles_Insertar
@esci_Id						CHAR(1),
@esci_Descripcion				NVARCHAR(150),	
@esci_UsuarioCreador			INT,
@status							INT OUTPUT
AS
BEGIN 
	BEGIN TRY
		IF EXISTS(SELECT esci_Id FROM gral.tbEstadosCiviles WHERE esci_Descripcion = @esci_Descripcion) AND EXISTS(SELECT esci_Id FROM gral.tbEstadosCiviles WHERE esci_Id = @esci_Id)
		BEGIN
			SET @status = 1
		END
		ELSE
		BEGIN
			IF EXISTS(SELECT esci_Id FROM gral.tbEstadosCiviles WHERE esci_Id = @esci_Id) 
			BEGIN
				SET @status = 2
			END
			ELSE
			BEGIN
				IF EXISTS(SELECT esci_Id FROM gral.tbEstadosCiviles WHERE esci_Descripcion = @esci_Descripcion) 
				BEGIN
						SET @status = 3
				END
				ELSE
				BEGIN
						INSERT INTO gral.tbEstadosCiviles(esci_Id,esci_Descripcion,esci_UsuarioCreador)
						VALUES (@esci_Id,@esci_Descripcion, @esci_UsuarioCreador)
						SET  @status = 4
				END
			END
		END
	END TRY
	BEGIN CATCH
		SET  @status = 5
	END CATCH
END

GO

--Editar Estados Civiles
CREATE OR ALTER PROCEDURE gral.UDP_tbEstadosCiviles_Update
@esci_Id						CHAR(1),
@esci_Descripcion				NVARCHAR(150),	
@esci_UsuarioModificador		INT,
@status							INT OUTPUT
AS
BEGIN
	DECLARE @esci_IdEdit char(1) = (SELECT esci_Id FROM gral.tbEstadosCiviles WHERE esci_Descripcion = @esci_Descripcion)
	BEGIN TRY		
		IF (@esci_Id <> @esci_IdEdit)
			BEGIN
				SET @status = 3
			END
		ELSE
			BEGIN
				UPDATE	gral.tbEstadosCiviles							
				SET		esci_Descripcion			=@esci_Descripcion,	
						esci_UsuarioModificador		=@esci_UsuarioModificador,
						esci_FechaModificacion      = GETDATE()
				WHERE	esci_Id = @esci_Id
				SET @status = 1
			END
	END TRY
	BEGIN CATCH
		SET @status = 2
	END CATCH
END

--**************************************************** /UDP Y VISTA ESTADOS CIVILES ***************************************************************--
 GO
 --****************************************************UDP Y VISTA METODOS DE PAGO  ***************************************************************--

 --Vista
CREATE OR ALTER VIEW Gral_tbMetodosPago
AS
SELECT	mepa_id,
		mepa_Descripcion,
		mepa_UsuarioCreador,
		mepa_FechaCreacion,
		mepa_UsuarioModificador,
		mepa_FechaModificacion
FROM	Gral.tbMetodosPago
WHERE   mepa_Estado  = 1

GO

--Insertar Metodos de pago
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_InsertarMetodosPago
@mepa_Descripcion		NVARCHAR(150),
@mepa_UsuarioCreador	INT,
@status					INT OUTPUT
AS
BEGIN
	BEGIN TRY
	IF NOT EXISTS (SELECT * FROM Gral.tbMetodosPago WHERE mepa_Descripcion = @mepa_Descripcion AND mepa_Estado = 1)
			BEGIN
				INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion)
				VALUES (@mepa_Descripcion,1,@mepa_UsuarioCreador, GETDATE(), NULL, NULL);

				SET  @status = 1
			END
		ELSE 
		BEGIN
			SET  @status = 0
		END
	END TRY
	BEGIN CATCH
		SET  @status = 2
	END CATCH
END

GO

--Editar Metodos de pago
CREATE OR ALTER PROCEDURE Gral.UDP_tbMetodosPago_EditarMetodosPago
@mepa_id					INT,
@mepa_Descripcion			NVARCHAR(150),
@mepa_UsuarioModificador	INT,
@status						INT OUTPUT
AS
BEGIN
	DECLARE @mepa_idEdit	INT = (SELECT mepa_id FROM Gral.tbMetodosPago WHERE mepa_Descripcion = @mepa_Descripcion AND mepa_Estado = 1)
	BEGIN TRY
		IF (@mepa_idEdit <> @mepa_id)
			BEGIN
				SET @status = 3
			END	
		ELSE
			BEGIN
				UPDATE	Gral.tbMetodosPago							
				SET		mepa_Descripcion 						=@mepa_Descripcion,
						mepa_UsuarioModificador  				=@mepa_UsuarioModificador,
						mepa_FechaModificacion  				=GETDATE()
				WHERE	mepa_id = @mepa_id
				SET @status = 1
			END
	END TRY
	BEGIN CATCH
		SET @status = 2
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

 --Vista
 CREATE OR ALTER VIEW Gral_tbPlayas
AS
SELECT			play_id,
				play_Playa,
				t2.dire_id,
				t2.dire_DireccionExacta,
				t3.muni_id,
				t3.muni_Descripcion,
				t4.dept_id,
				t4.dept_Descripcion
				play_UsuarioCreador,
				play_FechaCreacion,
				play_UsuarioModificador,
				play_FechaModificacion
FROM			Gral.tbPlayas t1
INNER JOIN		Gral.tbDirecciones t2
ON				t1.dire_id = t2.dire_id
INNER JOIN		Gral.tbMunicipios t3
ON				t2.muni_id = t3.muni_id
INNER JOIN		Gral.tbDepartamentos t4
ON				t3.dept_id = t4.dept_id
WHERE			play_Estado  = 1

GO

--Insertar Playa
CREATE OR ALTER PROCEDURE Gral.UDP_tbPlayas_InsertarPlayas
	@play_Playa				NVARCHAR(150),
	@dire_id				INT,
	@play_UsuarioCreador	INT,
	@Status					INT OUTPUT
AS
BEGIN
BEGIN TRY
	IF EXISTS (SELECT * FROM Gral.tbPlayas WHERE play_Playa = @play_Playa AND dire_id = @dire_id)
	BEGIN 
		SET @Status = 1
	END
	ELSE
	BEGIN
		INSERT INTO [Gral].[tbPlayas](play_Playa ,dire_id,play_Estado,play_UsuarioCreador,play_FechaCreacion,play_UsuarioModificador,play_FechaModificacion)
				VALUES(@play_Playa,@dire_id,1,@play_UsuarioCreador,GETDATE(),NULL,NULL)
				SET @Status = 2
	END
END TRY
BEGIN CATCH
	SET @Status = 3
END CATCH
END

GO

--Editar Playa
CREATE OR ALTER PROCEDURE Gral.UDP_tbPlayas_EditarPlayas
	@play_Id					INT,
	@play_Playa					NVARCHAR(150),
	@dire_id					INT,
	@play_UsuarioModificador	INT,
	@Status						INT OUTPUT
AS
BEGIN 
	DECLARE @Id INT;
	BEGIN TRY
		SELECT @Id = @play_Id FROM tbPlayas WHERE play_Playa = @play_Playa AND dire_id = @dire_id;
		IF (@play_Id <> @Id)
		BEGIN
			SET @Status = 1
		END
		ELSE
		BEGIN
			UPDATE [Gral].[tbPlayas]
			   SET [play_Playa] = @play_Playa
				  ,[dire_id] = @dire_id
				  ,[play_UsuarioModificador] = @play_UsuarioModificador
				  ,[play_FechaModificacion] = GETDATE()
			 WHERE play_Id = @play_Id
			 SET @Status = 2
		END
	END TRY
	BEGIN CATCH
		SET @Status = 3
	END CATCH
END

GO

--Eliminar Playas
CREATE OR ALTER PROCEDURE Gral.UDP_tbPlayas_EliminarPlayas
@play_id			INT,
@status				INT OUTPUT
AS
BEGIN
BEGIN TRY		
	
		UPDATE	[Gral].[tbPlayas]						
		SET		play_Estado = 0
		WHERE	play_id = @play_id
		SET @status = 1;
			
	END TRY
	BEGIN CATCH
		SET @status = 0;
	END CATCH
END

--**************************************************** /UDP Y VISTA PLAYA ******************************************************************************--
 GO
 --****************************************************UDP Y DIRECCIONES  ********************************************************************************--

 --Insertar Direcciones
CREATE OR ALTER VIEW Gral.VW_tbDirecciones
AS
SELECT			dire_id,
				dire_DireccionExacta,
				dire_UsuarioCreador,
				dire_FechaCreacion,
				dire_UsuarioModificador,
				dire_FechaModificacion,
				t2.muni_id,
				t2.muni_Descripcion,
				t3.dept_id,
				t3.dept_Descripcion
FROM			Gral.tbDirecciones t1
INNER JOIN		Gral.tbMunicipios t2
ON				t1.muni_id = t2.muni_id
INNER JOIN		Gral.tbDepartamentos t3
ON				t2.dept_id = t3.dept_id
WHERE			dire_Estado = 1

GO

--Insertar Direcciones
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_InsertarDirecciones
@dire_DireccionExacta		NVARCHAR(150),
@muni_Id					CHAR(4),
@dire_UsuarioCreador		INT,
@status						INT OUTPUT
AS
BEGIN
BEGIN TRY
IF NOT EXISTS (SELECT * FROM gral.tbDirecciones WHERE dire_DireccionExacta = @dire_DireccionExacta AND muni_Id = @muni_Id AND dire_Estado = 1)
			BEGIN
				INSERT INTO gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
				VALUES (@dire_DireccionExacta,@muni_Id,1,@dire_UsuarioCreador,GETDATE(),NULL,NULL);
				SET @status = 1
			END
		ELSE 
		BEGIN
			SET @status = 2
		END
	END TRY
	BEGIN CATCH
		SET @status = 3
	END CATCH
END

GO

--Editar Direcciones
CREATE OR ALTER PROCEDURE Gral.UDP_tbDirecciones_Update
@dire_Id					INT,
@dire_DireccionExacta			NVARCHAR(150),
@muni_Id					CHAR(4),
@dire_UsuarioModificador	INT,
@status						INT OUTPUT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS (SELECT dire_Id FROM Gral.tbDirecciones WHERE dire_Id = @dire_Id)
			BEGIN
				SET @status = 1
			END	
		ELSE
			BEGIN
				UPDATE	Gral.tbDirecciones							
				SET		dire_DireccionExacta			=@dire_DireccionExacta			,
						muni_Id 						=@muni_Id,
						dire_UsuarioModificador			=@dire_UsuarioModificador,
						dire_FechaModificacion =		GETDATE()
				WHERE	dire_Id = @dire_Id
				SET @status = 2
			END
	END TRY
	BEGIN CATCH
		SET @status = 3
	END CATCH
END 

GO

--Eliminar Direcciones
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
 CREATE OR ALTER PROCEDURE Acti.UDP_tbEncargados_Insertar
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
  /*Vista*/
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
	
  --****************************************************//////UDP Y VISTA Equipos  *************************************************************************--
