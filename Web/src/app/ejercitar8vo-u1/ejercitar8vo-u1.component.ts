import { Component, OnInit } from '@angular/core';
import ListaColores from 'src/assets/data/colores.json';
import Pregunta from '../interfaces/pregunta.interface';
import { PreguntaService } from '../services/pregunta.service';

@Component({
  selector: 'app-ejercitar8vo-u1',
  templateUrl: './ejercitar8vo-u1.component.html',
  styleUrls: ['./ejercitar8vo-u1.component.scss']
})
export class Ejercitar8voU1Component implements OnInit {
  
  question!: Pregunta[];
  pregunta!:string;
  respuesta!:string;
  unidad!:string;
  constructor(private preguntaService:PreguntaService) { 
  }

  ngOnInit(): void {
    this.preguntaService.getPreguntas();
  }
  colores: any = ListaColores;
}
