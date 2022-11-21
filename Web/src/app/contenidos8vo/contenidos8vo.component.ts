import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';
import ListaUnidades from 'src/assets/data/unidades.json';

@Component({
  selector: 'app-contenidos8vo',
  templateUrl: './contenidos8vo.component.html',
  styleUrls: ['./contenidos8vo.component.scss']
})
export class Contenidos8voComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
  unidades: any = ListaUnidades;
}
