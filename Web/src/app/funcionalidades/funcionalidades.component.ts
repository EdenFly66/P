import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ListaColores from 'src/assets/data/colores.json';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.scss']
})
export class FuncionalidadesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toAdd(){
    this.router.navigate(['/agregar-pregunta']);
  }
  colores: any = ListaColores;
}
