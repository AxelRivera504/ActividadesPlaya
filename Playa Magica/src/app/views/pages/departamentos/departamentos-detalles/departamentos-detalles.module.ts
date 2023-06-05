import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosDetallesComponent } from './departamentos-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosDetallesComponent
  }
];

@NgModule({
  declarations: [DepartamentosDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DepartamentosDetallesModule { }
