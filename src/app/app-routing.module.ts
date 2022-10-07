import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormazioneComponent } from './formazione/formazione.component';
import { ProgettirealizzatiComponent } from './progettirealizzati/progettirealizzati.component';
import { AbilitaComponent } from './abilita/abilita.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'formazione', component: FormazioneComponent},
  { path: 'progettirealizzati', component: ProgettirealizzatiComponent},
  { path: 'abilita', component: AbilitaComponent},
  { path: 'hobbies', component: HobbiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
