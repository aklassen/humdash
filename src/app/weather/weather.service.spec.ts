import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { ConfigService } from '../core/config.service';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('WeatherService', () => {

  const mockConfig = {
    openweathermapappid: '',
    locationId: '',
    cityZip: '',
    lang: ''
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ConfigService, useValue: mockConfig }, HttpClient],
      schemas: [NO_ERRORS_SCHEMA]
    })
  );

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
