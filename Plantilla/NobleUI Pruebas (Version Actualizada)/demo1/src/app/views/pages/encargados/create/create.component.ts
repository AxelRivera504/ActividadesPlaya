import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encargados } from '../../Model/Encargados';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  encargados: Encargados = new Encargados()
  submitted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Regresar(){
    this.router.navigate(['encargados']);
  }

}
