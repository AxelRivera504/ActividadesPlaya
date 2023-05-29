import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Actividades } from '../Model/Actividades';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  Actividades!: Actividades[];
  ActividadesModel = new Actividades()
  basicModalCloseResult: string = '';
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  constructor(private service: ServicesService, private router: Router, private modalService: NgbModal,) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();


  ngOnInit(): void {
    this.service.getActividades().subscribe(data => {
      this.Actividades = data;
      console.log(this.Actividades)
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  } 

  openBasicModal2(content: TemplateRef<any>,actividad: Actividades) {
    this.ActividadesModel = actividad
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  Nuevo(){
    this.router.navigate(["/actividadesCrear"])
  }

  Editar(actividades: Actividades){
    localStorage.setItem('actividad', JSON.stringify(actividades));
    this.router.navigate(["/actividadesEditar"])
  }

  Eliminar(){
    this.service.deleteActividades(this.ActividadesModel)
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
             this.service.getActividades().subscribe(data => {
      this.Actividades = data;
      console.log(this.Actividades)
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

  Detalles(actividades: Actividades){
    localStorage.setItem('actividad', JSON.stringify(actividades));
    this.router.navigate(["/actividadesDetalles"])
  }

}
