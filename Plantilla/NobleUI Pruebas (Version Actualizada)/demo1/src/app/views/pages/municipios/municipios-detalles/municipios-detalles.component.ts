import { Component, OnInit } from '@angular/core';
import { municipios } from '../../Model/municipios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipios-detalles',
  templateUrl: './municipios-detalles.component.html',
  styleUrls: ['./municipios-detalles.component.scss']
})
export class MunicipiosDetallesComponent implements OnInit {

  municipio!: municipios
  constructor(private router:Router,) { }

  ngOnInit(): void {
    const getmunicipio = localStorage.getItem('municipio');
    if (getmunicipio) {
      this.municipio = JSON.parse(getmunicipio);
      console.log(this.municipio)
    }
  }

  Regresar(){
    this.router.navigate(["/municipios"])
  }

}
