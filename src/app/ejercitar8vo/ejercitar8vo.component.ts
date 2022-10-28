import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';
import ListaUnidades from 'src/assets/data/unidades.json';

@Component({
  selector: 'app-ejercitar8vo',
  templateUrl: './ejercitar8vo.component.html',
  styleUrls: ['./ejercitar8vo.component.scss']
})
export class Ejercitar8voComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
  unidades: any = ListaUnidades;
}
