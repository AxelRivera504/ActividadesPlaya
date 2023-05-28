import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetodospagoComponent } from '../metodospago/metodospago.component';
import { DireccionesComponent } from './direcciones.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: DireccionesComponent
  }
];


@NgModule({
  declarations: [DireccionesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class DireccionesModule { }
