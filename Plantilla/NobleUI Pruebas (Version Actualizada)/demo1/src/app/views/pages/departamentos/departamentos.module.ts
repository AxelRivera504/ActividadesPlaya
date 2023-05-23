import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './departamentos.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosDetallesComponent } from './departamentos-detalles/departamentos-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosComponent
  }
];

@NgModule({
  declarations: [DepartamentosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartamentosModule { }
