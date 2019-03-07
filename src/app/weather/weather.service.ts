import { Injectable } from '@angular/core';
import { ConfigService } from '../core/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cityZip: string;
  private appId: string;
  private lang: string;
  constructor(private config: ConfigService, private http: HttpClient) {
    this.cityZip = this.config.cityZip;
    this.appId = this.config.openweathermapappid;
    this.lang = this.config.lang;
  }

  getCurrentWeather(): Observable<string> {
    return this.http.get<string>(
      `https://api.openweathermap.org/data/2.5/weather?zip=${
        this.cityZip
      }&units=metric&APPID=${this.appId}&lang=${this.lang}`
    );
  }
}
