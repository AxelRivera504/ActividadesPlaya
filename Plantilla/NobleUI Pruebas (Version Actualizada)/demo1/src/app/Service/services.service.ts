import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { departamentos } from '../Models/departamentos';
import { municipios } from '../Models/municipios';
import { estadosciviles } from '../Models/estadosciviles';
import { metodospago } from '../Models/metodospago';
import { direcciones } from '../Models/direcciones';
import { roles } from '../Models/roles';
import { usuarios } from '../Models/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "https://localhost:44312/api"
  constructor(private http:HttpClient) { }

  getDepartamentos(){
    return this.http.get<departamentos[]>(this.url + "/Departamentos");
  }

  getMunicipios(){
    return this.http.get<municipios[]>(this.url + "/Municipios");
  }

  getEstadosCiviles(){
    return this.http.get<estadosciviles[]>(this.url + "/EstadosCiviles");
  }

  getMetodosPago(){
    return this.http.get<metodospago[]>(this.url + "/MetodosPago");
  }

  getDirecciones(){
    return this.http.get<direcciones[]>(this.url + "/Direcciones");
  }
  getRoles(){
    return this.http.get<roles[]>(this.url + "/Roles/ListarRoles");
  }
  
  getUsuarios(){
    return this.http.get<usuarios[]>(this.url + "/Usuario/ListarUsuarios");
  }


}
