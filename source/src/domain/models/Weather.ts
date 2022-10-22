export class Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  elevation: number;
  temperature: number = 0;
  windspeed: number = 0;
  windDirection: number = 0;
  time: string = "";

  constructor(latitude: number, longitude: number, timezone: string, elevation: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.timezone = timezone;
    this.elevation = elevation;
  }
}
