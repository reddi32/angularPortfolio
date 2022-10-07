import { Component, OnInit } from '@angular/core';
import { Progetto } from './model/progetto';
import { Abilita } from './model/abilita';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AngularPortfolio';

  constructor() {}
  
  ngOnInit(): void {
    console.log()
  }
}
