import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  idMant: string | null = localStorage.getItem("idMant");
  mantDescripcion: string | null = localStorage.getItem("MantDescripcion");
  usuaCrea: string | null = localStorage.getItem("UsuaCrea");
  usuaModifica: string | null = localStorage.getItem("UsuaMod");
  fechaCreacion: string | null = localStorage.getItem("FechaCrea");
  fechaModificacion: string | null = localStorage.getItem("FechaMod");

  constructor(private router: Router) { 
    localStorage.removeItem("idMant");
    localStorage.removeItem("MantDescripcion");
    localStorage.removeItem("UsuaCrea");
    localStorage.removeItem("UsuaMod");
    localStorage.removeItem("FechaCrea");
    localStorage.removeItem("FechaMod");
  }
}
