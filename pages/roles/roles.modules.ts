import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { DataTablesModule } from 'angular-datatables';
import { CreateComponent } from './Create/create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';





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
    FormsModule,
    NgSelectModule,
    DataTablesModule
  ]
})
export class RolesModule { }
