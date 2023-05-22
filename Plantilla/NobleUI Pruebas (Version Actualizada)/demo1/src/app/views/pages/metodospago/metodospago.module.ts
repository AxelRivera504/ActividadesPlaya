import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodospagoComponent } from './metodospago.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: '',
    component: MetodospagoComponent
  }
];


@NgModule({
  declarations: [MetodospagoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class MetodospagoModule { }
