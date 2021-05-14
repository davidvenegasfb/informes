import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operarios-barredoras',
  templateUrl: './operarios-barredoras.component.html',
  styleUrls: ['./operarios-barredoras.component.css']
})
export class OperariosBarredorasComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  pasarexcel(){
    this.router.navigate(['/inicio']);
  }

}
