import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Equipos } from '../Model/Equipos';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  Equipos!: Equipos[];

  @ViewChild('myTable', { static: false }) table!: ElementRef;
  constructor(private service: ServicesService, private router: Router) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getEquipos().subscribe(data => {
      console.log(data);
      this.Equipos = data;

      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }


  Crear(){
    this.router.navigate(["/equiposCrear"])
  }

  Editar(equipo: Equipos){
    localStorage.setItem('equipo', JSON.stringify(equipo));
    this.router.navigate(["/equiposEditar"])
  }

  Detalles(equipo: Equipos){

  }
}
