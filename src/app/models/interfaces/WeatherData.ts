export interface WeatherData {
  coord: {
    lon: number,
    lat: number,
  };

  weather : [
    {
      id: number,
      main: string,
      icon: string,
      description: string
    }
  ];

  base: string;

  main: {
    feels_like: number,
    humidity: number,
    pressure:  number,
    temp: number,
    temp_max: number,
    temp_min: number
  };

  visibility: number;

  wind: {
    speed: number,
    deg: number
  };

  clouds: {
    all: number
  };

  dt: number;

  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
}
