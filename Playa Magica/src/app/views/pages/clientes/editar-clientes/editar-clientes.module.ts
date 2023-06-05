import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarClientesComponent } from './editar-clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
const routes: Routes = [
  {
    path: '',
    component: EditarClientesComponent,
  }
]
@NgModule({
  declarations: [EditarClientesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    NgSelectModule,
    NgxMaskModule.forRoot({ validation: true})
  ]
})
export class EditarClientesModule { }
