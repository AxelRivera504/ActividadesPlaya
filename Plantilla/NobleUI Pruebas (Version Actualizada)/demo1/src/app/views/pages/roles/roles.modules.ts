import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './Create/create.component';


const routes: Routes = [
  {
    path: '',
    component: RolesComponent
  },
  {

    path: 'Create',
    component: CreateComponent

  }
];


@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class RolesModule { }
