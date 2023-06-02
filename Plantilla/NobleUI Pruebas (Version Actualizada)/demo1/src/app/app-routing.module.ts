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
        path: 'createplayitas',
        loadChildren: () => import('./views/pages/listplayitas/create-playitas/create-playitas.module').then(m => m.CreatePlayitasModule)
      },
      {
        path: 'editplayitas',
        loadChildren: () => import('./views/pages/listplayitas/edit-playitas/edit-playitas.module').then(m => m.EditPlayitasModule)
      },
      {
        path: 'detallesplayitas',
        loadChildren: () => import('./views/pages/listplayitas/detallesplayitas/detallesplayitas.module').then(m => m.DetallesplayitasModule)
      },
      {
        path: 'equipos',
        loadChildren: () => import('./views/pages/equipos/equipos.module').then(m => m.EquiposModule)
      },
      {
        path: 'equiposCrear',
        loadChildren: () => import('./views/pages/equipos/equipos-crear/equipos-crear.module').then(m => m.EquiposCrearModule)
      },
      {
        path: 'equiposEditar',
        loadChildren: () => import('./views/pages/equipos/equipos-editar/equipos-editar.module').then(m => m.EquiposEditarModule)
      },
      {
        path: 'equiposDetalles',
        loadChildren: () => import('./views/pages/equipos/equipos-detalles/equipos-detalles.module').then(m => m.EquiposDetallesModule)
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
        path: 'equiposEditar',
        loadChildren: () => import('./views/pages/equipos/equipos-editar/equipos-editar.module').then(m => m.EquiposEditarModule)
      },
      {
        path: 'equiposDetalles',
        loadChildren: () => import('./views/pages/equipos/equipos-detalles/equipos-detalles.module').then(m => m.EquiposDetallesModule)
      },
      {
        path: 'mantenimientos',
        loadChildren: () => import('./views/pages/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./views/pages/mantenimientos/details/details.module').then(m => m.DetailsModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./views/pages/clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'create-clientes',
        loadChildren: () => import('./views/pages/clientes/create-clientes/create-clientes.module').then(m => m.CreateClientesModule)
      },
      {
        path: 'detailscli',
        loadChildren: () => import('./views/pages/clientes/detailscli/detailscli.module').then(m => m.DetailscliModule)
      },
      {
        path: 'editar-clientes',
        loadChildren: () => import('./views/pages/clientes/editar-clientes/editar-clientes.module').then(m => m.EditarClientesModule)
      },
      {
        path: 'encargados',
        loadChildren: () => import('./views/pages/encargados/encargados.module').then(m => m.EncargadosModule)
      },
      {
        path: 'details-enc',
        loadChildren: () => import('./views/pages/encargados/details-enc/details-enc.module').then(m => m.DetailsEncModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('./views/pages/encargados/create/create.module').then(m => m.CreateModule)
      },
      {
        path: 'Create',
        loadChildren: () => import('./views/pages/roles/Create/create.module').then(m => m.CreateModule)
      },  
      {
        path: 'editar-enc',
        loadChildren: () => import('./views/pages/encargados/editar-enc/editar-enc.module').then(m => m.EditarEncModule)
      },
      {
        path: 'actividades',
        loadChildren: () => import('./views/pages/actividades/actividades.module').then(m => m.ActividadesModule)
      },
      {
        path: 'actividadesCrear',
        loadChildren: () => import('./views/pages/actividades/actividades-crear/actividades-crear.module').then(m => m.ActividadesCrearModule)
      },
      {
        path: 'actividadesEditar',
        loadChildren: () => import('./views/pages/actividades/actividades-editar/actividades-editar.module').then(m => m.ActividadesEditarModule)
      },
      {
        path: 'actividadesDetalles',
        loadChildren: () => import('./views/pages/actividades/actividades-detalles/actividades-detalles.module').then(m => m.ActividadesDetallesModule)
      },
      {
        path: 'reservaciones',
        loadChildren: () => import('./views/pages/reservaciones/reservaciones.module').then(m => m.ReservacionesModule)
      },
      {
        path: 'departamentos',
        loadChildren: () => import('./views/pages/departamentos/departamentos.module').then(m => m.DepartamentosModule)
      },
      {
        path: 'departamentosDetalles',
        loadChildren: () => import('./views/pages/departamentos/departamentos-detalles/departamentos-detalles.module').then(m => m.DepartamentosDetallesModule)
      },
      {
        path: 'municipios',
        loadChildren: () => import('./views/pages/municipios/municipios.module').then(m => m.MunicipiosModule)
      },
      {
        path: 'municipiosDetalles',
        loadChildren: () => import('./views/pages/municipios/municipios-detalles/municipios-detalles.module').then(m => m.MunicipiosDetallesModule)
      },
      {
        path: 'estadosciviles',
        loadChildren: () => import('./views/pages/estadosciviles/estadosciviles.module').then(m => m.EstadoscivilesModule)
      },
      {
        path: 'estadoscivilesDetalles',
        loadChildren: () => import('./views/pages/estadosciviles/estadosciviles-detalles/estadosciviles-detalles.module').then(m => m.EstadoscivilesDetallesModule)
      },
      {
        path: 'metodospago',
        loadChildren: () => import('./views/pages/metodospago/metodospago.module').then(m => m.MetodospagoModule)
      },
      {
        path: 'metodospagoDetalles',
        loadChildren: () => import('./views/pages/metodospago/metodospago-detalles/metodospago-detalles.module').then(m => m.MetodospagoDetallesModule)
      },
      {
        path: 'direcciones',
        loadChildren: () => import('./views/pages/direcciones/direcciones.module').then(m => m.DireccionesModule)
      },
      {
        path: 'direccionesDetalles',
        loadChildren: () => import('./views/pages/direcciones/direcciones-detalles/direcciones-detalles.module').then(m => m.DireccionesDetallesModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./views/pages/roles/roles.modules').then(m => m.RolesModule)
      },
      {
        path: 'Create',
        loadChildren: () => import('./views/pages/roles/Create/create.module').then(m => m.CreateModule)
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
        path: 'DetallesRoles',
        loadChildren: () => import('./views/pages/roles/DetailsRoles/roles.details.modeule').then(m => m.RolesDetallesModule)
      },

      {
        path: 'EditarRoles',
        loadChildren: () => import('./views/pages/roles/Edit/roles.Edit.module').then(m => m.RolesEditarModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      {
        path: 'reporte',
        loadChildren: () => import('./views/pages/reporte/reporte.module').then(m => m.ReporteModule)
      },
      {
        path: 'reporteFiltered',
        loadChildren: () => import('./views/pages/reporte/reporte-filtrado/reporte-filtrado.module').then(m => m.ReporteFiltradoModule)
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
