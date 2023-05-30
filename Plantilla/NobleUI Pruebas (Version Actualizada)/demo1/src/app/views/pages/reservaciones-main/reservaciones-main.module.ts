import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ReservacionesMainComponent } from './reservaciones-main.component';
const routes: Routes = [
  {
    path: '',
    component: ReservacionesMainComponent
  }
];


@NgModule({
  declarations: [ReservacionesMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule
  ]
})
export class ReservacionesMainModule { }
