import { Component, Input, OnInit } from '@angular/core';
import { Abilita } from '../model/abilita';

@Component({
  selector: 'app-abilita',
  templateUrl: './abilita.component.html',
  styleUrls: ['./abilita.component.css']
})
export class AbilitaComponent implements OnInit {

  //array di abilità
  listaAbilita: Abilita[] = [];
  
  constructor () {
    this.listaAbilita.push (
      new Abilita("HTML", 0.75)
    );
    this.listaAbilita.push (
      new Abilita("CSS", 0.75)
    );
    this.listaAbilita.push (
      new Abilita("JavaScript", 0.70)
    );
    this.listaAbilita.push (
      new Abilita("Java", 0.50)
    );
    this.listaAbilita.push (
      new Abilita("C++", 0.50)
    );
    this.listaAbilita.push (
      new Abilita("Assemblaggio Computer", 1)
    );
    this.listaAbilita.push (
      new Abilita("Editing Foto", 0.60)
    );
    this.listaAbilita.push (
      new Abilita("Editing Video", 0.60)
    );
    this.listaAbilita.push (
      new Abilita("Problem Solving", 0.90)
    );
  }

  ngOnInit(): void {
  }

}
