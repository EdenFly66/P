import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import Pregunta from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private firestore:Firestore) { }

  addPregunta(pregunta:Pregunta){
    const ref = collection(this.firestore,'PREGUNTAS');
    return addDoc(ref,pregunta);
  }
}
