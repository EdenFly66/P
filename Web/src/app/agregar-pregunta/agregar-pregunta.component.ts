import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PreguntaService } from '../services/pregunta.service';
@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.scss']
})
export class AgregarPreguntaComponent {
  formulario: FormGroup;
  pregunta:any;
  respuesta:any;
  unidad:any;
  
  constructor(private preguntaService:PreguntaService,private router:Router) {
    this.formulario = new FormGroup({
      pregunta: new FormControl(),
      respuesta: new FormControl(),
      unidad :new FormControl(),
    })
    }

  async agregarPregunta(){
    await this.preguntaService.addPregunta(this.formulario.value)
    alert('Pregunta agregada con éxito')
  }
}
