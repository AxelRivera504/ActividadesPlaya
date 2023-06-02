import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FactuList } from '../Model/ListaFactura';
import { ServicesService } from '../Service/services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Factura } from '../Model/Factura';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservacion-main',
  templateUrl: './reservacion-main.component.html',
  styleUrls: ['./reservacion-main.component.scss']
})
export class ReservacionMainComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  factu!: FactuList[];
  FacturaVer: Factura = new Factura();
  constructor(private service: ServicesService,
    private modalService: NgbModal, 
    private router:Router,) { }
    @ViewChild('myTable', { static: false }) table!: ElementRef;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject <any> = new Subject<any>();
    
  ngOnInit(): void {
    this.service.getFacturaIndex().subscribe(data => {
      console.log(data);
      this.factu = data;
      this.dtTrigger.next(null);
    });
    


    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  Factura(id:number){
    this.FacturaVer.fuct_Id = id
    this.service.VerificarEstadoFactura(this.FacturaVer).subscribe((response:any)=>{
      if(response.data.codeStatus === 1){
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: 'Esta reservación no ha sido cancelada \nPuede editar la factura para cancelarla',
          icon: 'error'
        })   
      }else{
        localStorage.setItem('idF',id.toString())
        this.router.navigate(['factura']);
      }
    })
  }

  Edicion(id:number, id2:number){
    this.FacturaVer.fuct_Id = id
    this.service.VerificarEstadoFactura(this.FacturaVer).subscribe((response:any)=>{
      if(response.data.codeStatus === 1){
        localStorage.setItem('idFacturaEdit',id.toString())
        localStorage.setItem('idReservaEdit',id.toString())
        this.router.navigate(['reservacionesEditar']);
       
      }else{
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          title: 'La reservación ya ha sido cancelada',
          icon: 'error'
        })  

      }
    })
  }

  Reservacion(id2:number){
    localStorage.setItem('idR',id2.toString())
    this.router.navigate(['Reservadatos']);
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
    this.router.navigate(['reservacionesCrear']);
  }

}
