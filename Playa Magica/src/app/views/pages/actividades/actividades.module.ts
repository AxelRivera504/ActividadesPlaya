import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades.component';
import { DataTablesModule } from 'angular-datatables';
import { ActividadesCrearComponent } from './actividades-crear/actividades-crear.component';
import { ActividadesEditarComponent } from './actividades-editar/actividades-editar.component';
import { ActividadesDetallesComponent } from './actividades-detalles/actividades-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesComponent
  }
]

@NgModule({
  declarations: [ActividadesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class ActividadesModule { }
