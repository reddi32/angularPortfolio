import { Component, OnInit } from '@angular/core';
import { Formazione } from '../model/formazione';

@Component({
  selector: 'app-formazione',
  templateUrl: './formazione.component.html',
  styleUrls: ['./formazione.component.css']
})
export class FormazioneComponent implements OnInit {

  //array di formazione
  listaFormazione: Formazione[] = [];
  constructor() {
    this.listaFormazione.push (
      new Formazione ('portfolioImage.jpg', 'Networking Basics')
    );
    this.listaFormazione.push( 
      new Formazione ('portfolioImage.jpg', 'Cyber Security Essential')
    );
    this.listaFormazione.push (
      new Formazione ('portfolioImage.jpg', 'Introducing Cyber Security')
    );
    this.listaFormazione.push (
      new Formazione ('portfolioImage.jpg', 'Dipolma di liceo scientifico')
    );
    this.listaFormazione.push (
      new Formazione ('portfolioImage.jpg', 'Istruttore di nuoto')
    );
    this.listaFormazione.push (
      new Formazione ('portfolioImage.jpg', 'Assistente Bagnanti')
    );
   }

  ngOnInit(): void {
  }

}
