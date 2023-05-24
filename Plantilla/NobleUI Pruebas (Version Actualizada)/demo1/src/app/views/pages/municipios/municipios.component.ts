import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { municipios } from '../Model/municipios';
import { ServicesService } from '../Service/services.service';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { departamentos } from '../Model/departamentos';
import { NgSelectConfig } from '@ng-select/ng-select';
import { data } from 'jquery';
import Swal from 'sweetalert2';

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
  municipioCreate: municipios = new municipios();
  municipioEdit: municipios = new municipios();
  municipioSeleccionado: string;

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

    basicModalCloseResult: string = '';
    submitted: boolean = false;
    modalRef: NgbModalRef | undefined;
    
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  openBasicModal(content: TemplateRef<any>) {
    this.submitted = false;
    this.municipioCreate.muni_Descripcion = ""

    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  openBasicModal1(content: TemplateRef<any>, municipio: municipios) {
    this.municipioEdit = { ...this.municipioEdit };
    console.log(this.municipioEdit)
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

  }

  Guardar(){
  var x = true

  if(this.municipioCreate.dept_Id == undefined || this.municipioCreate.muni_Id){
   x = false
  }

  
  if(this.municipioCreate.muni_Descripcion == undefined || this.municipioCreate.muni_Descripcion == ""){
    x = false
  }

    if(x == true){
      this.service.createMunicipios(this.municipioCreate)
      .subscribe((data: any) =>{
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
        title: '¡Rellene los campos!',
        icon: 'warning'
      })
    }
  }

  Editar(){
  }

  Datalles(){

  }

}
