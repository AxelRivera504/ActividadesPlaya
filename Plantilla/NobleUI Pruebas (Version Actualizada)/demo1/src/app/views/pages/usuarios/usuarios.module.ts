import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  }
];


@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    NgSelectModule

  ]
})
export class UsuariosModule { }
