import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { vehiculos } from '../Model/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = "http://proyectotaller.somee.com/api/Vehiculos"

  getVehiculos(){
    return this.http.get<vehiculos[]>(this.Url);
  }
}
