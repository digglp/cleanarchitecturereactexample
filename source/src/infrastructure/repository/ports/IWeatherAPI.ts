import { Weather } from "../../../domain/models/Weather";

export interface IWeatherAPI {
  getWeatherByCoordinates(latitude: number, longitude: number): Promise<Weather>;
}
