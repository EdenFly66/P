import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { PieComponent } from './pie/pie.component';
import { FiltroComponent } from './filtro/filtro.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FuncionalidadesComponent,
    PieComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
