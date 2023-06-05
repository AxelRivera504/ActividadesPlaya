import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodospagoComponent } from './metodospago.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

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
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class MetodospagoModule { }
