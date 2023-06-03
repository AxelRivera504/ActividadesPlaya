import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReporteFiltradoComponent } from './reporte-filtrado.component';
const routes: Routes = [
  {
    path: '',
    component: ReporteFiltradoComponent
  }
]

@NgModule({
  declarations: [ReporteFiltradoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ReporteFiltradoModule { }
