import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionMainComponent } from './reservacion-main.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [
  {
    path: '',
    component: ReservacionMainComponent
  },
  {
    path: 'factura',
    component: FacturaComponent
  }
];

@NgModule({
  declarations: [ReservacionMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservacionMainModule { }
