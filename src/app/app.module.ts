import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GestionAdquisicionesComponent } from './pages/gestion-adquisiciones/gestion-adquisiciones.component';
import { FilterRequerimientosPipe } from './pipes/filter-requerimientos.pipe';
import { AlmacenamientoHistoricoComponent } from './pages/almacenamiento-historico/almacenamiento-historico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    GestionAdquisicionesComponent,
    FilterRequerimientosPipe,
    AlmacenamientoHistoricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
