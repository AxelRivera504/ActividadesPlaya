import { Component } from '@angular/core';
import { vehiculos } from 'src/app/Model/vehiculos';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
 vehiculo!: vehiculos[];
constructor(private service: ServiceService, private router:Router){}
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.service.getVehiculos()
  .subscribe(data=>(
    console.log(data),
    this.vehiculo = data
  ))
 }
}
