import { Component, OnInit } from '@angular/core';
import { estadosciviles } from '../../Model/estadosciviles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadosciviles-detalles',
  templateUrl: './estadosciviles-detalles.component.html',
  styleUrls: ['./estadosciviles-detalles.component.scss']
})
export class EstadoscivilesDetallesComponent implements OnInit {
  estadocivil!: estadosciviles
  constructor(private router:Router,) { }

  ngOnInit(): void {
    const getEstadoCivil = localStorage.getItem('estadocivil');
    if (getEstadoCivil) {
      this.estadocivil = JSON.parse(getEstadoCivil);
      console.log(this.estadocivil)
    }
  }

  Regresar(){
    this.router.navigate(["/estadosciviles"])
  }
  
  }


