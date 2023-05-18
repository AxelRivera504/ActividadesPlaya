import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Vehiculo/listar/listar.component';
import { CrearComponent } from './Vehiculo/crear/crear.component';

const routes: Routes = [
  {path: 'index', component: ListarComponent},
  {path: 'create', component: CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
