import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
  test =500;
  montant : Number = 0;
  MontantConvert! : number;
  constructor() { }

  ngOnInit(): void {
  }
  convertDinarEuro(element : any) {
    this.MontantConvert = element;

  }
}
