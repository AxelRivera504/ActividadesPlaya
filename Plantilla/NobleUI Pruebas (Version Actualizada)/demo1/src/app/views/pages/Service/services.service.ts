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
import { roles } from '../Model/roles';
import { usuarios } from '../Model/Usuarios';
import { pantallas } from '../Model/pantallas';
import { RolesXpantallas } from '../Model/RolesXPantallas';

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

  getEncargados(){
    return this.http.get<Encargados[]>(this.Url + "/Encargados/ListarEncargados");
  }

  getEncargadosddl(){
    return this.http.get<Encargados[]>(this.Url + "/Encargados/ListarEncargadosddl");
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
  getRoles(){
    return this.http.get<roles[]>(this.Url + "/Roles/ListarRoles");
  }
   
  createRoles(Roles : roles){
    return this.http.post<roles[]>(this.Url + "/Roles/Insertar", Roles);
  }

  createRolesXpantallas(rolesXpantallas : RolesXpantallas){
    return this.http.post<RolesXpantallas[]>(this.Url + "/RolesPorPantalla/Insertar", rolesXpantallas);
  }



  obtenerPantallasPorRol(role_ID: string) {
    return this.http.get<pantallas[]>(this.Url + "/RolesPorPantalla/PantallasXroles" + role_ID);
  }

  obtenerPantallas() {
    return this.http.get<pantallas[]>(this.Url + "/Pantallas/Pantallas");
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
     
  deleteUsuarios(id: string) {
    return this.http.delete<usuarios[]>(`${this.Url}/Usuario/Usuario/Delete/${id}`);
  }

}
