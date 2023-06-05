import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetallesplayitasComponent } from './detallesplayitas.component';

const routes: Routes = [
  {
    path: '',
    component: DetallesplayitasComponent
  }
]

@NgModule({
  declarations: [DetallesplayitasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DetallesplayitasModule { }
