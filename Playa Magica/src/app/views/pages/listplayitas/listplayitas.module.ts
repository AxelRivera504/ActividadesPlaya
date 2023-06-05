import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListplayitasComponent } from './listplayitas.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { CreatePlayitasComponent } from './create-playitas/create-playitas.component';
import { EditPlayitasComponent } from './edit-playitas/edit-playitas.component';
import { DetallesplayitasComponent } from './detallesplayitas/detallesplayitas.component';
const routes: Routes = [
  {
    path: '',
    component: ListplayitasComponent
  }
]

@NgModule({
  declarations: [ListplayitasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule
  ]
})
export class ListplayitasModule { }
