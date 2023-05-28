import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEncComponent } from './editar-enc.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
const routes: Routes = [
  {
    path: '',
    component: EditarEncComponent,
  }
]

@NgModule({
  declarations: [EditarEncComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot({ validation: true})
  ]
})
export class EditarEncModule { }
