import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientosComponent } from './mantenimientos.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimientosComponent
  },
  {
    path: 'details',
    component: DetailsComponent,
  }
]
@NgModule({
  declarations: [MantenimientosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    DataTablesModule
  ]
})
export class MantenimientosModule { }
