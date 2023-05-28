import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstadoscivilesDetallesComponent } from './estadosciviles-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoscivilesDetallesComponent
  }
];

@NgModule({
  declarations: [EstadoscivilesDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EstadoscivilesDetallesModule { }
