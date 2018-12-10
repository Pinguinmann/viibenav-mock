import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { SearchPage } from './search.page';
import { NavController } from '@ionic/angular';

describe('SearchPage', () => {
  const NavMock :any = {};
  const SpeechRecogMock :any = {};

  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: SpeechRecognition, useValue: SpeechRecogMock },
        { provide: NavController, useValue: NavMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
