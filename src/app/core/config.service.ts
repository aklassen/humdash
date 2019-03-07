import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  openweathermapappid: string;
  locationId: string;

  constructor(private http: HttpClient) {}

  init() {
  return new Promise<boolean>((resolve, reject) => {
      this.http
        .get('./assets/config.json')
        .pipe(
          map((x: ConfigService) => {
            this.openweathermapappid = x.openweathermapappid;
            this.locationId = x.locationId;
            resolve(true);
          }),
          catchError(
            (
              x: { status: number },
              caught: Observable<void>
            ): ObservableInput<{}> => {
              if (x.status !== 404) {
                resolve(false);
              }
              this.openweathermapappid = 'YOUR_API_KEY';
              this.locationId = 'YOUR_LOCATION_ID';
              resolve(true);
              return of({});
            }
          )
        )
        .subscribe();
    });
  }
}
