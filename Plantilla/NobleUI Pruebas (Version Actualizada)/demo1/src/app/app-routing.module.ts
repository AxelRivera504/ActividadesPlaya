import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',  
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'listplayitas',
        loadChildren: () => import('./views/pages/listplayitas/listplayitas.module').then(m => m.ListplayitasModule)
      },
      {
        path: 'equipos',
        loadChildren: () => import('./views/pages/equipos/equipos.module').then(m => m.EquiposModule)
      },
      {
        path: 'mantenimientos',
        loadChildren: () => import('./views/pages/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./views/pages/clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'encargados',
        loadChildren: () => import('./views/pages/encargados/encargados.module').then(m => m.EncargadosModule)
      },
      {
        path: 'Create',
        loadChildren: () => import('./views/pages/roles/Create/create.module').then(m => m.CreateModule)
      },      
      {
        path: 'actividades',
        loadChildren: () => import('./views/pages/actividades/actividades.module').then(m => m.ActividadesModule)
      },
      {
        path: 'departamentos',
        loadChildren: () => import('./views/pages/departamentos/departamentos.module').then(m => m.DepartamentosModule)
      },
      {
        path: 'municipios',
        loadChildren: () => import('./views/pages/municipios/municipios.module').then(m => m.MunicipiosModule)
      },
      {
        path: 'estadosciviles',
        loadChildren: () => import('./views/pages/estadosciviles/estadosciviles.module').then(m => m.EstadoscivilesModule)
      },
      {
        path: 'metodospago',
        loadChildren: () => import('./views/pages/metodospago/metodospago.module').then(m => m.MetodospagoModule)
      },
      {
        path: 'direcciones',
        loadChildren: () => import('./views/pages/direcciones/direcciones.module').then(m => m.DireccionesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./views/pages/usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
     
      {
        path: 'Detalles',        
        loadChildren: () => import('./views/pages/usuarios/detalles/usarios-detalle.module').then(m => m.UsuariosDetallesModule)
      },
 
      {
        path: 'roles',
        loadChildren: () => import('./views/pages/roles/roles.modules').then(m => m.RolesModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module').then(m => m.AdvancedFormElementsModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { 
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
