import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-ejercitar8vo-u3',
  templateUrl: './ejercitar8vo-u3.component.html',
  styleUrls: ['./ejercitar8vo-u3.component.scss']
})
export class Ejercitar8voU3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
