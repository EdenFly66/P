import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-puduebas8vo-u3',
  templateUrl: './puduebas8vo-u3.component.html',
  styleUrls: ['./puduebas8vo-u3.component.scss']
})
export class Puduebas8voU3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colores: any = ListaColores;
}
