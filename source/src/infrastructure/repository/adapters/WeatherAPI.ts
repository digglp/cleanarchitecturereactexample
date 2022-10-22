import { Weather } from "../../../domain/models/Weather";
import { IWeatherAPI } from "../ports/IWeatherAPI";
import axios from "axios";
export const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export class WeatherAPI implements IWeatherAPI {
  async getWeatherByCoordinates(latitude: number, longitude: number): Promise<Weather> {
    try {
      const response = await axios.get(`${BASE_URL}latitude=${latitude}&longitude=${longitude}&current_weather=true`);

      const weather = new Weather(
        response.data.latitude,
        response.data.longitude,
        response.data.timezone,
        response.data.elevation
      );
      weather.temperature = response.data.current_weather.temperature;
      weather.windspeed = response.data.current_weather.windspeed;
      weather.windDirection = response.data.current_weather.winddirection;
      weather.time = response.data.current_weather.time;

      return weather;

      // eslint-disable-next-line
    } catch (error: any) {
      throw new Error("Error getting weather data: ", error);
    }
  }
}
