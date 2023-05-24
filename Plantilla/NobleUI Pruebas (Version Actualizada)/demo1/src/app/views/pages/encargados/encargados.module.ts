import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EncargadosComponent } from './encargados.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './create/create.component';
import { DetailsEncComponent } from './details-enc/details-enc.component';
const routes: Routes = [
  {
    path: '',
    component: EncargadosComponent
  },
  {
    path: 'crear',
    component: CreateComponent,
  },
  {
    path: 'details-enc',
    component: DetailsEncComponent,
  }
]
@NgModule({
  declarations: [EncargadosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class EncargadosModule { }
