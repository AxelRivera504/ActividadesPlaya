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

--Insertar Estado Civiles
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

