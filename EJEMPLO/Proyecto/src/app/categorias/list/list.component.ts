import { Component } from '@angular/core';
import { Categorias } from 'src/app/Model/Categorias';

import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   categoria!: Categorias [];

   constructor(private service:ServiceService){ }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getCategoria()
    .subscribe(data=> {
      console.log(data);
      this.categoria = data;
    })
   }
}
