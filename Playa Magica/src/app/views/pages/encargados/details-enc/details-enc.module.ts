import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsEncComponent } from './details-enc.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailsEncComponent,
  }
]

@NgModule({
  declarations: [DetailsEncComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DetailsEncModule { }
