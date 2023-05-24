import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetodospagoComponent } from '../metodospago/metodospago.component';
import { DireccionesComponent } from './direcciones.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

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
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class DireccionesModule { }
