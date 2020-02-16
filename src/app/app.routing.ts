import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: "otrodashboard",
    loadChildren: () => import("./otrodashboard/dashboard.module").then(m => m.DashboardModule),
    // canActivate: [AuthGuard]
  },

  {
    path: "modulo/componente/padre",
    loadChildren: () => import("./usuario/usuario.module").then(m => m.UsuarioModule),
    // canActivate: [AuthGuard]
  },




];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
