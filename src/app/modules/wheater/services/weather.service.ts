import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// We can inject this servince in anyone component
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '6382bcc26479515eedc5eecb7474992f';

  constructor(private client: HttpClient) {}

  getWeatherData(cityName: string): Observable<any> {
    return this.client.get(
      `${this.apiUrl}?q=${cityName}&units=metric&mode=json&APPID=${this.apiKey}`, {}
    );
  }
}
