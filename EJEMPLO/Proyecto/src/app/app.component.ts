import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';

  constructor(private router:Router) {}



    Listar(){

      this.router.navigate(['listar']);      
    }
   
     
    Nuevo(){

      this.router.navigate(['nuevo']);      
    }
}
