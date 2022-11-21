import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-contenido8vo-u2',
  templateUrl: './contenido8vo-u2.component.html',
  styleUrls: ['./contenido8vo-u2.component.scss']
})
export class Contenido8voU2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
