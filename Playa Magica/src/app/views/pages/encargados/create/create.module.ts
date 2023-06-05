import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerI18n, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { CustomDatepickerI18n } from '../../custom-datepicker-i18n';
const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  }
]


@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot({ validation: true})
  ],
  providers: [
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }, // Proporciona el proveedor CustomDatepickerI18n
  ]
})
export class CreateModule { }
