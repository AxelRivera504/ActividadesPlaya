import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prueba',
    component: PruebaComponent
  }
]

@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PruebaModule { }
