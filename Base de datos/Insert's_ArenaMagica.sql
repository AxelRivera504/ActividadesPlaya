USE DB_ArenaMagica

GO


DECLARE @tableA TABLE(
	pass VARBINARY(MAX)
)

DECLARE @tableB TABLE(
	pass VARCHAR(MAX)
)

DECLARE @x VARCHAR(MAX) = 'awsd'
DECLARE @p1 VARBINARY(MAX) = HASHBYTES('SHA2_512', @x)
DECLARE @p2 VARCHAR(MAX) = HASHBYTES('SHA2_512', @x)

INSERT INTO @tableA
VALUES(@p1)

INSERT INTO @tableB
VALUES(@p2)

SELECT * FROM @tableA 
SELECT * FROM @tableA WHERE pass = @p1
SELECT * FROM @tableB 
SELECT * FROM @tableB WHERE pass = @p2

INSERT INTO acce.tbUsuarios(usua_Usuario, usua_Clave, usua_EsAdmin, enca_ID, role_ID,usua_UsuarioCreador)
VALUES ('juan', @p2, 1, 1,2, 1),
	   ('awsd', @p2, 1, 1,1, 1)
       







--************************************************ INSERTS DE LA DB_ArenaMagica *****************************************************************--

--***************************************************** INSERTS tbEstadosCiviles ***************************************************************--

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES(1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES (1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado,esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES (1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES (1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES (1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbEstadosCiviles(esci_Descripcion, esci_Estado, esci_FechaCreacion, esci_UsuarioModificador, esci_FechaModificacion)
VALUES(1,1,GETDATE(),NULL,NULL);
GO

--**************************************************** /INSERTS tbEstadosCiviles ***************************************************************--

--***************************************************** INSERTS tbDepartamentos ****************************************************************--

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('01', 'Atlántida',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('02', 'Colón',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('03', 'Comayagua',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('04', 'Copán',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)   
VALUES ('05', 'Cortés',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('06', 'Choluteca',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)   
VALUES ('07', 'El Paraíso',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('08', 'Francisco Morazán',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('09', 'Gracias a Dios',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('10', 'Intibucá',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('11', 'Islas de la Bahía',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('12', 'La Paz',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)   
VALUES ('13', 'Lempira',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)   
VALUES ('14', 'Ocotepeque',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('15', 'Olancho',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('16', 'Santa Bárbara',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion)  
VALUES ('17', 'Valle',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO [Gral].[tbDepartamentos] (dept_id, dept_Descripcion, dept_Estado, dept_UsuarioCreador, dept_FechaCreacion, dept_UsuarioModificador, dept_FechaModificacion) 
VALUES ('18', 'Yoro',1,1,GETDATE(),NULL,NULL);
GO

--**************************************************** /INSERTS tbDepartamentos ****************************************************************--

--**************************************************** INSERTS tbMunicipios ****************************************************************--

INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0101','La Ceiba','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0102','El Porvenir','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0103','Esparta','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0104','Jutiapa','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0105','La Masica','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0106','San Francisco','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0107','Tela','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0108','Arizona','01',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0201','Trujillo','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0202','Balfate','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0203','Iriona','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0204','Limón','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0205','Sabá','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0206','Santa Fe','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0207','Santa Rosa de Aguán','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0208','Sonaguera','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0209','Tocoa','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0210','Bonito Oriental','02',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0301','Comayagua','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0302','Ajuterique','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0303','El Rosario','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0304','Esquías','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0305','Humuya','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0306','La Libertad','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0307','Lamaní','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0308','La Trinidad','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0309','Lejamaní','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0310','Meámbar','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0311','Minas de Oro','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0312','Ojos de Agua','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0313','San Jerónimo','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0314','San José de Comayagua','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0315','San José del Potrero','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0316','San Luis','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0317','San Sebastián','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0318','Siguatepeque','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0319','Villa de San Antonio','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0320','Las Lajas','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0321','Taulabé','03',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0401','Santa Rosa de Copán','04',1,GETDATE(),NULL,NULL);
 GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0402','Cabañas','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0403','Concepción','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0404','Copán Ruinas','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0405','Corquín','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0406','Cucuyagua','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0407','Dolores','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0408','Dulce Nombre','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0409','El Paraíso','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0410','Florida','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0411','La Jigua','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0412','La Unión','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0413','Nueva Arcadia','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0414','San Agustín','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0415','San ANTONIO','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0416','San Jerónimo','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0417','San José','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0418','San Juan de Opoa','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0419','San Nicolás','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0420','San Pedro','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0421','Santa Rita','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0422','Trinidad de Copán','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0423','Veracruz','04',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0501','San Pedro Sula','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0502','Choloma','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0503','Omoa','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0504','Pimienta','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0505','Potrerillos','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0506','Puerto Cortés','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0507','San Antonio de Cortés','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0508','San Francisco de Yojoa','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0509','San Manuel','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0510','Santa Cruz de Yojoa','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0511','Villanueva','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0512','La Lima','05',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0601','Choluteca','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0602','Apacilagua','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0603','Concepción de María','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0604','Duyure','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0605','El Corpus','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0606','El Triunfo','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0607','Marcovia','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0608','Morolica','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0609','Namasigüe','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0610','Orocuina','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0611','Pespire','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0612','San Antonio de Flores','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0613','San Isidro','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0614','San José','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0615','San Marcos de Colón','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0616','Santa Ana de Yusguare,','06',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0701','Yuscarán','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0702','Alauca','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0703','Danlí','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0704','El Paraíso','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0705','"Güinope','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0706','Jacaleapa','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0707','Liure','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0708','Morocelí','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0709','Oropolí','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0710','Potrerillos','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0711','San Antonio de Flores','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0712','San Lucas','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0713','San Matías','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0714','Soledad','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0715','Teupasenti','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0716','Texiguat','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0717','Vado Ancho','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0718','Yauyupe','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0719','Trojes','07',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0801','Distrito Central (Tegucigalpa y Comayaguela)','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0802','Alubarén','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0803','Cedros','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0804','Curarén','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0805','El Porvenir','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0806','Guaimaca','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0807','La Libertad','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0808','La Venta','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0809','Lepaterique','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0810','Maraita','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0811','Marale','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0812','Nueva Armenia','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0813','Ojojona','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0814','Orica (Francisco Morazan)','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0815','Reitoca','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0816','Sabanagrande','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0817','San Antonio de Oriente','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0818','San Buenaventura','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0819','San Ignacio','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0820','San Juan de Flores o como se le conoce Cantarrana','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0821','San Miguelito','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0822','Santa Ana','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0823','Santa Lucía','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0824','Talanga','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0825','Tatumbla','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0826','Valle de Ángeles','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0827','Villa de San Francisco','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0828','Vallecillo','08',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0901','Puerto Lempira','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0902','Brus Laguna','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0903','Ahuas','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0904','Juan Francisco Bulnes','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0905','Ramón Villeda Morales','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('0906','Wampusirpe','09',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1001','La Esperanza','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1002','Camasca','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1003','Colomoncagua','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1004','Concepción','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1005','Dolores','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1006','Intibucá','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1007','Jesús de Otoro','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1008','Magdalena','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1009','Masaguara','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1010','San Antonio','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1011','San Isidro','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1012','San Juan','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1013','San Marcos de la Sierra','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1014','San Miguel Guancapla','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1015','Santa Lucía','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1016','Yamaranguila','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1017','San Francisco de Opalaca','10',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1101','Roatán','11',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1102','Guanaja','11',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1103','José Santos Guardiola','11',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1104','Utila','11',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1201','La Paz','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1202','Aguanqueterique','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1203','Cabañas','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1204','Cane','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1205','Chinacla','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1206','Guajiquiro','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1207','Lauterique','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1208','Marcala','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1209','Mercedes de Oriente','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1210','Opatoro','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1211','San Antonio del Norte','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1212','San José','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1213','San Juan','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1214','San Pedro de Tutule','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1215','Santa Ana','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1216','Santa Elena','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1217','Santa María','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1218','Santiago de Puringla','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1219','Yarula','12',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1301','Gracias','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1302','Belén','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1303','Candelaria','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1304','Cololaca','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1305','Erandique','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1306','Gualcince','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1307','Guarita','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1308','La Campa','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1309','La Iguala','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1310','LaS Flores','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1311','La Unión','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1312','La Virtud','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1313','Lepaera','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1314','Mapulaca','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1315','Piraera','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1316','San Andrés','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1317','San Francisco','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1318','San Juan Guarita','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1319','San Manuel Colohete','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1320','San Rafael','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1321','San Sebastián','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1322','Santa Cruz','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1323','Talgua','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1324','Tambla','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1325','Tomalá','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1326','Valladolid','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1327','Virginia','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1328','San Marcos de Caiquín','13',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1401','Nueva Ocotepeque','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1402','Belén Gualcho','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1403','Concepción','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1404','Dolores Merendón','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1405','Fraternidad','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1406','La Encarnación','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1407','La Labor','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1408','Lucerna','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1409','Mercedes','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1410','San Fernando','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1411','San Francisco del Valle','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1412','San Jorge','14',1,GETDATE(),NULL,NULL);
 GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1413','San Marcos','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1414','Santa Fe','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1415','Sensenti','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1416','Sinuapa','14',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1501','Juticalpa','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1502','Campamento','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1503','Catacamas','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1504','Concordia','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1505','Dulce Nombre de Culmí','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1506','El Rosario','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1507','Esquipulas del Norte','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1508','Gualaco','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1509','Guarizama','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1510','GUATA','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1511','Guayape','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1512','Jano','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1513','La UNIÓN','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1514','Mangulile','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1515','Manto','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1516','Salamá','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1517','San Esteban','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1518','San Francisco de Becerra','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1519','San Francisco de la Paz','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1520','Santa María del Real','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1521','Silca','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1522','Yocón','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1523','Patuca','15',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1601','Santa Bárbara','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1602','Arada','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1603','Atima','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1604','Azacualpa','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1605','Ceguaca','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1606','San José de las Colinas','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1607','Concepción del Norte','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1608','Concepción del Sur','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1609','Chinda','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1610','El Níspero','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1611','Gualala','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1612','Ilama','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1613','Macuelizo','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1614','Naranjito','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1615','Nuevo Celilac','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1616','Petoa','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1617','Protección','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1618','Quimistán','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1619','San Francisco de Ojuera','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1620','San Luis','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1621','San Marcos','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1622','San Nicolás','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1623','San Pedro Zacapa','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1624','Santa Rita','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1625','San Vicente Centenario','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1626','Trinidad','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1627','LaS Vegas','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1628','Nueva Frontera','16',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1701','Nacaome','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1702','Alianza','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1703','Amapala','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1704','Aramecina','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1705','Caridad','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1706','Goascorán','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1707','Langue','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1708','San Francisco de Coray','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1709','San Lorenzo','17',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1801','Yoro','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1802','Arenal','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1803','El Negrito','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1804','El Progreso','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1805','Jocón','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1806','Morazán','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1807','Olanchito','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1808','Santa Rita','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1809','Sulaco','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1810','Victoria','18',1,GETDATE(),NULL,NULL);
GO
INSERT INTO Gral.tbMunicipios(muni_id,muni_Descripcion,dept_id, muni_Estado, muni_FechaCreacion,muni_UsuarioModificador, muni_FechaModificacion) 
VALUES('1811','Yorito','18',1,GETDATE(),NULL,NULL);
GO

--**************************************************** /INSERTS tbMunicipios ******************************************************************--

--**************************************************** INSERTS tbMetodosPago ******************************************************************--

INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion) 
VALUES ('Tarjeta de crédito', 1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion) 
VALUES ('PayPal', 1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion) 
VALUES ('Transferencia bancaria', 1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion) 
VALUES ('Cheque', 1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbMetodosPago (mepa_Descripcion, mepa_Estado, mepa_UsuarioCreador, mepa_FechaCreacion, mepa_UsuarioModificador, mepa_FechaModificacion) 
VALUES ('Efectivo', 1,1,GETDATE(),NULL,NULL);
GO

--**************************************************** /INSERTS tbMetodosPago ******************************************************************--

--**************************************************** INSERTS tbDirecciones ******************************************************************--

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 1 #123', '0101',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 2 #456', '0202',2,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 3 #789', '0303',3,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 4 #101112', '0404',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 5 #131415', '0505',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('CA 13 Calle 20', '0506',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 210 #2423', '0507',1,1,GETDATE(),NULL,NULL);
GO

--INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
--VALUES ('Avenido 1101', '0110',1,1,GETDATE(),NULL,NULL);
--GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('CA504 #22342', '0406',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle martinez 101', '1001',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('1011 Calle 12', '0903',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 2 #456', '1801',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 40 Avenida 101', '1605',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 4 #101112', '0801',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 5 #131415', '0708',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 1 #123', '1201',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 2 #456', '1303',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 3 #789', '1004',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 4 #101112', '0501',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 5 #131415', '0201',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 1 #123', '1301',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 2 #456', '1102',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 3 #789', '0501',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Avenida 4 #101112', '0601',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Gral.tbDirecciones (dire_DireccionExacta, muni_Id, dire_Estado, dire_UsuarioCreador, dire_FechaCreacion, dire_UsuarioModificador, dire_FechaModificacion)
VALUES ('Calle 5 #131415', '1402',1,1,GETDATE(),NULL,NULL);
GO

--**************************************************** /INSERTS tbDirecciones ******************************************************************--

--**************************************************** INSERTS tbPlayas ******************************************************************--

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Buena Vista',1,'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f3/48/a3/river-mouth-east-end.jpg?w=1200&h=-1&s=1',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de Cienaguita',1,'https://www.honduras.com/wp-content/uploads/2022/03/playa-cieneguita-e1470168554868-z.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de Rio Mar',1,'https://1001beach.com/img/posts/1652/1200/rio_mar-1.webp',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Utila',1,'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRK_PH1atNjb1DvlZYN4vZg0ctk1gexHBQHWTcFh1viCOWc2TMzM1h-VUV5LvZpqCQUYVvSnjDdan5Rfv9Bu7J0JQ',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa del Faro',1,'https://turismo.marbella.es/media/k2/items/cache/f0e0e9a5214b4f9d278913b10aa6423d_L.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de Mareja y Vacacional',1,'https://lh3.googleusercontent.com/p/AF1QipNqW1tF48VDjQfxPtt8UEijVZybxu7W6A27Rg5T=w296-h202-n-k-rw-no-v1',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de la Coca Cola',1,'https://cdn.fazwaz.com/nw/N_MlbcSb1WZzhMKEd1BRHR4dwxA/520x350/sub-place/2060/playa-de-la-coca-cola.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Mar de Plata Omoa',1,'https://lh3.googleusercontent.com/p/AF1QipMQ96rzJ2aF-S0tlzZTn2Q705w5V1lNr7joVXS-=w296-h202-n-k-rw-no-v1',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa La Ensenada',1,'https://i.pinimg.com/originals/b5/70/bf/b570bfc41c1a12c659375035c66f19c7.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Brisas del Caribe Beach',1,'https://media.solwayscuba.com/photos/Hotel/2018/hotel/hotel-brisas-del-caribe-116-1.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de Santo Tomás',1,'https://www.civitatis.com/f/espana/menorca/guia/playa-santo-tomas.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Punta de Palma',1,'https://elfotobus.com/wp-content/uploads/2018/12/car.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('santa maria del mar',1,'https://elfotobus.com/wp-content/uploads/2018/12/car.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Capitania',1,'https://www.guatemala.com/fotos/2021/09/Playa-Capitania-un-destino-de-aguas-cristalinas-y-arena-blanca-en-Livingston-885x500.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Punta Manabique',1,'https://www.guatemala.com/fotos/201712/Punta-de-Manabique-885x500.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Marejada',1,'https://y.cdrst.com/foto/hotel-sf/7a9a0/granderesp/hotel-costa-azul-faro-marejada-general-7c53f76.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa de Puerto Cortes. Honduras',1,'https://www.honduras.com/wp-content/uploads/2022/03/DJI_0119-z-Medium.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('Playa Amatique Bay',1,'https://www.guatemala.com/fotos/201702/Bahia-de-Amatique-885x500.jpg',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('San Juan del Mar',1,'https://www.palmasdelmar.com/v2/wp-content/uploads/2016/11/SJ-Slide-12.png',1,1,GETDATE(),NULL,NULL);
GO

INSERT INTO Acti.tbPlayas(play_Playa, dire_Id,play_ImgUrl, play_Estado, play_UsuarioCreador, play_FechaCreacion, play_UsuarioModificador, play_FechaModificacion)
VALUES('PUEBLO NUEVO , OMOA',1,'https://hondurasaldia.news/wp-content/uploads/2022/10/omoa-y-sus-atractivos-para-disfrutar-con-familia-o-amigos-7.webp',1,1,GETDATE(),NULL,NULL);
GO



/********************************************INSERT tbEncargados***************************************************/


INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Juan', 'Pérez', '1234567890123', 'juan.perez@example.com', '12345678', 'M', 2, '1990-01-01');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('María', 'González', '9876543210987', 'maria.gonzalez@example.com', '87654321', 'F', 1, '1985-05-10');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Pedro', 'López', '4567890123456', 'pedro.lopez@example.com', '54321098', 'M', 5, '1998-07-15');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Ana', 'Martínez', '7890123456789', 'ana.martinez@example.com', '98765432', 'F', 4, '1982-03-20');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Carlos', 'Rodríguez', '3210987654321', 'carlos.rodriguez@example.com', '67890123', 'M', 3, '1995-11-25');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Luisa', 'Hernández', '6543210987654', 'luisa.hernandez@example.com', '01234567', 'F', 2, '1993-09-12');
GO
INSERT INTO Acti.tbEncargados (enca_Nombres, enca_Apellidos, enca_DNI, enca_Email, enca_Telefono, enca_Sexo, esci_id, enca_FechaNac)
VALUES ('Javier', 'Gómez', '2109876543210', 'javier.gomez@example.com', '76543210', 'M', 1, '1997-02-18');
GO

/**************************************INSERT tbClientes****************************************************************/
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Juan', 'Martinez', '1234896890123', 'juan.martinez@example.com', 'M', '1990-01-01');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('María', 'Sanchez', '9876123210987', 'maria.sanchez@example.com', 'F', '1985-05-10');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Pedro', 'Paulin', '4567889623456', 'pedro.paulin@example.com', 'M', '1998-07-15');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Ana', 'Mariel', '7890123123789', 'ana.mariel@example.com', 'F', '1982-03-20');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Carlos', 'Rodiguer', '3214587654321', 'carlos.rodiguer@example.com', 'M', '1995-11-25');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Luisa', 'Sabillon', '6543370987654', 'luisa.sabillon@example.com', 'F', '1993-09-12');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Javier', 'Costum', '2109846543210', 'javier.costum@example.com', 'M', '1997-02-18');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Laura', 'Caliz', '9876543370123', 'laura.caliz@example.com', 'F', '1991-12-05');
GO
INSERT INTO Acti.tbClientes (clie_Nombres, clie_Apellidos, clie_DNI, clie_Email, clie_Sexo, clie_FechaNac)
VALUES ('Hugo', 'Cali', '1234509879743', 'hugo.cali@example.com', 'M', '1996-09-28');
GO
/************************************tb Actividades*************************************/
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('clase de surf', 15, 10000.50, 1);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('remo', 10, 2500.00, 2);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('clase esnórquel', 20, 8000.00, 3);

INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('crucero de observación de delfines', 12, 15000.00, 1);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('bautizo de buceo', 8, 2000.00, 4);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('Voleyball', 10, 1200.50, 5);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('Excursión en Barco', 30, 40000.00, 2);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('Futbol de playa', 6, 8000.00, 3);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('Moto Acuatica', 15, 1000.00, 5);
GO
INSERT INTO Acti.tbActividades (acti_Nombre, acti_Cupo, acti_Precio, play_Id)
VALUES ('Visita Guiada', 20, 5000.50, 4);
GO

/**************************Insert tbReservaciones*********************************/
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (2, 1,'05-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (3, 2,'06-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (1, 3,'07-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (4, 1,'10-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (2, 4,'11-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (5, 5,'10-6-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (2, 2,'05-7-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (3, 3,'10-7-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (1, 5,'02-7-2023');
GO
INSERT INTO Acti.tbReservaciones (rese_Cantidad, acti_Id,rese_FechaReservacion)
VALUES (4, 4,'01-7-2023');
GO


/***************************Insert ClientesXReservaciones**********************/
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (1, 1);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (2, 2);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (3, 3);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (4, 4);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (5, 5);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (1, 2);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (2, 3);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (3, 4);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (4, 5);
GO
INSERT INTO Acti.tbClienteXReservacion (clie_Id, rese_Id)
VALUES (5, 1);
GO




/****************************************Insert tbEquipos************************************/
INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Tanque de Buceo', 2, 10, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Gafas de Snorkel', 5, 20, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Tabla de Surf', 3, 15, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Chaleco Salvavidas', 4, 12, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Pelota VolleyBall', 8, 30, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Pelota de Fútbol Playa', 6, 18, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Gafas de protección', 1, 5, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Casco', 4, 10, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Red de Vóley Playa', 2, 8, 1);

INSERT INTO Acti.tbEquipos (equi_Descripcion, equi_UsoActual, equi_UsoLimite, equi_Estado)
VALUES ('Colchoneta Inflable', 3, 12, 1);





/****************************Insert tbEquipoXActividades************************************/
INSERT INTO Acti.tbEquipoXActividades(acti_Id, equi_Id)
VALUES (1, 1);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (2, 2);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (1, 3);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (4, 4);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (5, 5);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (1, 2);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (2, 3);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (3, 4);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (4, 5);

INSERT INTO Acti.tbEquipoXActividades (acti_Id, equi_Id)
VALUES (5, 1);






/*******************************INSERT Acti.tbEncargadosXActividades***********************************/
GO

INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(1,1)
GO

INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(2,2)

INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(3,3)


INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(4,4)


INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(5,5)


INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(6,6)


INSERT INTO Acti.tbEncargadosXActividades(enca_Id,acti_Id)
VALUES(7,7)


/****************************Insert Acti.tbMantenimiento*********************************/
INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('LLenado de tanques', 1, GETDATE());

INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('Limpieza de utencilios', 2, GETDATE());

INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('Reparacion', 1, GETDATE());

INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('Limaduras', 1, GETDATE());

INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('Barometro', 2, GETDATE());

INSERT INTO Acti.tbMantenimiento (mant_Descricion, mant_UsuarioCreador, mant_FechaCreacion) 
VALUES ('Costura', 1, GETDATE());



/****************************Insertar Acti.tbMantenimientoXEquipo *******************************/
INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion)
VALUES (1, 1, 1, GETDATE());

INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion) 
VALUES (2, 1, 2, GETDATE());

INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion) 
VALUES (3, 4, 1, GETDATE());

INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion) 
VALUES (4, 2, 1, GETDATE());

INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion) 
VALUES (5, 5, 2, GETDATE());

INSERT INTO Acti.tbMantenimientoXEquipo (equi_Id, mant_Id, maeq_UsuarioCreador, maeq_FechaCreacion) 
VALUES (6, 6, 2
, GETDATE());

GO


/***************************Insertar tbFactura****************************/
INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (1, 100.00, 15.00, 115.00, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (2, 200.00, 30.00, 230.00, 2, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (3, 150.00, 22.50, 172.50, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (4, 180.00, 27.00, 207.00, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (5, 250.00, 37.50, 287.50, 2, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (6, 300.00, 45.00, 345.00, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (7, 220.00, 33.00, 253.00, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (8, 190.00, 28.50, 218.50, 2, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (9, 280.00, 42.00, 322.00, 1, GETDATE());

INSERT INTO Acti.tbFactura (rese_Id, fuct_Subtotal, fuct_Isv, fuct_Total, fuct_UsuarioCreador, fuct_FechaCreacion) 
VALUES (10, 150.00, 22.50, 172.50, 1, GETDATE());

/***************************Insertar tbRoles ****************************/
INSERT INTO Acce.tbRoles(role_Descripcion,role_UsuarioCreador)
vALUES ('Digitador',1);
       
INSERT INTO Acce.tbRoles(role_Descripcion,role_UsuarioCreador)
vALUES('Administrador',1);   
GO
	
	-------Insertar Pantallas-----
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES('Cliente',1, GETDATE());
      
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Cliente/reservacion',1, GETDATE());	  
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Reservacion',1, GETDATE());
      	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Mantenimientos',1, GETDATE()); 
	  	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Mantenimientos/Equipos',1, GETDATE());
      
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Playas',1, GETDATE()); 
	  
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Departamentos',1, GETDATE());
	  
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Municipios',1, GETDATE());
      	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Playa',1, GETDATE());
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('MetodosPago',1, GETDATE());
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Direccion',1, GETDATE());
      	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('EstadosCiviles',1, GETDATE());
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Equipo/Actividades',1, GETDATE());
      
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Facturas',1, GETDATE());

INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Equipos',1, GETDATE()); 	  
	  
INSERT INTO [acce].[tbPantallas](pant_Descripcion, pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Usuarios',1, GETDATE());
	  
INSERT INTO [acce].[tbPantallas]([pant_Descripcion], pant_UsuarioCreador, pant_FechaCreacion)
VALUES ('Roles',1, GETDATE());

GO
	  -------Insertar RolesXPantallas-----
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,1,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,2,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,10,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,11,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,15,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (1,17,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,1,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,2,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,3,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,4,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,6,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,7,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,8,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,9,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,10,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,11,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,12,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,13,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,14,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,15,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,16,1);
INSERT INTO [acce].[tbRolesXPantallas](role_ID, pant_ID, roleXpant_UsuarioCreador)
VALUES (2,17,1);



GO
ALTER TABLE gral.tbEstadosCiviles
ADD CONSTRAINT FK_gral_tbEstadosCiviles_esci_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (esci_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_gral_tbEstadosCiviles_esci_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (esci_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)	
GO


ALTER TABLE gral.tbDepartamentos
ADD CONSTRAINT FK_gral_tbDepartamentos_dept_UsuarioCreador_acce_tbUsuarios_usua_ID	FOREIGN KEY (dept_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_gral_tbDepartamentos_dept_UsuarioModificador_acce_tbUsuarios_usua_ID	FOREIGN KEY (dept_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO	


ALTER TABLE gral.tbMunicipios
ADD CONSTRAINT FK_gral_tbMunicipios_muni_UsuarioCreador_acce_tbUsuarios_usua_ID	FOREIGN KEY (muni_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_gral_tbMunicipios_muni_UsuarioModificador_acce_tbUsuarios_usua_ID	FOREIGN KEY (muni_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE gral.tbMetodosPago
ADD CONSTRAINT FK_gral_tbMetodosPago_pago_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (mepa_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_gral_tbMetodosPago_pago_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (mepa_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE acce.tbRoles
ADD CONSTRAINT FK_acce_tbRoles_role_UsuarioCreador_tbUsuarios_usua_ID FOREIGN KEY (role_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acce_tbRoles_role_UsuarioModificador_tbUsuarios_usua_ID FOREIGN KEY (role_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO

ALTER TABLE acce.tbPantallas
ADD CONSTRAINT FK_acce_tbPantallas_pant_UsuarioCreador_tbUsuarios_usua_ID FOREIGN KEY (pant_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acce_tbPantallas_pant_UsuarioModificador_tbUsuarios_usua_ID FOREIGN KEY (pant_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE acce.tbRolesXPantallas
ADD	CONSTRAINT FK_acce_tbRolesXPantallas_roleXpant_UsuarioCreador_tbUsuarios_usua_ID FOREIGN KEY (roleXpant_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acce_tbRolesXPantallas_roleXpant_UsuarioModificador_tbUsuarios_usua_ID FOREIGN KEY (roleXpant_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO



ALTER TABLE acce.tbUsuarios
ADD CONSTRAINT FK_acce_tbUsuarios_cons_tbEmpleados_empl_ID FOREIGN KEY (enca_ID) REFERENCES [Acti].[tbEncargados](enca_ID),
	CONSTRAINT FK_acce_tbUsuarios_usua_UsuarioCreador_tbUsuarios_usua_ID FOREIGN KEY (usua_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acce_tbUsuarios_usua_UsuarioModificador_tbUsuarios_usua_ID FOREIGN KEY (usua_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE [Acti].[tbPlayas]
ADD	
	CONSTRAINT FK_cons_tbPlayas_play_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (play_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_cons_tbPlayas_play_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (play_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE Acti.tbEncargados
ADD	
	CONSTRAINT FK_cons_tbEncargados_enca_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (enca_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_cons_tbEncargados_enca_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (enca_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE Acti.tbMantenimiento
ADD	
	CONSTRAINT FK_acti_tbMantenimiento_mant_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (mant_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbMantenimiento_mant_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (mant_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO

------------------------------------------------------
ALTER TABLE [Acti].[tbEncargados]
ADD	
	CONSTRAINT FK_Acti_tbEncargados_enca_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY (enca_UsuarioCreador) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_Acti_tbEncargados_enca_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY (enca_UsuarioModificador) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE [Acti].[tbEncargadosXActividades]
ADD	
	CONSTRAINT FK_cons_tbEncargadosXActividades_enac_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([enac_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_cons_tbEncargadosXActividades_enac_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([enac_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO


-------------------------------------
ALTER TABLE [Acti].[tbEquipos]
ADD	
	CONSTRAINT FK_Acti_tbEquipos_acti_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([equi_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_Acti_tbEquipos_acti_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([equi_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO



ALTER TABLE [Acti].[tbEquipoXActividades]
ADD	CONSTRAINT FK_acti_tbEquipoXActividades_eqac_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([eqac_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbEquipoXActividades_eqac_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([eqac_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO

---------------------------------------------
ALTER TABLE [Acti].[tbFactura]
ADD	
	CONSTRAINT FK_Acti_tbFactura_fact_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([fuct_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_Acti_tbFactura_fact_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([fuct_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO

---------------------------------------------
ALTER TABLE [Acti].[tbMantenimientoXEquipo]
ADD	
	CONSTRAINT FK_acti_tbMantenimientoXEquipo_fabr_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([maeq_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbMantenimientoXEquipo_fabr_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([maeq_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE [Acti].[tbReservaciones]
ADD	
	CONSTRAINT FK_acti_tbReservaciones_mate_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([rese_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbReservaciones_mate_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([rese_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE [Gral].[tbDirecciones]
ADD	
	CONSTRAINT FK_acti_tbtbDirecciones_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([dire_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbtbDirecciones_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([dire_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO


ALTER TABLE Acti.tbActividades
ADD	
	CONSTRAINT FK_acti_tbActividades_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([acti_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbActividades_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([acti_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO

ALTER TABLE Acti.tbClientes
ADD	
	CONSTRAINT FK_acti_tbClientes_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([clie_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbClientes_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([clie_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO

ALTER TABLE Acti.tbClienteXReservacion
ADD	
	CONSTRAINT FK_acti_tbClienteXReservacion_UsuarioCreador_acce_tbUsuarios_usua_ID FOREIGN KEY ([clre_UsuarioCreador]) REFERENCES acce.tbUsuarios (usua_ID),
	CONSTRAINT FK_acti_tbClienteXReservacion_UsuarioModificador_acce_tbUsuarios_usua_ID FOREIGN KEY ([clre_UsuarioModificador]) REFERENCES acce.tbUsuarios (usua_ID)
GO