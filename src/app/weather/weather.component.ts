import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';
import { OWMWeather } from './helper/owm.types';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherSub: Subscription;
  weatherTimer;
  weather = null;
  weatherErr = true;
  forecastTimer;
  forecast = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherSub = this.weatherService
      .getCurrentWeather()
      .subscribe(data => {
        const weather = new OWMWeather(data);
        if (Number(weather.code) === 200) {
          this.weatherErr = false;
          this.weather = weather;
        } else {
          this.weatherErr = true;
        }
      });
  }

  ngOnDestroy() {
    this.weatherSub.unsubscribe();
  }
}
