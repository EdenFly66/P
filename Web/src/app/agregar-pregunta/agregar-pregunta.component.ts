import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
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
  unidad:any;
  
  constructor(private readonly fb: FormBuilder, private afAuth: AngularFireAuth, private router:Router, private firebaseError: FirebaseErrorService, private firestore:Firestore) {
    this.formulario = new FormGroup({
      pregunta: new FormControl(),
      respuesta: new FormControl(),
      unidad :new FormControl(),
    })
    }

  agregarPregunta(){
    const preguntaRef = collection(this.firestore,'PREGUNTAS');
    addDoc(preguntaRef,this.formulario);
    this.router.navigate(['/funcionalidades']);
  }
}
