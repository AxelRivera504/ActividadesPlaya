import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { Mantenimiento } from '../Model/Mantenimiento';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.scss']
})
export class MantenimientosComponent implements OnInit {
  basicModalCode: any;
  Mantenimiento!: Mantenimiento[];
  basicModalCloseResult: string = '';
  mantenimientoValue: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  constructor(private service: ServicesService, private router: Router,private http: HttpClient,private modalService: NgbModal) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  ngOnInit(): void {
    this.submitted = false;
    this.service.getMantenimientos().subscribe(data => {
      console.log(data);
      this.Mantenimiento = data;
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
Editar(i:number){
  console.log(i)
}
  openBasicModal(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  InsertarMantenimiento(e: Event){
    const apiUrl = 'https://localhost:44312/api/Mantenimientos/InsertarMantenimientos';

    e.preventDefault();
    if (!this.mantenimientoValue ) {
      this.submitted = true;
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
      }).fire({
        title: '¡ERROR!, El campo de mantenimiento no puede estar vacio',
        icon: 'error'
      });
      return;
    }

    const requestBody = {
      mant_Descricion: this.mantenimientoValue,
      mant_UsuarioCreador: localStorage.getItem('IdUsuario')
    };

    this.http.post(apiUrl, requestBody).subscribe(
      (response: any) => {
        console.log(response)
        if (response.data.codeStatus == 1) {
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
            this.mantenimientoValue = ''; // Restablecer el valor del campo
            this.submitted = false; // Reiniciar el estado del formulario
            window.location.reload()
          });
        } else {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
            title: '¡ERROR!,¡oh no!, hubo un error al insertar el registro',
            icon: 'error'
          });
        }
      },
      (error: any) => {
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
        }).fire({
          title: '¡ERROR!,¡oh no!, hubo un error al insertar el registro',
          icon: 'error'
        });
        console.error(error);
      }
    );

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

  cancelar() {
    this.mantenimientoValue = ''; // Restablecer el valor del campo
    this.submitted = false; // Reiniciar el estado del formulario
  }

}
