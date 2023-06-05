
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { playas } from '../Model/Playas';
import { Equipos } from '../Model/Equipos';
import { Mantenimiento } from '../Model/Mantenimiento';
import { Cliente } from '../Model/Clientes';
import { Encargados } from '../Model/Encargados';
import { Actividades } from '../Model/Actividades';
import { departamentos } from '../Model/departamentos';
import { municipios } from '../Model/municipios';
import { metodospago } from '../Model/metodospago';
import { estadosciviles } from '../Model/estadosciviles';
import { estadoscivilesEdit } from '../Model/EstadosCivilesEdit';
import { direcciones } from '../Model/direcciones';
import { MantenimientoEdit } from '../Model/MantenimientoEdit';
import { RolesXpantallas } from '../Model/RolesXPantallas';
import { Reservaciones } from '../Model/Reservaciones';
import { ClienteXReservacion } from '../Model/ClienteXReservacion';
import { ActividadesXFecha } from '../Model/ActividadesXFecha';
import { Factura } from '../Model/Factura';
import { EquipoXActividades } from '../Model/EquipoXActividades';
import { roles } from '../Model/roles';
import { pantallas } from '../Model/pantallas';
import { usuarios } from '../Model/Usuarios';
import { FactuList } from '../Model/ListaFactura';
import { MantenimientoXEquipo } from '../Model/MantenimientoXEquipo';
import { EncargadosXActividad } from '../Model/EncargadosXActividad';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
    Url = "https://localhost:44312/api"
    
    getEquipos(){
      return this.http.get<Equipos[]>(this.Url + "/Equipos/ListarEquipos");
    }
  
    createEquipos(equipos: Equipos){
      return this.http.post<Equipos[]>(this.Url + "/Equipos/InsertarEquipos",equipos);
    }
  
    updateEquipos(equipos: Equipos){
      return this.http.post<Equipos[]>(this.Url + "/Equipos/UpdateEquipos",equipos);
    }
  
    deleteEquipos(equipos: Equipos){
      return this.http.post<Equipos[]>(this.Url + "/Equipos/DeleteEquipos",equipos);
    }

  getPlayas(){
    return this.http.get<playas[]>(this.Url + "/Playas/ListarPlayas");
  }

  createPlayas(playas: playas){
    return this.http.post<playas>(this.Url + "/Playas/InsertarPlayas" ,playas)
  }

  editPlayas(playas: playas){
    return this.http.post<playas>(this.Url + "/Playas/Update" ,playas)
  }

  deletePlayas(playas: playas){
    return this.http.post<playas>(this.Url + "/Playas/Delete" ,playas)
  }
  
  getMantenimientos(){
    return this.http.get<[Mantenimiento]>(this.Url + "/Mantenimientos/ListarMantenimientos");
  }

  equipoMantenimiento(equipos: Equipos){
    return this.http.post<Equipos[]>(this.Url + "/Equipos/Mantenimiento",equipos);
  }

  getMantenimientoXEquipo(){
    return this.http.get<playas[]>(this.Url + "/MantenimientoXEquipo/List");
  }

  getMantenimientoXEquipoFiltered(fechaInicio: string, fechaFin: string){
    return this.http.get<playas[]>(this.Url + `/MantenimientoXEquipo/Reporte?FechaInicio=${fechaInicio}&FechaFin=${fechaFin}`);
  }

  createMantenimientoXEquipo(MantenimientoXEquipo: MantenimientoXEquipo){
    return this.http.post<MantenimientoXEquipo[]>(this.Url + "/MantenimientoXEquipo/Insert",MantenimientoXEquipo)
  }

  getCliente(){
    return this.http.get<Cliente[]>(this.Url + "/Clientes/ListarClientes");
  }

  InsertarClientes(cliente:Cliente){
    return this.http.post<Cliente[]>(this.Url + "/Clientes/InsertarClientes",cliente)
  }

  DeleteClientes(cliente: Cliente){
    return this.http.post<Cliente[]>(this.Url + "/Clientes/DeleteClientes",cliente)
  }

  ActualizarClientes(cliente:Cliente){
    return this.http.post<Cliente[]>(this.Url + "/Clientes/UpdateClientes",cliente)
  }

  getEncargados(){
    return this.http.get<Encargados[]>(this.Url + "/Encargados/ListarEncargados");
  }

  getEncargadosXActividad(id: number){
    return this.http.get<Encargados[]>(this.Url + "/Encargados/EncargadosXActividad?id=" + id);
  }

  createEncargadosXActividad(EncargadosXActividad: EncargadosXActividad){
    return this.http.post<EncargadosXActividad[]>(this.Url + "/EncargadosXActividades/Insert", EncargadosXActividad);
  }

  deleteEncargadosXActividad(EncargadosXActividad: EncargadosXActividad){
    return this.http.post<EncargadosXActividad[]>(this.Url + "/EncargadosXActividades/Delete", EncargadosXActividad);
  }

  getActividades(){
    return this.http.get<Actividades[]>(this.Url + "/Actividades/ListarActividades");
  }

  createActividades(actividad: Actividades){
    return this.http.post<Actividades[]>(this.Url + "/Actividades/InsertarActividades",actividad);
  }

  updateActividades(actividad: Actividades){
    return this.http.post<Actividades[]>(this.Url + "/Actividades/UpdateActividades",actividad);
  }

  deleteActividades(actividad: Actividades){
    return this.http.post<Actividades[]>(this.Url + "/Actividades/DeleteActividades",actividad);
  }

  getEquipoxActividades(id: number){
    return this.http.get<number>(this.Url + "/Equipos/EquipoXActividad?id=" + id)
  }

  createEquipoXActividades(equipoxactividades: EquipoXActividades){
    return this.http.post<EquipoXActividades[]>(this.Url + "/tbEquipoXActividades/Insert",equipoxactividades);
  }

  deleteEquipoXActividades(equipoxactividades: EquipoXActividades){
    return this.http.post<EquipoXActividades[]>(this.Url + "/tbEquipoXActividades/Delete",equipoxactividades);
  }

  getDepartamentos(){
    return this.http.get<departamentos[]>(this.Url + "/Departamentos");
  }

  createDepartamentos(departamento: departamentos){
    return this.http.post<departamentos[]>(this.Url + "/Departamentos/Insert", departamento);
  }
  
  updateDepartamentos(departamento: departamentos){
    return this.http.post<departamentos[]>(this.Url + "/Departamentos/Update", departamento);
  }

  getMunicipios(){
    return this.http.get<municipios[]>(this.Url + "/Municipios");
  }

  createMunicipios(municipio: municipios){
    return this.http.post<municipios[]>(this.Url + "/Municipios/Insert", municipio);
  }

  updateMunicipios(municipio: municipios){
    return this.http.post<municipios[]>(this.Url + "/Municipios/Update", municipio);
  }

  getEstadosCiviles(){
    return this.http.get<estadosciviles[]>(this.Url + "/EstadosCiviles");
  }

  CreateEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Insert", estadosciviles);
  }

  DeleteEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Delete", estadosciviles);
  }

  EditarEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Update", estadosciviles);
  }

  getMetodosPago(){
    return this.http.get<metodospago[]>(this.Url + "/MetodosPago");
  }

  createMetodosPago(metodopago: metodospago){
    return this.http.post<metodospago[]>(this.Url + "/MetodosPago/Insert", metodopago);
  }

  updateMetodosPago(metodopago: metodospago){
    return this.http.post<metodospago[]>(this.Url + "/MetodosPago/Update", metodopago);
  }

  deleteMetodosPago(metodopago: metodospago){
    return this.http.post<metodospago[]>(this.Url + "/MetodosPago/Delete", metodopago);
  }

  getDirecciones(){
    return this.http.get<direcciones[]>(this.Url + "/Direcciones");
  }

  createDirecciones(direcciones: direcciones){
    return this.http.post<direcciones[]>(this.Url + "/Direcciones/Insert", direcciones);
  }

  updateDirecciones(direcciones: direcciones){
    return this.http.post<direcciones[]>(this.Url + "/Direcciones/Update", direcciones);
  }

  deleteDirecciones(direcciones: direcciones){
    return this.http.post<direcciones[]>(this.Url + "/Direcciones/Delete", direcciones);
  }

  DeleteMantenimientos(Mantenimiento: Mantenimiento){
    return this.http.post<Mantenimiento[]>(this.Url + "/Mantenimientos/DeleteMantenimientos",Mantenimiento)
  }

  EditarMantenimientos(MantenimientoEditar:MantenimientoEdit){
    return this.http.post<MantenimientoEdit[]>(this.Url + "/Mantenimientos/UpdateMantenimientos",MantenimientoEditar)
  }

  DetailsMantenimiento(id?:number){
    return this.http.get<Mantenimiento[]>(this.Url + "/Mantenimientos/DetailsMantenimiento"+id)
  }

  InsertarEncargados(encargados:Encargados){
    return this.http.post<Encargados[]>(this.Url + "/Encargados/InsertarEncargados",encargados)
  }

  DeleteEncargados(encargados:Encargados){
    return this.http.post<Encargados[]>(this.Url + "/Encargados/DeleteEncargados",encargados)
  }

  ActualizarEncargados(encargados:Encargados){
    return this.http.post<Encargados[]>(this.Url + "/Encargados/UpdateEncargados",encargados)
  }

  InsertarClientesXReservacion(clReservacion:ClienteXReservacion){
    return this.http.post<ClienteXReservacion[]>(this.Url + "/ClienteXReservacion/InsertarClienteXReservacion",clReservacion)
  }

  InsertarReservaciones(reservaciones:Reservaciones){
    return this.http.post<Reservaciones[]>(this.Url + "/Reservaciones/InsertarReservacion",reservaciones)
  }

   InsertarReservacionesExiste  (reservaciones:Reservaciones){
    return this.http.post<Reservaciones[]>(this.Url + "/Reservaciones/InsertarReservacionExiste",reservaciones)
  }

  VerificarCuposActividad(actividadXFecha: ActividadesXFecha){
    return this.http.post<ActividadesXFecha[]>(this.Url + "/ActividadesXFecha/CantidadActividad",actividadXFecha)
  }

  InsertarFactura(factura:Factura){
    return this.http.post<Factura[]>(this.Url + "/Factura/InsertarFactura",factura)
  }

  InsertarFacturaNoPaga(factura:Factura){
    return this.http.post<Factura[]>(this.Url + "/Factura/InsertarFacturaNoPaga",factura)
  }

  VerificarEstadoFactura(factura:Factura){
    return this.http.post<Factura[]>(this.Url + "/Factura/VerificarFactura",factura)
  }

  DeleteClienteXReservacionByIdRese(ClienteXReservacion:ClienteXReservacion){
    return this.http.post<ClienteXReservacion[]>(this.Url + "/ClienteXReservacion/DeleteClientexReservacion",ClienteXReservacion)
  }

  /* Servicios de reservacion */
  UpdateReservacion(rese: Reservaciones){
    return this.http.post<Reservaciones[]>(this.Url +"/Reservaciones/UpdateRegisterReservacion",rese)
  }

  EditarReservacionExiste(rese: Reservaciones){
    return this.http.post<Reservaciones[]>(this.Url +"/Reservaciones/EditarReservacionExiste",rese)
  }

  EditarReservacionNoExiste(rese: Reservaciones){
    return this.http.post<Reservaciones[]>(this.Url +"/Reservaciones/EditarReservacionNoExiste",rese)
  }

  UpdateFactura(factura:Factura){
    return this.http.post<Factura[]>(this.Url + "/Factura/EditarFactura",factura)
  }

  UpdateFacturaNoPaga(factura:Factura){
    return this.http.post<Factura[]>(this.Url + "/Factura/EditarFacturaNoPaga",factura)
  }

  ListarInfoActividadSelected(rese_Id: number){
    return this.http.get<Actividades[]>(this.Url + "/Actividades/ListarActividades"+rese_Id)
  }

  getRoles(){
    return this.http.get<roles[]>(this.Url + "/Roles/ListarRoles");
  }
   
  deleteRoles(roles : roles ) {
    return this.http.post<roles[]>(this.Url + "/Roles/Delete",roles);
  }

  createRoles(Roles : roles){
    return this.http.post<roles[]>(this.Url + "/Roles/Insertar", Roles);
  }

  createRolesXpantallas(rolesXpantallas : RolesXpantallas){
    return this.http.post<RolesXpantallas[]>(this.Url + "/RolesPorPantalla/Insertar", rolesXpantallas);
  }

  obtenerPantallasPorRol(role_ID: number) {
    return this.http.get<RolesXpantallas[]>(this.Url + "/RolesPorPantalla/PantallasXroles" + role_ID);
  }

  obtenerPantallas() {
    return this.http.get<pantallas[]>(this.Url + "/Pantallas/Pantallas");
  }
  
  updateRoles(Roles : roles){
    return this.http.post<roles[]>(this.Url + "/Roles/Actualizar", Roles);
  }  

  deleteRolesXpantallas(rolesXpantallas : RolesXpantallas){
    return this.http.post<RolesXpantallas[]>(this.Url + "/RolesPorPantalla/Eliminar", rolesXpantallas);
  }

  getUsuarios(){
    return this.http.get<usuarios[]>(this.Url + "/Usuario/Usuarios");
  }
 
  createUsuarios(usuarios: usuarios){
    return this.http.post<usuarios[]>(this.Url + "/Usuario/Insertar", usuarios);
  }
  
  updateUsuarios(usuarios: usuarios){
    return this.http.post<usuarios[]>(this.Url + "/Usuario/Insertar", usuarios);
  }
     
  deleteUsuarios(usuarios : usuarios ) {
    return this.http.post<usuarios[]>(this.Url + "/Usuario/Usuario/Delete",usuarios);
  }

  getEncargadosddl(){
    return this.http.get<Encargados[]>(this.Url + "/Encargados/ListarEncargadosddl");
  }

  getFactura(id: number){
    return this.http.get<FactuList[]>(this.Url + "/Factura/ListarFactura" + id)
  }

  getEncargadosByIdReport2(id: number){
    return this.http.get<Encargados[]>(this.Url + "/EncargadosXActividad/ListarEncargadosById" + id)
  }

  getFacturaIndex(){
    return this.http.get<FactuList[]>(this.Url + "/Factura/ListarFacturaIndex")
  }

  getClientesByIdRese(id: number){
    return this.http.get<Cliente[]>(this.Url + "/ClienteXReservacion/ListClientesByIdRese" + id)
  }

  getDatosReservacion(id: number){
    return this.http.get<Reservaciones[]>(this.Url + "/Reservaciones/ListarDatosReservacionById" + id)
  }

  getVisitantesXFecha(){
    return this.http.get<ActividadesXFecha[]>(this.Url + "/ActividadesXFecha/visitantes");
  }
  
  getVisitantesXFechafilter(actividadesXFecha : ActividadesXFecha){
    return this.http.post<ActividadesXFecha[]>(this.Url + "/ActividadesXFecha/visitantes",actividadesXFecha);
  }

  getClientesXsexo(Actividades : any){
    return this.http.post<ClienteXReservacion[]>(this.Url + "/ClienteXReservacion/ClientesXactividad",Actividades);
  }
}