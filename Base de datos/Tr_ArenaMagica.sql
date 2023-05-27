go
use DB_ArenaMagica
go
-----------Trigger para actualizar ActividadesXFecha
CREATE OR ALTER TRIGGER tr_ActualizarActividadesXFecha
ON Acti.tbReservaciones
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    -- Verificar si la reservacion ya ha sido insertada previamente
    IF EXISTS (
        SELECT 1
        FROM Acti.ActividadesXFecha axf
        INNER JOIN inserted i ON axf.acti_Id = i.acti_Id
    )
    BEGIN
        -- La reserva ya existe, actualizar acfe_Cantidad restando rese_Cantidad
        UPDATE actixfec
        SET actixfec.acfe_Cantidad = actixfec.acfe_Cantidad - reser.rese_Cantidad
        FROM Acti.ActividadesXFecha actixfec
        INNER JOIN inserted reser ON actixfec.acti_Id = reser.acti_Id;
    END
    ELSE
    BEGIN
        -- La reserva no existe, insertar en ActividadesXFecha
        INSERT INTO Acti.ActividadesXFecha (acti_Id, acfe_Fecha, acfe_Cantidad, acfe_UsuarioCreador)
        SELECT actixfec.acti_Id, actixfec.rese_FechaReservacion, acti.acti_Cupo - actixfec.rese_Cantidad, actixfec.rese_UsuarioCreador
        FROM inserted AS actixfec
        INNER JOIN Acti.tbActividades AS acti ON actixfec.acti_Id = acti.acti_Id;
    END
END
GO


-----------Trigger para actualizar Uso actual del equipo
CREATE OR ALTER TRIGGER tr_RestarEquipoUsoLimite
ON Acti.tbEquipoXActividades
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Acti.tbEquipos
    SET equi_UsoActual = equi_UsoActual + 1
    FROM Acti.tbEquipos equi
    INNER JOIN inserted acXeq ON acXeq.equi_Id = equi.equi_Id;
END
GO

