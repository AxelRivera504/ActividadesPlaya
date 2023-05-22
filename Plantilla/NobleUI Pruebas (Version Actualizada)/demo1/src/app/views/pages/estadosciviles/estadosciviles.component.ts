import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { estadosciviles } from '../Model/estadosciviles';
import { ServicesService } from '../Service/services.service';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { estadoscivilesEdit } from '../Model/EstadosCivilesEdit';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-estadosciviles',
  templateUrl: './estadosciviles.component.html',
  styleUrls: ['./estadosciviles.component.scss']
})
export class EstadoscivilesComponent implements OnInit {
  estadocivil!: estadosciviles[];

  basicModalCode: any;
  basicModalCloseResult: string = '';
  EstadosCiviles: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;
  estadosciviles: estadosciviles = new estadosciviles();

  estadoscivilesEdit : estadoscivilesEdit = new estadoscivilesEdit();

  constructor(private service: ServicesService, private router:Router,private modalService: NgbModal) { }
  @ViewChild('myTable', { static: true }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  ngOnInit(): void {
    this.service.getEstadosCiviles().subscribe(data => {
      console.log(data);
      this.estadocivil = data;
      this.submitted = false;
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

  Guardar(){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    this.service.CreateEstadosCiviles(this.estadosciviles).
    subscribe(data=>{
      console.log(this.estadosciviles);
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Registro Ingresado con exito!',
        icon: 'success'
      }).then(() => {
        this.modalRef?.close(); // Cerrar el modal
        this.estadosciviles.esci_Descripcion = ''; // Restablecer el valor del campo
        this.submitted = false; // Reiniciar el estado del formulario
        window.location.reload()
      })
    })
  }


  openBasicModal(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  openBasicModal1(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
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

  cancelar() {
    this.estadosciviles.esci_Descripcion = ''; // Restablecer el valor del campo
  }
}
