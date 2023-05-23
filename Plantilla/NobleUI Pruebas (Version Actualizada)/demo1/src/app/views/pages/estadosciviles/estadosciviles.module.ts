import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoscivilesComponent } from './estadosciviles.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: EstadoscivilesComponent
  }
];


@NgModule({
  declarations: [EstadoscivilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    DataTablesModule
  ]
})
export class EstadoscivilesModule { }
