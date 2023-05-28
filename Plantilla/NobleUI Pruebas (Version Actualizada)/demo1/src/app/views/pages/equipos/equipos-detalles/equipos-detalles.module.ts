import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquiposDetallesComponent } from './equipos-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: EquiposDetallesComponent
  }
]

@NgModule({
  declarations: [EquiposDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EquiposDetallesModule { }
