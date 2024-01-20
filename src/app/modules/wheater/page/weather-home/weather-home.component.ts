import { WeatherData } from 'src/app/models/interfaces/WeatherData';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Maringá';
  weatherData!: WeatherData;

  constructor (
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService
    .getWeatherData(cityName) // Service method
    .subscribe({ // Receive the call result
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData.main);
      },
      error: (error) => console.error(error)
    });
  }
}
