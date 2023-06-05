import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { playas } from '../Model/Playas';
import { ServicesService } from '../Service/services.service';
import { Router } from '@angular/router';
import { DataTable } from 'simple-datatables';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listplayitas',
  templateUrl: './listplayitas.component.html',
  styleUrls: ['./listplayitas.component.scss']
})
export class ListplayitasComponent implements OnInit{
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  playas!: playas[];
  playasModel = new playas()
  @ViewChild('myTable', { static: false }) table!: ElementRef;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();
  basicModalCloseResult: string = '';
  constructor(private service: ServicesService, private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getPlayas().subscribe(data => {
      console.log(data);
      this.playas = data;

      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  openBasicModal2(content: TemplateRef<any>,playa: playas) {
    this.playasModel = playa
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  } 

  Crear(){
    this.router.navigate(["/createplayitas"])
  }

  Editar(playas: playas){
    localStorage.setItem('playas', JSON.stringify(playas));
    this.router.navigate(["/editplayitas"])
  }

  Detalles(playas: playas){
    localStorage.setItem('playas', JSON.stringify(playas));
    this.router.navigate(["/detallesplayitas"])
  }

  Eliminar(){
    this.service.deletePlayas(this.playasModel)
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
             this.service.getPlayas().subscribe(data => {
      this.playas = data;
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
          title: '¡El registro no puede ser eliminado!',
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
}
