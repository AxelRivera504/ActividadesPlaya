import { Component, OnInit } from '@angular/core';
import { usuarios } from '../../Model/Usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-detalles',
  templateUrl: './usuarios-detalles.component.html',
  styleUrls: ['./usuarios-detalles.component.scss']
})
export class UsuariosDetallesComponent implements OnInit {

  usuarios!: usuarios
  constructor(private router:Router,) { }

  ngOnInit(): void {
    const getUsuarios = localStorage.getItem('usuario');
    if (getUsuarios) {
      this.usuarios = JSON.parse(getUsuarios);
      console.log(this.usuarios)
    }
  }

  Regresar(){
    this.router.navigate(["/usuarios"])
  }

}