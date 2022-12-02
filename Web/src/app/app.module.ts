import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { PieComponent } from './pie/pie.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule, Routes } from '@angular/router';
import { Contenidos8voComponent } from './contenidos8vo/contenidos8vo.component';
import { Ejercitar8voComponent } from './ejercitar8vo/ejercitar8vo.component';
import { Puduebas8voComponent } from './puduebas8vo/puduebas8vo.component';
import { Contenido8voU1Component } from './contenido8vo-u1/contenido8vo-u1.component';
import { Contenido8voU2Component } from './contenido8vo-u2/contenido8vo-u2.component';
import { Contenido8voU3Component } from './contenido8vo-u3/contenido8vo-u3.component';
import { Contenido8voU4Component } from './contenido8vo-u4/contenido8vo-u4.component';
import { Ejercitar8voU1Component } from './ejercitar8vo-u1/ejercitar8vo-u1.component';
import { Ejercitar8voU2Component } from './ejercitar8vo-u2/ejercitar8vo-u2.component';
import { Ejercitar8voU3Component } from './ejercitar8vo-u3/ejercitar8vo-u3.component';
import { Ejercitar8voU4Component } from './ejercitar8vo-u4/ejercitar8vo-u4.component';
import { Puduebas8voU1Component } from './puduebas8vo-u1/puduebas8vo-u1.component';
import { Puduebas8voU2Component } from './puduebas8vo-u2/puduebas8vo-u2.component';
import { Puduebas8voU3Component } from './puduebas8vo-u3/puduebas8vo-u3.component';
import { Puduebas8voU4Component } from './puduebas8vo-u4/puduebas8vo-u4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { VerificadoComponent } from './verificado/verificado.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ContrasenaRecuperadaComponent } from './contrasena-recuperada/contrasena-recuperada.component';
import { AgregarPreguntaComponent } from './agregar-pregunta/agregar-pregunta.component';


const appRoutes: Routes = [
  {path:'funcionalidades',component:FuncionalidadesComponent},
  {path:'',component:IngresarComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'contenidos8vo',component:Contenidos8voComponent},
  {path:'ejercitar8vo',component:Ejercitar8voComponent},
  {path:'puduebas8vo',component:Puduebas8voComponent},
  {path:'contenidos8voU1',component:Contenido8voU1Component},
  {path:'contenidos8voU2',component:Contenido8voU2Component},
  {path:'contenidos8voU3',component:Contenido8voU3Component},
  {path:'contenidos8voU4',component:Contenido8voU4Component},
  {path:'ejercitar8voU1',component:Ejercitar8voU1Component},
  {path:'ejercitar8voU2',component:Ejercitar8voU2Component},
  {path:'ejercitar8voU3',component:Ejercitar8voU3Component},
  {path:'ejercitar8voU4',component:Ejercitar8voU4Component},
  {path:'puduebas8voU1',component:Puduebas8voU1Component},
  {path:'puduebas8voU2',component:Puduebas8voU2Component},
  {path:'puduebas8voU3',component:Puduebas8voU3Component},
  {path:'puduebas8voU4',component:Puduebas8voU4Component},
  {path:'recuperar',component:RecuperarComponent},
  {path:'verificado',component:VerificadoComponent},
  {path:'contrasena-recuperada',component:ContrasenaRecuperadaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FuncionalidadesComponent,
    PieComponent,
    IngresarComponent,
    RegistrarComponent,
    Contenidos8voComponent,
    Ejercitar8voComponent,
    Puduebas8voComponent,
    Contenido8voU1Component,
    Contenido8voU2Component,
    Contenido8voU3Component,
    Contenido8voU4Component,
    Ejercitar8voU1Component,
    Ejercitar8voU2Component,
    Ejercitar8voU3Component,
    Ejercitar8voU4Component,
    Puduebas8voU1Component,
    Puduebas8voU2Component,
    Puduebas8voU3Component,
    Puduebas8voU4Component,
    VerificadoComponent,
    RecuperarComponent,
    ContrasenaRecuperadaComponent,
    AgregarPreguntaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
