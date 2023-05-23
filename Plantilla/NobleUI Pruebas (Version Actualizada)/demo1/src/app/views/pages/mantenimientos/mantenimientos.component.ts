import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { Mantenimiento } from '../Model/Mantenimiento';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { MantenimientoEdit } from '../Model/MantenimientosEdit';
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

  
  Mantenimientos : Mantenimiento = new Mantenimiento();
  MantenimientoEdit: MantenimientoEdit = new MantenimientoEdit();
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

  Delete(){
    const mant_Id : number | undefined = isNaN(parseInt(localStorage.getItem("mant_Id") ?? '', 0)) ? undefined: parseInt(localStorage.getItem("mant_Id") ?? '', 0);
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.Mantenimientos.mant_UsuarioModificador = idUsuario;
    }
    if (mant_Id !== undefined) {
      this.Mantenimientos.mant_Id = mant_Id;
    }
    this.service.DeleteMantenimientos(this.Mantenimientos).
    subscribe((data:any)=>{
      console.log(this.Mantenimientos);
      console.log(data)
      if(data.data.codeStatus == 1){
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
          this.submitted = false; // Reiniciar el estado del formulario
          window.location.reload()
        })
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 30000,
          timerProgressBar: true,
          title: '¡ERROR!,¡oh no!, hubo un error al eliminar el registro',
            icon: 'error'
        })
      }
    })
  }


  openBasicModal(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  openBasicModal1(content: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("mant_Id",id.toString())
  }

  openBasicModal2(content: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
    localStorage.setItem("mant_Id",id.toString())
  }

  openBasicModal3(content: TemplateRef<any>,MantenimientoEdit: MantenimientoEdit) {
    this.MantenimientoEdit = MantenimientoEdit;
    console.log(MantenimientoEdit)
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  Detalles(id:number){

    this.service.DetailsMantenimiento(id).subscribe((data:any)=>{
      console.log(data)
      localStorage.setItem("idMant", data[0].mant_Id);
      localStorage.setItem("MantDescripcion", data[0].mant_Descricion);
      localStorage.setItem("UsuaCrea", data[0].mant_UsuarioCreador);
      localStorage.setItem("FechaCrea", data[0].mant_FechaCreacion);
      localStorage.setItem("UsuaMod", data[0].mant_UsuarioModificador);
      localStorage.setItem("FechaMod", data[0].mant_FechaModificacion);
      console.log(localStorage.getItem("MantDescripcion"));
      console.log(localStorage.getItem("FechaCrea"));
      console.log(localStorage.getItem("FechaMod"));
      console.log(localStorage.getItem("UsuaMod"));
      console.log(localStorage.getItem("UsuaCrea"));

      this.router.navigate(['details']);
    })
  }

  Editar(){
    if (!this.MantenimientoEdit.mant_Descricion) {
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

    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.MantenimientoEdit.mant_UsuarioModificador = idUsuario;
    }
    this.service.EditarMantenimientos(this.MantenimientoEdit).
    subscribe((data:any)=>{
      if(data.data.codeStatus == 1){
        console.log(this.MantenimientoEdit);
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Registro Actualizado con exito!',
          icon: 'success'
        }).then(() => {
          this.modalRef?.close(); // Cerrar el modal
          this.submitted = false; // Reiniciar el estado del formulario
          window.location.reload()
        })
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡Error!, ¡oh no!, hubo un problema al actualizar el registro',
          icon: 'error'
        })
      } 
    })
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

  }

  cancelar() {
    this.mantenimientoValue = ''; // Restablecer el valor del campo
    this.submitted = false; // Reiniciar el estado del formulario
  }

}
