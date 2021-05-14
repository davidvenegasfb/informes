import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { OperariosBarredorasComponent } from './operarios-barredoras/operarios-barredoras.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';


const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },{
    path: 'inicio',
    component: InicioComponent
  },{
    path: 'barredoras',
    component: OperariosBarredorasComponent
  },{
    path: 'maquinaria',
    component: MaquinariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
