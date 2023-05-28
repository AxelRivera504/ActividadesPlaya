import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquiposCrearComponent } from './equipos-crear.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

const routes: Routes = [
  {
    path: '',
    component: EquiposCrearComponent
  }
];

@NgModule({
  declarations: [EquiposCrearComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropzoneModule,
  ]
})
export class EquiposCrearModule { }
