import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-puduebas8vo-u1',
  templateUrl: './puduebas8vo-u1.component.html',
  styleUrls: ['./puduebas8vo-u1.component.scss']
})
export class Puduebas8voU1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
