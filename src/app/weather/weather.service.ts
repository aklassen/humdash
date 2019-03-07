import { Injectable } from '@angular/core';
import { ConfigService } from '../core/config.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {




  constructor(private config: ConfigService) { }
}
