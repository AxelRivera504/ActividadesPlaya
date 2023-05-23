import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from "simple-datatables";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamentos } from '../Model/departamentos';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  departamentoForm!: FormGroup;
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

  basicModalCloseResult: string = '';


  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  openBasicModal1(content: TemplateRef<any>, departamento: departamentos) {
    // this.departamentoEdit = departamento
    this.departamentoEdit = departamento;
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
    this.service.createDepartamentos(this.departamentoCreate).
    subscribe(data=>{
      console.log(this.departamentoCreate);
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
        this.departamentoCreate.dept_Descripcion = ''; // Restablecer el valor del campo
        this.departamentoCreate.dept_Id = ''; // Restablecer el valor del campo
        this.submitted = false; // Reiniciar el estado del formulario
        window.location.reload()
      })
    })
  }


}
