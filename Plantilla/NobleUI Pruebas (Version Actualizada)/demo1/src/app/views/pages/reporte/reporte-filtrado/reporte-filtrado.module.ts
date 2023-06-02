import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReporteFiltradoComponent } from './reporte-filtrado.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
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
    PdfViewerModule
  ]
})
export class ReporteFiltradoModule { }
