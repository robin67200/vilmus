import { CVComponent } from './CV/CV.component';
import { PPEComponent } from './PPE/PPE.component';
import { VeillesComponent } from './veilles/veilles.component';
import { CompetencesComponent } from './competences/competences.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'parcours', component: ParcoursComponent, data: {animation: 'ParcoursPage'}},
  {path: 'competences', component: CompetencesComponent, data: {animation: 'CompetencesPage'}},
  {path: 'veilles', component: VeillesComponent, data: {animation: 'VeillesPage'}},
  {path: 'PPE', component: PPEComponent, data: {animation: 'PPEPage'}},
  {path: 'CV', component: CVComponent, data: {animation: 'CVPage'}},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
