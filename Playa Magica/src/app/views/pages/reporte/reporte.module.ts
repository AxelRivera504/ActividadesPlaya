import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteComponent } from './reporte.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule,NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from '../custom-datepicker-i18n';

const routes: Routes = [
  {
    path: '',
    component: ReporteComponent
  }
]

@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    NgbModule,
  ],
  providers: [
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }, // Proporciona el proveedor CustomDatepickerI18n
  ]
})
export class ReporteModule { }
