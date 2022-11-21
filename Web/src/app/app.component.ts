import { Component } from '@angular/core';

import ListaColores from 'src/assets/data/colores.json';
import ListaUnidades from 'src/assets/data/unidades.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Pudufesor';
  colores: any = ListaColores;
  unidades: any = ListaUnidades;
}
