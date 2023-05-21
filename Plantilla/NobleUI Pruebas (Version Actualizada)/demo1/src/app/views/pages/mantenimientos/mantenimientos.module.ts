import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientosComponent } from './mantenimientos.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: MantenimientosComponent
  }
]
@NgModule({
  declarations: [MantenimientosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class MantenimientosModule { }
