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
import { EquipoXActividades } from '../Model/EquipoXActividades';
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

  createActividades(actividad: Actividades){
    return this.http.post<Actividades[]>(this.Url + "/Actividades/InsertarActividades",actividad);
  }

  createEquipoXActividades(equipoxactividades: EquipoXActividades){
    return this.http.post<EquipoXActividades[]>(this.Url + "/tbEquipoXActividades/Insert",equipoxactividades);
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

  CreateEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Insert", estadosciviles);
  }

  getEditEstadosCiviles(ID?: number){
    return this.http.post<estadoscivilesEdit[]>(this.Url + "/EstadosCiviles/find", estadosciviles);
  }

  DeleteEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Delete", estadosciviles);
  }

  EditarEstadosCiviles(estadosciviles: estadosciviles){
    return this.http.post<estadosciviles[]>(this.Url + "/EstadosCiviles/Update", estadosciviles);
  }
}
