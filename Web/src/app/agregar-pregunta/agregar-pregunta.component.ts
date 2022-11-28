import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PreguntaService } from '../services/pregunta.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.scss']
})



export class AgregarPreguntaComponent implements OnInit {
  formulario!: FormGroup;
  pregunta :any;
  respuesta:any;
  constructor(private preguntaService:PreguntaService) {
    this.formulario= new FormGroup({
      pregunta : new FormControl(),
      respuesta : new FormControl(),
    })
   }

  ngOnInit(): void {
  }
  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.preguntaService.addPregunta8voMATU1(this.formulario.value);
    console.log(response);
  }
}
