
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
import { RolesXPantalla } from '../Model/RolesXPantalla';
import { Reservaciones } from '../Model/Reservaciones';
import { ClienteXReservacion } from '../Model/ClienteXReservacion';
import { ActividadesXFecha } from '../Model/ActividadesXFecha';
import { Factura } from '../Model/Factura';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
    Url = "https://localhost:44312/api"
    
  getEquipos(){
    return this.http.get<Equipos[]>(this.Url + "/Equipos/ListarEquipos");
  }

  getPlayas(){
    return this.http.get<playas[]>(this.Url + "/Playas/ListarPlayas");
  }
  
  getMantenimientos(){
    return this.http.get<[Mantenimiento]>(this.Url + "/Mantenimientos/ListarMantenimientos");
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

  getActividades(){
    return this.http.get<Actividades[]>(this.Url + "/Actividades/ListarActividades");
  }

  getDepartamentos(){
    return this.http.get<departamentos[]>(this.Url + "/Departamentos");
  }

  getMunicipios(){
    return this.http.get<municipios[]>(this.Url + "/Municipios");
  }

  getEstadosCiviles(){
    return this.http.get<estadosciviles[]>(this.Url + "/EstadosCiviles");
  }

  getMetodosPago(){
    return this.http.get<metodospago[]>(this.Url + "/MetodosPago");
  }

  getDirecciones(){
    return this.http.get<direcciones[]>(this.Url + "/Direcciones");
  }

  CreateEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Insert", estadosciviles);
  }

  getEditEstadosCiviles(ID?: number){
    return this.http.post<estadoscivilesEdit[]>(this.Url + "/EstadosCiviles/find", estadosciviles);
  }

  EditarEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Insert", estadosciviles);
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

  obtenerPantallasPorRol(roleId: number) {
    return this.http.get<RolesXPantalla[]>(this.Url + "/RolesPorPantalla/PantallasXroles"+roleId);
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
}