import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayitasComponent } from './create-playitas.component';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

const routes: Routes = [
  {
    path: '',
    component: CreatePlayitasComponent
  }
]

@NgModule({
  declarations: [CreatePlayitasComponent],
  imports: [
    CommonModule,
    DropzoneModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }, // Ngx-dropzone-wrapper
  ]
})
export class CreatePlayitasModule { }
