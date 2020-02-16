import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioPadreComponent } from './Padre/usuario-padre.component';

const routes: Routes = [
  // modulo/componente/padre
  {
    path: '',
    component: UsuarioPadreComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
