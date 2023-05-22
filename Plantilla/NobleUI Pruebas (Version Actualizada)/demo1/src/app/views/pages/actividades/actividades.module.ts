import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades.component';
const routes: Routes = [
  {
    path: '',
    component: ActividadesComponent
  }
]
@NgModule({
  declarations: [ActividadesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ActividadesModule { }
