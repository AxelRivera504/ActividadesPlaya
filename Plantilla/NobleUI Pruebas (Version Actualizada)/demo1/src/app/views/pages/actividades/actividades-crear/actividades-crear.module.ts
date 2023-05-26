import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesCrearComponent } from './actividades-crear.component';
import { NgxFileDropModule  } from 'ngx-file-drop';

const routes: Routes = [
  {
    path: '',
    component: ActividadesCrearComponent
  }
];

@NgModule({
  declarations: [ActividadesCrearComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxFileDropModule,
  ]
})
export class ActividadesCrearModule { }
