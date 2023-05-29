import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { metodospago } from '../../Model/metodospago';

@Component({
  selector: 'app-metodospago-detalles',
  templateUrl: './metodospago-detalles.component.html',
  styleUrls: ['./metodospago-detalles.component.scss']
})
export class MetodospagoDetallesComponent implements OnInit {

  metodospago!: metodospago
  constructor(private router:Router,) { }

  ngOnInit(): void {
    const getmetodopago = localStorage.getItem('metodopago');
    if (getmetodopago) {
      this.metodospago = JSON.parse(getmetodopago);
      console.log(this.metodospago)
    }
  }

  Regresar(){
    this.router.navigate(["/metodospago"])
  }
}
