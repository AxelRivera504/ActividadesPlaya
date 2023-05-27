import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesCrearComponent } from './actividades-crear.component';
import { NgxFileDropModule  } from 'ngx-file-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// Ngx-dropzone-wrapper
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
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
    component: ActividadesCrearComponent
  }
];

@NgModule({
  declarations: [ActividadesCrearComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxFileDropModule,
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
export class ActividadesCrearModule { }
