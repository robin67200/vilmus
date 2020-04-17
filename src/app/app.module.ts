import { ProjetComponent } from './home/home/projet/projet.component';
import { DeveloppeurComponent } from './home/home/developpeur/developpeur.component';
import { ProfilComponent } from './home/home/profil/profil.component';
import { AppSlidePanelComponent } from './components/app-slide-panel/app-slide-panel.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from './app-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavModule } from './nav/nav.module';
import { MatSliderModule, MatSidenavModule } from '@angular/material';
import { HomeComponent } from './home/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ParcoursComponent } from './parcours/parcours.component';
import { CompetencesComponent } from './competences/competences.component';
import { VeillesComponent } from './veilles/veilles.component';
import { ChartsModule } from 'ng2-charts';
import { PPEComponent } from './PPE/PPE.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CVComponent } from './CV/CV.component';



@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ParcoursComponent,
      CompetencesComponent,
      VeillesComponent,
      PPEComponent,
      ProfilComponent,
      DeveloppeurComponent,
      ProjetComponent,
      CVComponent
   ],
   imports: [
      NgbModule,
      AppSharedModule,
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      NavModule,
      ChartsModule,
      AppRoutingModule,
      MatSliderModule,
      MatSidenavModule,
      MglTimelineModule,
      AngularFontAwesomeModule,
      PdfViewerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
