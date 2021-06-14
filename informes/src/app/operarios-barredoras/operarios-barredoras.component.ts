import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

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
    this.guardar();
    this.router.navigate(['/inicio']);
  }

  fileName = "ExcelResultado.xlsx"

  guardar(){
    let element = document.getElementById("body");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Maquinaria");

    XLSX.writeFile(wb, this.fileName);
  }

}
