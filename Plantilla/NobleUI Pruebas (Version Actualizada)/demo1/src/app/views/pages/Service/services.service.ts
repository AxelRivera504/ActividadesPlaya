import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { playas } from '../Model/Playas';
import { Equipos } from '../Model/Equipos';
import { Mantenimiento } from '../Model/Mantenimiento';
import { Cliente } from '../Model/Clientes';
import { Encargados } from '../Model/Encargados';
import { Actividades } from '../Model/Actividades';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
    Url1 = "https://localhost:44312/api/Equipos/ListarEquipos"
    Url2 = "https://localhost:44312/api/Actividades/ListarActividades"
    Url5 = "https://localhost:44312/api/Playas/ListarPlayas"
    Url3 = "https://localhost:44312/api/Mantenimientos/ListarMantenimientos"
    Url4 = "https://localhost:44312/api/Clientes/ListarClientes"
    Url6 = "https://localhost:44312/api/Encargados/ListarEncargados"

  getEquipos(){
    return this.http.get<Equipos[]>(this.Url1);
  }

  getPlayas(){
    return this.http.get<playas[]>(this.Url5);
  }
  
  getMantenimientos(){
    return this.http.get<[Mantenimiento]>(this.Url3);
  }

  getCliente(){
    return this.http.get<Cliente[]>(this.Url4);
  }

  getEncargados(){
    return this.http.get<Encargados[]>(this.Url6);
  }

  getActividades(){
    return this.http.get<Actividades[]>(this.Url2);
  }
}
