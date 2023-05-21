import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoscivilesComponent } from './estadosciviles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EstadoscivilesComponent
  }
];


@NgModule({
  declarations: [EstadoscivilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EstadoscivilesModule { }
