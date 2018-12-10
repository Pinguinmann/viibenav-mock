import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPage } from './select.page';
import { NavController } from '@ionic/angular';

describe('SelectPage', () => {
  const NavMock :any = {};

  let component: SelectPage;
  let fixture: ComponentFixture<SelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: NavMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
