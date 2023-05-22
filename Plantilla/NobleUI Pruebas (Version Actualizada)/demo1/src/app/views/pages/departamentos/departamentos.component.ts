import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from "simple-datatables";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamentos } from '../Model/departamentos';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  departamentoForm!: FormGroup;
  departamento!: departamentos[];

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,) { }

  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  basicModalCloseResult: string = '';
  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
   

  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data => {
      console.log(data);
      this.departamento = data;
      // Inicializar DataTable después de asignar los datos
      this.initializeDataTable();
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
