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

  getActividades(){
    return this.http.get<Actividades[]>(this.Url + "/Actividades/ListarActividades");
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
}
