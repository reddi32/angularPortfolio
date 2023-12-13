import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AbilitaComponent } from './abilita/abilita.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProgettirealizzatiComponent } from './progettirealizzati/progettirealizzati.component';
import { FormazioneComponent } from './formazione/formazione.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { ContattiComponent } from './contatti/contatti.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgettipersonaliComponent } from './progettipersonali/progettipersonali.component';
import { AziendeComponent } from './aziende/aziende.component';


@NgModule({
  declarations: [
    AppComponent,
    AbilitaComponent,
    HobbiesComponent,
    ProgettirealizzatiComponent,
    FormazioneComponent,
    ErrorComponent,
    ContattiComponent,
    HomeComponent,
    ProgettipersonaliComponent,
    AziendeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FormazioneComponent },
      { path: '', component: ProgettirealizzatiComponent },
      { path: '', component: AbilitaComponent },
      { path: 'hobbies', component: HobbiesComponent }, 
      { path: 'error', component: ErrorComponent },
      { path: 'contatti', component: ContattiComponent}
    ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServizioProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
