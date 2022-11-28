import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import Pregunta from '../interfaces/pregunta.interface';

@Injectable({
  providedIn:'root'
})

export class PreguntaService {

  constructor(private firestore: Firestore) { }

  addPregunta8voMATU1(pregunta:Pregunta){
    const preguntaRef = collection(this.firestore,'8voMATU1');
    return addDoc(preguntaRef,pregunta);
  }
  addPregunta8voMATU2(pregunta:Pregunta){
    const preguntaRef = collection(this.firestore,'8voMATU2');
    return addDoc(preguntaRef,pregunta);
  }
  addPregunta8voMATU3(pregunta:Pregunta){
    const preguntaRef = collection(this.firestore,'8voMATU3');
    return addDoc(preguntaRef,pregunta);
  }
  addPregunta8voMATU4(pregunta:Pregunta){
    const preguntaRef = collection(this.firestore,'8voMATU4');
    return addDoc(preguntaRef,pregunta);
  }
}
