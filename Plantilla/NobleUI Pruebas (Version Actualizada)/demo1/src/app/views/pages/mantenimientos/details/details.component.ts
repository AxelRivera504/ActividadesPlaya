import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mantenimiento } from '../../Model/Mantenimiento';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  Mantenimientos! : Mantenimiento;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    const mantenimiento = localStorage.getItem('mantenimiento');
    if (mantenimiento) {
      this.Mantenimientos = JSON.parse(mantenimiento);
      console.log(this.Mantenimientos)
    }
  }

  Regresar(){
    this.router.navigate(['mantenimientos']);
  }
}