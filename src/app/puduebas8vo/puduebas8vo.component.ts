import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';
import ListaUnidades from 'src/assets/data/unidades.json';

@Component({
  selector: 'app-puduebas8vo',
  templateUrl: './puduebas8vo.component.html',
  styleUrls: ['./puduebas8vo.component.scss']
})
export class Puduebas8voComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
  unidades: any = ListaUnidades;
}
