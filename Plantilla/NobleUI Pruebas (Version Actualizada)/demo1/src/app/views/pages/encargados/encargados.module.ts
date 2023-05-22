import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncargadosComponent } from './encargados.component';
const routes: Routes = [
  {
    path: '',
    component: EncargadosComponent
  }
]
@NgModule({
  declarations: [EncargadosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EncargadosModule { }
