import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}

