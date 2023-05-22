import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetodospagoComponent } from '../metodospago/metodospago.component';
import { DireccionesComponent } from './direcciones.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionesComponent
  }
];


@NgModule({
  declarations: [DireccionesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DireccionesModule { }
