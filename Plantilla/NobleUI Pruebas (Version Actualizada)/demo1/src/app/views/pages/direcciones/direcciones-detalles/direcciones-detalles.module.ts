import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DireccionesDetallesComponent } from './direcciones-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionesDetallesComponent
  }
];

@NgModule({
  declarations: [DireccionesDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DireccionesDetallesModule { }
