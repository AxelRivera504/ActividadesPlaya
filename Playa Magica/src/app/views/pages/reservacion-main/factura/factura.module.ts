import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura.component';
const routes: Routes = [
  {
    path: '',
    component: FacturaComponent
  }
];

@NgModule({
  declarations: [FacturaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FacturaModule { }
