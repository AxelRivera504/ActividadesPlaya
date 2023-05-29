import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Equipos } from '../Model/Equipos';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  Equipos!: Equipos[];
  EquiposModel = new Equipos()
  modalRef: NgbModalRef | undefined;
  basicModalCloseResult: string = '';
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  @ViewChild('myTable', { static: false }) table!: ElementRef;

  constructor(private service: ServicesService, private router: Router, private modalService: NgbModal,) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getEquipos().subscribe(data => {
      console.log(data);
      this.Equipos = data;

      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }


  openBasicModal3(content: TemplateRef<any>, equipo: Equipos) {
    this.EquiposModel =  equipo;
    
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
      


  Crear(){
    this.router.navigate(["/equiposCrear"])
  }

  Editar(equipo: Equipos){
    localStorage.setItem('equipo', JSON.stringify(equipo));
    this.router.navigate(["/equiposEditar"])
  }

  Eliminar(){
    this.service.deleteEquipos(this.EquiposModel)
    .subscribe((data:any)=>{
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
            this.service.getEquipos().subscribe(data => {
              console.log(data);
              this.Equipos = data;
              this.rerender()
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

  Detalles(equipo: Equipos){
    localStorage.setItem('equipo', JSON.stringify(equipo));
    this.router.navigate(["/equiposDetalles"])
  }
}
