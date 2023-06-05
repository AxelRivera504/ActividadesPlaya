import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservacionEditComponent } from './reservacion-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { QuillModule } from 'ngx-quill';
import { ArchwizardModule } from 'angular-archwizard';
import { CodePreviewModule } from 'src/app/views/partials/code-preview/code-preview.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';


const routes: Routes = [
  {
    path: '',
    component: ReservacionEditComponent
  }
];
@NgModule({
  declarations: [ReservacionEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule, 
    CodePreviewModule,
    NgbModule,
    PerfectScrollbarModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot({ validation: true})
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ReservacionEditModule { }
