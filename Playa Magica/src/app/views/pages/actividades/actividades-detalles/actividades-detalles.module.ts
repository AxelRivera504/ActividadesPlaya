import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesDetallesComponent } from './actividades-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesDetallesComponent
  }
]

@NgModule({
  declarations: [ActividadesDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ActividadesDetallesModule { }
