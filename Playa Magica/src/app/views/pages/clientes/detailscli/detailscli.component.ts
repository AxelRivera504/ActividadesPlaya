import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../Model/Clientes';
@Component({
  selector: 'app-detailscli',
  templateUrl: './detailscli.component.html',
  styleUrls: ['./detailscli.component.scss']
})
export class DetailscliComponent implements OnInit {
  clientes!: Cliente;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const cliente = localStorage.getItem('clientes');
    if (cliente) {
      this.clientes = JSON.parse(cliente);
      console.log(this.clientes)
    }
  }

  Regresar(){
    this.router.navigate(['clientes']);
  }

}
