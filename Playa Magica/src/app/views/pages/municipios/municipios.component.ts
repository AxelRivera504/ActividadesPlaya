import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { municipios } from '../Model/municipios';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { departamentos } from '../Model/departamentos';
import { NgSelectConfig } from '@ng-select/ng-select';
import { data, isEmptyObject } from 'jquery';
import Swal from 'sweetalert2';
import { emptyStringGetter, isNullOrUndefined } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  municipio!: municipios[];
  departamento!: departamentos[];

  departamentoModel: departamentos = new departamentos()
  municipioCreate: municipios = new municipios();
  municipioEdit: municipios = new municipios();
  municipioSeleccionado: string;

  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,  
    private config: NgSelectConfig) { 
    /*Cosas del select*/
    this.config.notFoundText = 'No se encuentran registros';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
    /*/Cosas del select*/
    }

    basicModalCloseResult: string = '';
    submitted: boolean = false;
    nice: boolean = true;
    modalRef: NgbModalRef | undefined;
    
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.nice = true;
    this.municipioCreate = new municipios()
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  openBasicModal1(content: TemplateRef<any>, municipio: municipios) {
    this.municipioEdit = {...municipio} ;
    
    this.modalRef = this.modalService.open(content, {});
    this.modalRef.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result;
    }).catch((res) => {});
  }

  ngOnInit(): void {
    this.service.getMunicipios().subscribe(data => {
      console.log(data);
      this.municipio = data;
      

      this.dtTrigger.next(null);
    });

    this.service.getDepartamentos().subscribe(data => {
      console.log(data);
      this.departamento = data;
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };

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


    onDepartamentoChange() {
      this.municipioCreate.muni_Id = this.municipioCreate.dept_Id
      }

      onIdChange() {
        if(this.municipioCreate.muni_Id.length <=2 ){
          const nombre = this.municipioCreate.muni_Descripcion
          this.municipioCreate = new municipios()
          this.municipioCreate.muni_Descripcion = nombre
        }
        }

        validateInput(event: KeyboardEvent) {
          const inputChar = String.fromCharCode(event.keyCode);
          const pattern = /^[0-9]*$/;
        
          if (!pattern.test(inputChar)) {
            event.preventDefault();
          }
        }
        
        limitLength(event: any) {
          const inputValue = event.target.value;
        
          if (inputValue.length > 4) {
            event.target.value = inputValue.slice(0, 4);
          }
        }
        

  Guardar(){
  var x = true

  if(this.municipioCreate.dept_Id == undefined || this.municipioCreate.dept_Id == ""){
   x = false
  }

  if(this.municipioCreate.muni_Id == undefined || this.municipioCreate.muni_Id == ""){
    x = false
   }
 
  if(this.municipioCreate.muni_Descripcion == undefined || this.municipioCreate.muni_Descripcion == ""){
    x = false
  }

  if(this.municipioCreate.muni_Id){
    if(this.municipioCreate.muni_Id.length != 4){
      this.nice = false
    }else{
      this.nice = true
    }
  }

    if(x == true){
      if(this.nice != false){
        const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
      if (idUsuario !== undefined) {
        this.municipioCreate.muni_UsuarioCreador = idUsuario;
      }
      this.service.createMunicipios(this.municipioCreate)
      .subscribe((data: any) =>{
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
            this.service.getMunicipios().subscribe(data => {
              this.municipio = data;
              this.rerender();
            });
          }, 0.5);
        }else if (data.data.codeStatus == 2){
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
          title: '¡Ingrese un id valido!',
          icon: 'warning'
        })
      }
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

  if(this.municipioEdit.dept_Id == undefined || this.municipioEdit.muni_Id == ""){
   x = false
  }

  
  if(this.municipioEdit.muni_Descripcion == undefined || this.municipioEdit.muni_Descripcion == ""){
    x = false
  }

  if(x){
    const idUsuario : number | undefined = isNaN(parseInt(localStorage.getItem('IdUsuario') ?? '', 0)) ? undefined: parseInt(localStorage.getItem('IdUsuario') ?? '', 0);
    if (idUsuario !== undefined) {
      this.municipioEdit.muni_UsuarioModificador = idUsuario;
    }
    this.service.updateMunicipios(this.municipioEdit)
    .subscribe((data: any) =>{
      console.log(data)
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
          this.service.getMunicipios().subscribe(data => {
            this.municipio = data;
            this.rerender();
          });
        }, 0.5);
      }else if(data.data.codeStatus ==2){
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

  Detalles(municipio: municipios){
    localStorage.setItem('municipio', JSON.stringify(municipio));
    this.router.navigate(["/municipiosDetalles"])
  }

}
