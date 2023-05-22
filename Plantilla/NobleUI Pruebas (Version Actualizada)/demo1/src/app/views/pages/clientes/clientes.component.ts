import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../Model/Clientes';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  Cliente!: Cliente[];
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  constructor(private service: ServicesService, private router: Router) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getCliente().subscribe(data => {
      console.log(data);
      this.Cliente = data;
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
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

  }

}
