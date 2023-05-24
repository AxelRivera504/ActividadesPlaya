import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';
import { DetailscliComponent } from './detailscli/detailscli.component';
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
  }
]
@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class ClientesModule { }
