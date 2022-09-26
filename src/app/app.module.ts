import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { PieComponent } from './pie/pie.component';
import { FiltroComponent } from './filtro/filtro.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'',component:FuncionalidadesComponent},
  {path:'ingresar',component:IngresarComponent},
  {path:'registrar',component:RegistrarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FuncionalidadesComponent,
    PieComponent,
    FiltroComponent,
    IngresarComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
