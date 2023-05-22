import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListplayitasComponent } from './listplayitas.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
const routes: Routes = [
  {
    path: '',
    component: ListplayitasComponent
  }
]

@NgModule({
  declarations: [ListplayitasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class ListplayitasModule { }
