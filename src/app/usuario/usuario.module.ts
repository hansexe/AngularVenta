import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioPadreComponent } from './Padre/usuario-padre.component';

@NgModule({
  declarations: [ UsuarioPadreComponent],
  exports: [
    UsuarioPadreComponent
  ],

  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
