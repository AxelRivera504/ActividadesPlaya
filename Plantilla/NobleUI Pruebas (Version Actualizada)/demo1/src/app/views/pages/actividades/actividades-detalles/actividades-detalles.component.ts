import { Component, OnInit } from '@angular/core';
import { Actividades } from '../../Model/Actividades';
import { ServicesService } from '../../Service/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades-detalles',
  templateUrl: './actividades-detalles.component.html',
  styleUrls: ['./actividades-detalles.component.scss']
})
export class ActividadesDetallesComponent implements OnInit {
  actividades!: Actividades;

  constructor(private service: ServicesService,private router:Router) { }

  ngOnInit(): void {
    const getActividad = localStorage.getItem('actividad');
    if (getActividad) {
      this.actividades = JSON.parse(getActividad);
      console.log(getActividad)
    }
  }

  Regresar(){
    this.router.navigate(["/actividades"])
  }
}
