import { Component, OnInit, AfterViewInit, ViewChild, ElementRef,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { estadosciviles } from '../Model/estadosciviles';
import { ServicesService } from '../Service/services.service';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { estadoscivilesEdit } from '../Model/EstadosCivilesEdit';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-estadosciviles',
  templateUrl: './estadosciviles.component.html',
  styleUrls: ['./estadosciviles.component.scss']
})
export class EstadoscivilesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  estadocivil!: estadosciviles[];
  basicModalCode: any;
  basicModalCloseResult: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;
  estadoscivilesModel: estadosciviles = new estadosciviles();

  openBasicModal(content: TemplateRef<any>) {
    this.estadoscivilesModel = new estadosciviles()
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  openBasicModal1(content: TemplateRef<any>,estadocivil: estadosciviles) {
    this.estadoscivilesModel = {...estadocivil}
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  openBasicModal2(content: TemplateRef<any>,estadocivil: estadosciviles) {
    this.estadoscivilesModel = {...estadocivil}
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

       /*Agregue esta funcion que renderiza la tabla otra vez para que la paginacion no se bugee XD*/
       rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next(null);
        });
      } 

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
    if (idUsuario !== undefined) {
      this.estadoscivilesModel.esci_UsuarioCreador = idUsuario;
    }

    if(this.estadoscivilesModel.esci_Descripcion != null ){
      this.service.CreateEstadosCiviles(this.estadoscivilesModel)
      .subscribe((data:any)=>{
        if(data.data.codeStatus == 1){
         this.inserted()
        }else if(data.data.codeStatus == 2){
          this.warning()
        }else{
          this.error()
        }
      })
    }else{
      this.required()
    }
  }

  Editar(){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.estadoscivilesModel.esci_UsuarioModificador = idUsuario;
    }

    if(this.estadoscivilesModel.esci_Descripcion != null ){
      this.service.EditarEstadosCiviles(this.estadoscivilesModel)
      .subscribe((data: any)=>{
        console.log(data)
        if(data.data.codeStatus == 1){
          this.edited()
        }else if(data.data.codeStatus == 2){
          this.warning()
        }else{
          this.error()
        }
      })
    }else{
    this.required()
    }
  }

  Eliminar(){
    this.service.DeleteEstadosCiviles(this.estadoscivilesModel)
    .subscribe((data:any)=>{
      console.log(data)
      if(data.data.codeStatus == 1){
        this.deleted()
      }else if(data.data.codeStatus == 2){
        this.deletedwarning()
      }else{
        this.error()
      }
    })
  }

  Detalles(estadocivil: estadosciviles){
    localStorage.setItem('estadocivil', JSON.stringify(estadocivil));
    this.router.navigate(["/estadoscivilesDetalles"])
  }

  error(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Ha ocurrido un error!',
      icon: 'error'
    })
  }

  warning(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Ese registro ya existe!',
      icon: 'warning'
    })
  }

  inserted(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Registro Ingresado con exito!',
      icon: 'success'
    })
    this.modalService.dismissAll()
    setTimeout(() => {
      this.service.getEstadosCiviles().subscribe(data => {
        this.estadocivil = data;
        this.rerender();
      });
    }, 0.5);
  }

  edited(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Registro editado con exito!',
      icon: 'success'
    })
    this.modalService.dismissAll()
    setTimeout(() => {
      this.service.getEstadosCiviles().subscribe(data => {
        this.estadocivil = data;
        this.rerender();
      });
    }, 0.5);
  }
  
  required(){
    this.submitted = true
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Rellene los campos!',
      icon: 'warning'
    })
  }

  deleted(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Registro eliminado con exito!',
      icon: 'success'
    })
    this.modalService.dismissAll()
    setTimeout(() => {
      this.service.getEstadosCiviles().subscribe(data => {
        this.estadocivil = data;
        this.rerender();
      });
    }, 0.5);
  }

  deletedwarning(){
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡El registro esta siendo utilizado en otra tabla!',
      icon: 'warning'
    })
  }
}
