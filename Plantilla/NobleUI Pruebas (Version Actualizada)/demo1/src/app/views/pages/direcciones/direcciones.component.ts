import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { direcciones } from '../Model/direcciones';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { departamentos } from '../Model/departamentos';
import { municipios } from '../Model/municipios';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();
  direcciones!:direcciones[];
  departamento!: departamentos[];
  municipio!: municipios[];
  municipioddl!: municipios[];

  direccionesModel: direcciones = new direcciones();
  departamentoModel: departamentos = new departamentos();
  municipioModel: municipios = new municipios();
  basicModalCloseResult: string = '';
  submitted: boolean = false;
  modalRef: NgbModalRef | undefined;

  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.direccionesModel = new direcciones()
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  openBasicModal1(content: TemplateRef<any>,direcciones: direcciones) {
    this.service.getDepartamentos().subscribe(data => {this.departamento = data;});
    this.service.getMunicipios().subscribe(data => {this.municipioddl = data;});
    this.direccionesModel = { ...direcciones }
    this.municipioModel.muni_Id = direcciones.muni_Id
    setTimeout(() => {
      const municipiosDepartamento = this.municipio.filter(item => item.muni_Id === this.municipioModel.muni_Id);
      this.departamentoModel.dept_Id = municipiosDepartamento[0].dept_Id;
    }, 1);
    this.municipioModel
    this.submitted = false;
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  openBasicModal2(content: TemplateRef<any>,direcciones: direcciones) {
    this.direccionesModel = { ...direcciones }
    this.submitted = false;
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,  
    private config: NgSelectConfig) {
          /*Cosas del select*/
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
     }
  ngOnInit(): void {
    this.service.getDirecciones().subscribe(data => {
      console.log(data);
      this.direcciones = data;
      this.dtTrigger.next(null);

      this.service.getDepartamentos().subscribe(data => {
        console.log(data);
        this.departamento = data;
      });

      this.service.getMunicipios().subscribe(data => {
        console.log(data);
        this.municipio = data;
      });

    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  onDepartamentoChange() {
    this.municipioModel = new municipios()
    if(this.departamentoModel.dept_Id == null){
      this.municipioddl = []
      this.municipioModel = new municipios()
    }
    setTimeout(() => {
      const municipiosDepartamento = this.municipio.filter(item => item.dept_Id === this.departamentoModel.dept_Id);
      console.log(municipiosDepartamento)
      this.municipioddl = municipiosDepartamento
    }, 1);
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  } 

  Guardar(){
  var x = true
  if(this.departamentoModel.dept_Id == undefined || this.departamentoModel.dept_Id == ""){
    x = false
  } 

  if(this.municipioModel.muni_Id == undefined || this.municipioModel.muni_Id == ""){
    x = false
  }

  if(this.direccionesModel.dire_DireccionExacta == undefined || this.direccionesModel.dire_DireccionExacta == ""){
    x = false
  }

  if(x){
    this.direccionesModel.muni_Id = this.municipioModel.muni_Id
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.direccionesModel.dire_UsuarioCreador = idUsuario;
    }
    this.service.createDirecciones(this.direccionesModel)
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
          this.service.getDirecciones().subscribe(data => {
            console.log(data);
            this.direcciones = data
            this.rerender()
          });
        }, 1);
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
    var x = true
    if(this.departamentoModel.dept_Id == undefined || this.departamentoModel.dept_Id == ""){
      x = false
    } 
  
    if(this.municipioModel.muni_Id == undefined || this.municipioModel.muni_Id == ""){
      x = false
    }
  
    if(this.direccionesModel.dire_DireccionExacta == undefined || this.direccionesModel.dire_DireccionExacta == ""){
      x = false
    }

    if(x){
      this.direccionesModel.muni_Id = this.municipioModel.muni_Id
      const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.direccionesModel.dire_UsuarioModificador = idUsuario;
      }

      this.service.updateDirecciones(this.direccionesModel)
      .subscribe((data:any)=>{
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
            this.service.getDirecciones().subscribe(data => {
              console.log(data);
              this.direcciones = data
              this.rerender()
            });
          }, 1);
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
    this.service.deleteDirecciones(this.direccionesModel)
    .subscribe((data:any)=>{
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
        })
        this.modalService.dismissAll()
        setTimeout(() => {
          this.service.getDirecciones().subscribe(data => {
            console.log(data);
            this.direcciones = data
            this.rerender()
          });
        }, 1);
      }else if(data.data.codeStatus == 2){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: '¡El registro esta siendo utilizado!',
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

  Detalles(direccionesModel: direcciones){
    localStorage.setItem('direccion', JSON.stringify(direccionesModel));
    this.router.navigate(["/direccionesDetalles"])
  }

}
