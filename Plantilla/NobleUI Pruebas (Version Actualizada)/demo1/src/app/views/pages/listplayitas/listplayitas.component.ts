import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { playas } from '../Model/Playas';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listplayitas',
  templateUrl: './listplayitas.component.html',
  styleUrls: ['./listplayitas.component.scss']
})
export class ListplayitasComponent implements OnInit{
  playas!: playas[];

  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlayas().subscribe(data => {
      console.log(data);
      this.playas = data;

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
    this.router.navigate(["/createplayitas"])
  }

  Editar(playas: playas){
    localStorage.setItem('playas', JSON.stringify(playas));
    this.router.navigate(["/editplayitas"])
  }

  Detalles(playas: playas){
    localStorage.setItem('playas', JSON.stringify(playas));
    this.router.navigate(["/detallesplayitas"])
  }
}
