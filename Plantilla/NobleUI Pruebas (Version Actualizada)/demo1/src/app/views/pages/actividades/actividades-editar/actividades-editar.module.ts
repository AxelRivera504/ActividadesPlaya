import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesEditarComponent } from './actividades-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortablejsModule } from 'ngx-sortablejs';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

const routes: Routes = [
  {
    path: '',
    component: ActividadesEditarComponent
  }
];

@NgModule({
  declarations: [ActividadesEditarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DropzoneModule,
    SortablejsModule.forRoot({
      animation: 150,
      ghostClass: 'bg-light',
    }),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }, // Ngx-dropzone-wrapper
  ]
})
export class ActividadesEditarModule { }
