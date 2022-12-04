import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ListaColores from 'src/assets/data/colores.json';
import { PreguntaService } from '../services/pregunta.service';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.scss']
})
export class FuncionalidadesComponent implements OnInit {

  constructor(private router:Router, private preguntaService: PreguntaService) { }

  ngOnInit(): void {
  }

  toAdd(){
    this.router.navigate(['/agregar-pregunta']);
  }

  verificarRol(){
    
    this.preguntaService.obtenerUsuario()
  }
  colores: any = ListaColores;
}
