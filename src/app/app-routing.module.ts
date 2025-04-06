import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component'; 
import { GestionAdquisicionesComponent } from './pages/gestion-adquisiciones/gestion-adquisiciones.component';
import  { AlmacenamientoHistoricoComponent } from './pages/almacenamiento-historico/almacenamiento-historico.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'adquisiciones', component: GestionAdquisicionesComponent },
  { path: 'almacenamientoHistorico', component: AlmacenamientoHistoricoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
