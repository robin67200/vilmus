import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, Input } from '@angular/core';
import { DemoMaterialModule } from './material-module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppSlidePanelComponent } from './components/app-slide-panel/app-slide-panel.component';

const APP_COMPONENTS = [
    AppSlidePanelComponent
   ];

const APP_MODULES = [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    AngularFontAwesomeModule,
];

@NgModule({
  declarations: [ APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
  ],
  entryComponents: [],
  exports: [ APP_MODULES, AppSlidePanelComponent ]
})
export class AppSharedModule {}
