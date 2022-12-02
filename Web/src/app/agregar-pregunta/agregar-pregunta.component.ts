import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseErrorService } from '../services/firebase-error.service';
@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.scss']
})
export class AgregarPreguntaComponent {
  formulario: FormGroup;
  pregunta:any;
  respuesta:any;
  
  constructor(private readonly fb: FormBuilder, private afAuth: AngularFireAuth, private router:Router, private firebaseError: FirebaseErrorService) {
    this.formulario = this.fb.group({
      pregunta: [],
      respuesta: [],
      unidad: [],
    })
    }

  agregarPregunta(){
    
  }
}
