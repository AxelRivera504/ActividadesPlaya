import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
  {
    path: '',
    component: EquiposComponent
  }
]

@NgModule({
  declarations: [EquiposComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule

  ]
})
export class EquiposModule { }
