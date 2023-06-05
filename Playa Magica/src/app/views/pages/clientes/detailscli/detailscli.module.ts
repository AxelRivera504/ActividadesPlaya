import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailscliComponent } from './detailscli.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: DetailscliComponent,
  }
]
@NgModule({
  declarations: [DetailscliComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DetailscliModule { }
