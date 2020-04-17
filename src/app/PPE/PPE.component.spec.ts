/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PPEComponent } from './PPE.component';

describe('PPEComponent', () => {
  let component: PPEComponent;
  let fixture: ComponentFixture<PPEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
