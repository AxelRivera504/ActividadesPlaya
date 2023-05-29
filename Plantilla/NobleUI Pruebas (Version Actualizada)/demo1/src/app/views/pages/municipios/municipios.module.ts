import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosComponent } from './municipios.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MunicipiosDetallesComponent } from './municipios-detalles/municipios-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipiosComponent
  }
];

@NgModule({
  declarations: [MunicipiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class MunicipiosModule { }
