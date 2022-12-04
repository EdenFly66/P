import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Pregunta from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private firestore:Firestore) { }
  guardarUsuario(email:any,rol:any){
    const obj = Object.assign({
      "Email":email,
      "Rol":rol
    })
    const ref = collection(this.firestore,'USUARIOS');
    return addDoc(ref,obj);
  }
  obtenerUsuario(){
    const docRef = doc(this.firestore, 'USUARIOS');
    const docSnap = getDoc(docRef);
    alert('wena')
    return docSnap;
  }

  addPregunta(pregunta:Pregunta){
    const ref = collection(this.firestore,'PREGUNTAS');
    return addDoc(ref,pregunta);
  }

 /*  getPregunta():Observable<Pregunta[]>{
   const ref = collection(this.firestore,'PREGUNTAS');
    return collectionData(ref, { idField: 'pregunta' }) as unknown as Observable<Pregunta[]>;

  }*/
  getPreguntas(){
    
  }
}
