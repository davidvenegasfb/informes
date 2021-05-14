import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor( private router: Router ) {  }

  gotomaquinaria(){
    this.router.navigate(['/maquinaria']);
  }

  gotobarredoras(){
    this.router.navigate(['/barredoras']);
  }

}
