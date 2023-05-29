import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosDetallesComponent } from './usuarios-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosDetallesComponent
  }
];

@NgModule({
  declarations: [UsuariosDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsuariosDetallesModule { }
