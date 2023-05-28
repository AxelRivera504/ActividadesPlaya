import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquiposEditarComponent } from './equipos-editar.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

const routes: Routes = [
  {
    path: '',
    component: EquiposEditarComponent
  }
];


@NgModule({
  declarations: [EquiposEditarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropzoneModule,
  ]
})
export class EquiposEditarModule { }
