import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { roles } from '../Model/roles';
import { ServicesService } from '../Service/services.service';
import { pantallas } from '../Model/pantallas';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: roles[] = [];
  pantallas: pantallas[] = [];
  mostrarTablaMaestra: boolean = false;
  rolSeleccionado: string = '';

  constructor(private service: ServicesService, private router: Router) { }

  @ViewChild(DataTableDirective, { static: false })
  private datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.service.getRoles().subscribe(data => {
      console.log(data);
      this.roles = data;
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  ngAfterViewInit(): void {
    this.initializeDataTable();
  }
  

  
  crear(){
    this.router.navigate(["Create"]); 
  }

  private initializeDataTable(): void {
    setTimeout(() => {
      if (this.datatableElement && this.datatableElement.dtInstance) {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      }
    }, 0);
  }

  mostrarPantallas(roleID: string) {
    this.rolSeleccionado = roleID;
    this.obtenerPantallasPorRol(roleID).subscribe(
      (data) => {
        console.log(data);
        this.pantallas = data;
        this.mostrarTablaMaestra = true;
        this.initializeDataTable(); // Reinicializa el DataTable para mostrar las tablas maestras
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerPantallasPorRol(roleID: string) {
    return this.service.obtenerPantallasPorRol(roleID);
  }
}