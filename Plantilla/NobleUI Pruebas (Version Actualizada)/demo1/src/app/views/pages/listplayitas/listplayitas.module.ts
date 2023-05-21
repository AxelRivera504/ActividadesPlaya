import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListplayitasComponent } from './listplayitas.component';
import { RouterModule, Routes } from '@angular/router';
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
  ]
})
export class ListplayitasModule { }
