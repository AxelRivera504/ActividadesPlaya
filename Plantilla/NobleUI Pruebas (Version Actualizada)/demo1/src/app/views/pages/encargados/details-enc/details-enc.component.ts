import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encargados } from '../../Model/Encargados';
@Component({
  selector: 'app-details-enc',
  templateUrl: './details-enc.component.html',
  styleUrls: ['./details-enc.component.scss']
})
export class DetailsEncComponent implements OnInit {
  encargados!:Encargados;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const encaArray = localStorage.getItem('encargados');
    if (encaArray) {
      this.encargados = JSON.parse(encaArray);
      console.log(this.encargados)
    }
  }

  Regresar(){
    this.router.navigate(['encargados']);
  }

}


