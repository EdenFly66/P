import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';
import ListaUnidades from 'src/assets/data/unidades.json';
@Component({
  selector: 'app-contenido8vo-u3',
  templateUrl: './contenido8vo-u3.component.html',
  styleUrls: ['./contenido8vo-u3.component.scss']
})
export class Contenido8voU3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
  unidades:any = ListaUnidades;
}
