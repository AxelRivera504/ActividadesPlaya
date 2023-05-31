import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { EditPlayitasComponent } from './edit-playitas.component';
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
    component: EditPlayitasComponent
  }
];

@NgModule({
  declarations: [EditPlayitasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }, // Ngx-dropzone-wrapper
  ]
})
export class EditPlayitasModule { }
