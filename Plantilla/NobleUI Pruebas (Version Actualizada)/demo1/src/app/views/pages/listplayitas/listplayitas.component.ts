import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { playas } from '../Model/Playas';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-listplayitas',
  templateUrl: './listplayitas.component.html',
  styleUrls: ['./listplayitas.component.scss']
})
export class ListplayitasComponent implements OnInit, AfterViewInit {
  playas!: playas[];

  @ViewChild('myTable', { static: false }) table!: ElementRef;

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlayas().subscribe(data => {
      console.log(data);
      this.playas = data;

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
      perPage: 10,
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
