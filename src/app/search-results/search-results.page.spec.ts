import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsPage } from './search-results.page';
import { NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchResultsPage', () => {
  let component: SearchResultsPage;
  let fixture: ComponentFixture<SearchResultsPage>;

  const NavMock :any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SearchResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: NavMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no results for non-matching char "ä"', () => {
    // mock searchRequest
    component.searchRequest = 'ä';

    expect(component.filterResults().length).toBe(0);
  })

  it('should show no results for non-matching char "j"', () => {
    // mock searchRequest
    component.searchRequest = 'j';

    expect(component.filterResults().length).toBe(0);
  })

  it('should show five results for matching word "raum"', () => {
    // mock searchRequest
    component.searchRequest = 'raum';

    expect(component.filterResults().length).toBe(5);
  })

  it('should show one results for matching word "Peter Griebel"', () => {
    // mock searchRequest
    component.searchRequest = 'Peter Griebel';

    expect(component.filterResults().length).toBe(1);
  })

});
