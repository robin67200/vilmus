import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavComponent, ContactModal, ContactOkModal } from './nav/nav.component';
import { DemoMaterialModule } from '../material-module';
import { AppSharedModule } from '../app-shared.module';

@NgModule({
  declarations: [NavComponent, ContactModal, ContactOkModal],
  imports:
      [CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      DemoMaterialModule,
      AppSharedModule,

    ],
  exports: [NavComponent],
  entryComponents: [ContactModal, ContactOkModal],
})

export class NavModule { }
