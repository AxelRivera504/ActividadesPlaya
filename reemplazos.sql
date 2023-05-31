
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Update
@usua_ID INT,
@enca_ID INT,
@role_ID INT,
@usua_Usuario NVARCHAR(350),
@usua_UsuarioModificador INT
AS
BEGIN
	BEGIN TRY
				UPDATE Acce.tbUsuarios	
				SET	
					enca_ID = @enca_ID,
					usua_Usuario = @usua_Usuario,
					role_ID = @role_ID,
					usua_FechaModificacion = GETDATE(),
					usua_UsuarioModificador = @usua_UsuarioModificador
				WHERE usua_ID = @usua_ID

				SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0 
	END CATCH
END


go
CREATE OR ALTER PROCEDURE Acce.UDP_tbRoles_Delete 
@role_ID INT
AS
BEGIN
	BEGIN TRY
		IF NOT EXISTS(SELECT t1.usua_Usuario FROM Acce.tbUsuarios t1 WHERE  role_ID = @role_ID)
			BEGIN
		
		UPDATE Acce.tbRoles
		SET role_Estado = 0
		WHERE role_ID = @role_ID
		
		DELETE Acce.tbRolesXPantallas
		WHERE role_ID = @role_ID
				
	   SELECT 1
	     
		END

		 else begin 
		 select 2
		 END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

go
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantalla_Delete 
@role_ID INT
AS
BEGIN
	BEGIN TRY
		DELETE Acce.tbRolesXPantallas
		WHERE role_ID = @role_ID
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END


go
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

go
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
				SELECT @role_ID
			END
		ELSE BEGIN
			SELECT 2
		END
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END


go
CREATE OR ALTER PROCEDURE Acce.UDP_tbRolesXPantalla_Delete 
@role_ID INT
AS
BEGIN
	BEGIN TRY
		DELETE Acce.tbRolesXPantallas
		WHERE role_ID = @role_ID
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END


go
CREATE OR ALTER PROCEDURE Acce.UDP_tbUsuarios_Delete 
@usua_ID INT
AS
BEGIN
	BEGIN TRY
		Update Acce.tbUsuarios
		SET usua_Estado = 0
		WHERE usua_ID = @usua_ID
		SELECT 1
	END TRY

	BEGIN CATCH
		SELECT 0
	END CATCH
END

GO


CREATE OR ALTER PROCEDURE Acti_tbActividadesXFecha_ObtenerCantidadVisitantes
AS
BEGIN
    SELECT [acfe_Fecha], SUM([acfe_Cantidad]) AS CantidadVisitantes
    FROM [Acti].[tbActividadesXFecha] t1
    GROUP BY [acfe_Fecha]
	order by [acfe_Fecha]
END

