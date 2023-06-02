import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MantenimientoXEquipo } from '../Model/MantenimientoXEquipo';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective
  mantenimientoXEquipo!: MantenimientoXEquipo[]
  mantenimientoXEquipoFiltered!: MantenimientoXEquipo[]
  basicModalCloseResult: string = '';

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(private service: ServicesService, private router: Router, private modalService: NgbModal,calendar: NgbCalendar) 
  {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject<any>();

  ngOnInit(): void {
    this.service.getMantenimientoXEquipo()
    .subscribe((data:any)=>{
      this.mantenimientoXEquipo = data
      this.dtTrigger.next(null);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json',
      }
    };
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(null);
    });
  } 

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  Reporte(){
  const fechaInicio = `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`
  const fechaFin = this.toDate ? `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}` : '';


  if(fechaInicio != "" && fechaFin != ""){
    if(fechaInicio != fechaFin){
      this.service.getMantenimientoXEquipoFiltered(fechaInicio,fechaFin)
      .subscribe((data:any)=>{
        localStorage.setItem('reporteData', JSON.stringify(data));
        this.modalService.dismissAll()
        this.router.navigate(["/reporteFiltered"])
      })
    }else{
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: '¡Las fechas tienen que ser diferentes!',
        icon: 'warning'
      })
    }
  }else{
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: '¡Seleccione las fechas!',
      icon: 'warning'
    })
  }

  }
}
