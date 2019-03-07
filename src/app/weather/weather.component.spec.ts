import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherService } from './weather.service';
import { EMPTY } from 'rxjs';


describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const weatherServiceMock = {
    getCurrentWeather: jasmine.createSpy('getCurrentWeather').and.returnValue(EMPTY)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: WeatherService, useValue: weatherServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
