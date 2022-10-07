import { Component, OnInit } from '@angular/core';
import { Progetto } from '../model/progetto';

@Component({
  selector: 'app-progettirealizzati',
  templateUrl: './progettirealizzati.component.html',
  styleUrls: ['./progettirealizzati.component.css']
})
export class ProgettirealizzatiComponent implements OnInit {

    //array di progetti
    listaProgetti: Progetto[] = [];
    constructor () {
      this.listaProgetti.push (
        new Progetto (1, 'ISMAA Online', 'ismaa.jpeg', 'https://ismaa-online.org/')
      );
      this.listaProgetti.push (
        new Progetto (2, 'VE.RIS Immobiliare', 'logoVeris.png', 'https://verisimmobiliare.com/')
      );
      this.listaProgetti.push (
        new Progetto (3, 'Time For Percentage', 'appLogo.png', 'https://play.google.com/store/apps/details?id=com.redlabpc.timeforpercentage&hl=it&gl=US')
      );
    }

  ngOnInit(): void {
  }

}
