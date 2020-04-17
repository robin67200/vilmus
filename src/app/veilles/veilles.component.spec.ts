/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeillesComponent } from './veilles.component';

describe('VeillesComponent', () => {
  let component: VeillesComponent;
  let fixture: ComponentFixture<VeillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
