import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosComponent } from './municipios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MunicipiosComponent
  }
];

@NgModule({
  declarations: [MunicipiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MunicipiosModule { }
