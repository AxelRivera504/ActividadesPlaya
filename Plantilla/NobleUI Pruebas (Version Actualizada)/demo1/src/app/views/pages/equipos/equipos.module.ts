import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { EquiposCrearComponent } from './equipos-crear/equipos-crear.component';
import { EquiposEditarComponent } from './equipos-editar/equipos-editar.component';
import { EquiposDetallesComponent } from './equipos-detalles/equipos-detalles.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    DataTablesModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EquiposModule { }
