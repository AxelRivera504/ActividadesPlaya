import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { DetailscliComponent } from './detailscli/detailscli.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { NgbModule,NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from '../custom-datepicker-i18n';
const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'create-clientes',
    component: CreateClientesComponent
  },
  {
    path: 'detailsclie',
    component: DetailscliComponent
  },
  {
    path: 'editar-clienets',
    component: EditarClientesComponent
  }
]
@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ],
  providers: [
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }, // Proporciona el proveedor CustomDatepickerI18n
  ]
})
export class ClientesModule { }
