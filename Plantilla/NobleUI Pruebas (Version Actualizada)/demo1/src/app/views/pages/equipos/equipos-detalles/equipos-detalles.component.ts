import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Service/services.service';
import { Router } from '@angular/router';
import { Equipos } from '../../Model/Equipos';

@Component({
  selector: 'app-equipos-detalles',
  templateUrl: './equipos-detalles.component.html',
  styleUrls: ['./equipos-detalles.component.scss']
})
export class EquiposDetallesComponent implements OnInit {
  equipos!: Equipos
  constructor(private service: ServicesService,private router:Router) { }

  ngOnInit(): void {
    const getEquipo = localStorage.getItem('equipo');
    if (getEquipo) {
      this.equipos = JSON.parse(getEquipo);
      console.log(getEquipo)
    }
  }


  Regresar(){
    this.router.navigate(["/equipos"])
  }
}
