import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { ConfigService } from '../core/config.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: ConfigService, useValue: null}]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
