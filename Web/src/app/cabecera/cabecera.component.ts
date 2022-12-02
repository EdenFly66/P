import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';
import ListaColores from 'src/assets/data/colores.json';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(private auth:Auth, private router:Router) { }

  ngOnInit(): void {
  }
  
  logOut(){
    signOut(this.auth).then(()=>{
      this.router.navigate(['/']);
    });
  }
  colores: any = ListaColores;
}

