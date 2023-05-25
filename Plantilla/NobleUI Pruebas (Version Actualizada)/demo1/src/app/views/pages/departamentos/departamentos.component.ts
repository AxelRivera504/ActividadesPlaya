import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamentos } from '../Model/departamentos';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { data } from 'jquery';
import { DataTableDirective } from 'angular-datatables';
import { log } from 'console';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  departamento!: departamentos[];
  departamentoCreate: departamentos = new departamentos();
  departamentoEdit: departamentos = new departamentos();
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;
  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,) { }

  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();
  id: string
  basicModalCloseResult: string = '';


  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.departamentoCreate = new departamentos
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  openBasicModal1(content: TemplateRef<any>, departamentoEdit: departamentos) {
    this.departamentoEdit = { ...departamentoEdit };
    console.log(this.departamentoEdit)
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }
  
  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data => {
      console.log(data);
      this.departamento = data;
      this.dtTrigger.next(null);
    });
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  onIdChange(){
    if(this.departamentoCreate.dept_Id){
      if(this.departamentoCreate.dept_Id.length > 2){
        const id = this.departamentoCreate.dept_Id.substring(0,2)
       setTimeout(() => {
        this.departamentoCreate.dept_Id = id
       },)
      }
    }
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

  Guardar(){
    if (!this.departamentoCreate.dept_Id && !this.departamentoCreate.dept_Descripcion) {
      this.submitted = true;
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
      }).fire({
        title: 'Rellene los campos',
        icon: 'warning'
      });
      return;
    }
    
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.departamentoCreate.dept_UsuarioCreador = idUsuario;
    }
    if(this.departamentoCreate.dept_Descripcion != null && this.departamentoCreate.dept_Descripcion != ""){
      this.service.createDepartamentos(this.departamentoCreate).
      subscribe((data: any) => {
        console.log(data)
        if(data.data.codeStatus == 1){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            title: '¡Registro Ingresado con exito!',
            icon: 'success'
          })
          this.modalService.dismissAll()
          this.service.getDepartamentos().subscribe(data => {
            console.log(data);
            const latestDepartamento = data[data.length - 1]; // Obtener el último registro
            if (latestDepartamento) {
              this.departamento.push(latestDepartamento); // Agregar el último registro al arreglo
            }
            this.rerender()
          });
        }else if(data.data.codeStatus == 2){
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            title: 'Ya existe ese registro',
            icon: 'warning'
          })
        }else{
          this.submitted = true
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            title: 'Ha ocurido un error ',
            icon: 'error'
          })
        }
      })
    }else{
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
    this.submitted = true;
   if(this.departamentoEdit.dept_Descripcion != "" && this.departamentoEdit.dept_Descripcion != null){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.departamentoEdit.dept_UsuarioModificador = idUsuario;
    }
    this.service.updateDepartamentos(this.departamentoEdit)
    .subscribe((data: any) =>{
      if(data.data.codeStatus == 1){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: 'Editado exitosamente',
          icon: 'success'
        })
        /*Esta madre sirva para que no se bugee el datatable*/
        this.modalService.dismissAll()
        setTimeout(() => {
          this.service.getDepartamentos().subscribe(data => {
            this.departamento = data;
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
          title: 'Ya existe ese registro',
          icon: 'warning'
        })
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: 'Ha ocurrido un error con la respuesta de la API',
          icon: 'error'
        })
      }
    })
   }else{
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: 'Rellene los campos',
      icon: 'warning'
    })
   }
  }

  Detalles(departamento: departamentos){
    localStorage.setItem('departamento', JSON.stringify(departamento));
    this.router.navigate(["/departamentosDetalles"])
  }

}
