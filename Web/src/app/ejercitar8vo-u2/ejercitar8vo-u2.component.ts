import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-ejercitar8vo-u2',
  templateUrl: './ejercitar8vo-u2.component.html',
  styleUrls: ['./ejercitar8vo-u2.component.scss']
})
export class Ejercitar8voU2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
