import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { direcciones } from '../Model/direcciones';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {
  direcciones!:direcciones[];
  constructor(private service: ServicesService, private router:Router) { }
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  ngOnInit(): void {
    this.service.getDirecciones().subscribe(data => {
      console.log(data);
      this.direcciones = data;

      // Inicializar DataTable después de asignar los datos
      this.initializeDataTable();
    });
  }
  ngAfterViewInit(): void {
    // No es necesario inicializar DataTable aquí
  }

  private initializeDataTable(): void {
    const dataTableOptions = {
      searchable: true, // Habilitar la barra de búsqueda
      paging: true, // Habilitar la paginación
      perPage: 10, // Número de filas por página
      labels:{
        placeholder: "Buscar...",
        info: "Mostrando {start} de {end} de {rows} entradas",
        noRows: "No encuentra resutados",
        perPage: "{select} entradas por pagina",
        noResults: "No hay coincidencias",
      }
    };

    setTimeout(() => {
      const dataTable = new DataTable(this.table.nativeElement, dataTableOptions);
    }, 0);
  }

}