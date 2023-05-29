import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { metodospago } from '../Model/metodospago';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';
import { data } from 'jquery';

@Component({
  selector: 'app-metodospago',
  templateUrl: './metodospago.component.html',
  styleUrls: ['./metodospago.component.scss']
})
export class MetodospagoComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  metodospago!: metodospago[];
  metodospagoCreate: metodospago = new metodospago()
  metodospagoEdit: metodospago = new metodospago()
  
  basicModalCloseResult: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;
  
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router) { }

     /*Agregue esta funcion que renderiza la tabla otra vez para que la paginacion no se bugee XD*/
     rerender(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next(null);
      });
    } 
    
    openBasicModal(content: TemplateRef<any>) {
      this.submitted = false;
      this.metodospagoCreate = new metodospago()
      this.modalService.open(content, {}).result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result
      }).catch((res) => {});
    }
    
    openBasicModal1(content: TemplateRef<any>, metodopago: metodospago) {
      this.metodospagoEdit =  {...metodopago};
      
      this.modalRef = this.modalService.open(content, {});
      this.modalRef.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
      }).catch((res) => {});
    }

    openBasicModal3(content: TemplateRef<any>, metodopago: metodospago) {
      this.metodospagoEdit =  {...metodopago};
      
      this.modalRef = this.modalService.open(content, {});
      this.modalRef.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
      }).catch((res) => {});
    }

  ngOnInit(): void {
    this.service.getMetodosPago().subscribe(data => {
      console.log(data);
      this.metodospago = data;

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
if(this.metodospagoCreate.mepa_Descripcion != null){
  const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
  if (idUsuario !== undefined) {
    this.metodospagoCreate.mepa_UsuarioCreador = idUsuario;
  }
  this.service.createMetodosPago(this.metodospagoCreate)
  .subscribe((data:any) =>{
    if(data.data.codeStatus == 1){
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
        this.service.getMetodosPago().subscribe(data => {
          this.metodospago = data;
          this.rerender();
        });
      }, 0.5);
    }else if(data.data.codeStatus == 2){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Ese registro ya existe!',
        icon: 'warning'
      })
    }else{
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
  })
}else{
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
}

Editar(){
  if(this.metodospagoEdit.mepa_Descripcion != null && this.metodospagoEdit.mepa_Descripcion != ""){
  const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
  if (idUsuario !== undefined) {
    this.metodospagoEdit.mepa_UsuarioModificador = idUsuario;
  }
  this.service.updateMetodosPago(this.metodospagoEdit)
  .subscribe((data:any) =>{
    if(data.data.codeStatus == 1){
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
        this.service.getMetodosPago().subscribe(data => {
          this.metodospago = data;
          this.rerender();
        });
      }, 0.5);
    }else if(data.data.codeStatus == 2){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Ese registro ya existe!',
        icon: 'warning'
      })
    }else{
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
  })
  }else{
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
}

Eliminar(){
  this.service.deleteMetodosPago(this.metodospagoEdit)
  .subscribe((data:any) => {
    console.log(data)
    if(data.data.codeStatus == 1){
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
        this.service.getMetodosPago().subscribe(data => {
          this.metodospago = data;
          this.rerender();
        });
      }, 0.5);
    }else if(data.data.codeStatus == 2){
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡El registro esta siendo utilizado en otra tabla!',
        icon: 'warning'
      })
    }else{
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
  })
}

Detalles(metodopago: metodospago){
  localStorage.setItem('metodopago', JSON.stringify(metodopago));
  this.router.navigate(["/metodospagoDetalles"])
}

}
