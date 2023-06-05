import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservadatosComponent } from './reservadatos.component';

const routes: Routes = [
  {
    path: '',
    component: ReservadatosComponent
  }
];
@NgModule({
  declarations: [ReservadatosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ReservadatosModule { }
