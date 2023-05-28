import { Component, OnInit } from '@angular/core';
import { Equipos } from '../../Model/Equipos';

@Component({
  selector: 'app-equipos-editar',
  templateUrl: './equipos-editar.component.html',
  styleUrls: ['./equipos-editar.component.scss']
})
export class EquiposEditarComponent implements OnInit {
  equipos!: Equipos
  
  constructor() { }

  ngOnInit(): void {
    const getEquipo = localStorage.getItem('equipo');
    if (getEquipo) {
      this.equipos = JSON.parse(getEquipo);
      console.log(getEquipo)
    }
  }

}
