import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './departamentos.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: DepartamentosComponent
  }
];

@NgModule({
  declarations: [DepartamentosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DepartamentosModule { }
