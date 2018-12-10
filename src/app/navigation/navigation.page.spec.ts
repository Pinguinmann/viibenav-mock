import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPage } from './navigation.page';
import { NavController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

describe('NavigationPage', () => {
  const NavMock :any = {};
  let component: NavigationPage;
  let fixture: ComponentFixture<NavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: NavMock},
        TextToSpeech
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
