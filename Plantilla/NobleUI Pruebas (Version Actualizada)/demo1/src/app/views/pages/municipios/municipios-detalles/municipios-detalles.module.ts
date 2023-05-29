import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MunicipiosComponent } from '../municipios.component';
import { MunicipiosDetallesComponent } from './municipios-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipiosDetallesComponent
  }
];

@NgModule({
  declarations: [MunicipiosDetallesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MunicipiosDetallesModule { }
