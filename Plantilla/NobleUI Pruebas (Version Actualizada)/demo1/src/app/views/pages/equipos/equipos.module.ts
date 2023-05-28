import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { EquiposCrearComponent } from './equipos-crear/equipos-crear.component';
import { EquiposEditarComponent } from './equipos-editar/equipos-editar.component';
import { EquiposDetallesComponent } from './equipos-detalles/equipos-detalles.component';


const routes: Routes = [
  {
    path: '',
    component: EquiposComponent
  }
]

@NgModule({
  declarations: [EquiposComponent, EquiposDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule

  ]
})
export class EquiposModule { }
