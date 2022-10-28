import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-ejercitar8vo-u1',
  templateUrl: './ejercitar8vo-u1.component.html',
  styleUrls: ['./ejercitar8vo-u1.component.scss']
})
export class Ejercitar8voU1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
