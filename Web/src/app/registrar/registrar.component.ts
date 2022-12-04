import ListaColores from 'src/assets/data/colores.json';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseErrorService } from '../services/firebase-error.service';
import { PreguntaService } from '../services/pregunta.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  authState: any = null;
  registrarUsuario: FormGroup;
  username:any;
  email:any;
  rut:any;
  password1: any;
  password2: any;
  
  constructor(private readonly fb: FormBuilder, private afAuth: AngularFireAuth, private router:Router, private firebaseError : FirebaseErrorService, private preguntaService: PreguntaService) {
    this.registrarUsuario = this.fb.group({
      
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password1: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
      password2: [''],
    })
  }
  
    ngOnInit(): void {
    }
  
    equalPass(): boolean {
      if (this.password1 == this.password2) {
        return true;
      } else {
        return false;
      }
    }

    registrar(){
      const email = this.registrarUsuario.value.email;
      const password1 = this.registrarUsuario.value.password1;
      const rol = 'usuario'
      this.afAuth.createUserWithEmailAndPassword(email,password1).then(()=> {
        this.router.navigate(['/verificado']);
        this.verificarCorreo();
        this.preguntaService.guardarUsuario(email,rol);
      }).catch((error)=>{
        alert(this.firebaseError.firebaseError(error.code))
      });
    }

    get isAuthenticated(): boolean {
      return this.authState !== null;
  }
    
    verificarCorreo(){
      this.afAuth.currentUser.then(user=> user?.sendEmailVerification())
    }
    colores: any = ListaColores;
  }
