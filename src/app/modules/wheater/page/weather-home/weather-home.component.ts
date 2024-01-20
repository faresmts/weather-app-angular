import { WeatherData } from 'src/app/models/interfaces/WeatherData';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'Maringá';
  weatherData!: WeatherData;

  searchIcon = faMagnifyingGlass;

  constructor (
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService
    .getWeatherData(cityName) // Service method
    .pipe(takeUntil(this.destroy$)) //sign to call the unscribe
    .subscribe({ // Receive the call result
      next: (response) => {
        response && (this.weatherData = response);
      },
      error: (error) => console.error(error)
    });
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }

  // When the component is not loading, its a good pratice to unscribe
  //from de injection to avoid memory leak
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
