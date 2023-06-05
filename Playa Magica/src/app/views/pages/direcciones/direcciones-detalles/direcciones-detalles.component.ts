import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { direcciones } from '../../Model/direcciones';

@Component({
  selector: 'app-direcciones-detalles',
  templateUrl: './direcciones-detalles.component.html',
  styleUrls: ['./direcciones-detalles.component.scss']
})
export class DireccionesDetallesComponent implements OnInit {
direccion!: direcciones

  constructor(private router:Router) {
     }

  ngOnInit(): void {
    const getdireccion = localStorage.getItem('direccion');
    if (getdireccion) {
      this.direccion = JSON.parse(getdireccion);
      console.log(this.direccion)
    }
  }

  Regresar(){
    this.router.navigate(["/direcciones"])
  }

  }
