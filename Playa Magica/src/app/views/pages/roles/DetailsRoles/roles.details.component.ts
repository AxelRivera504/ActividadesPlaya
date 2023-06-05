import { Component, OnInit } from '@angular/core';
import { roles } from '../../Model/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-detalles',
  templateUrl: './roles.details.component.html',
  styleUrls: ['./roles.details.component.scss']
})
export class RolesDetallesComponent implements OnInit {

  roles!: roles
  constructor(private router:Router,) { }

  ngOnInit(): void {
    const getUsuarios = localStorage.getItem('roles');
    if (getUsuarios) {
      this.roles = JSON.parse(getUsuarios);
      console.log(this.roles)
    }
  }

  Regresar(){
    this.router.navigate(["/roles"])
  }

}