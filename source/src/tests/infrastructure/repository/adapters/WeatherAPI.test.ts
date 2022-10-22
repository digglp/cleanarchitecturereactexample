import axios from "axios";
import { Weather } from "../../../../domain/models/Weather";
import { WeatherAPI } from "../../../../infrastructure/repository/adapters/WeatherAPI";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("WeatherAPI tests", () => {
  describe("When API call is successful", () => {
    it("should return a Weather object", async () => {
      //given
      const fakeWeather = {
        latitude: 1,
        longitude: -1,
        generationtime_ms: 0.3039836883544922,
        utc_offset_seconds: 0,
        timezone: "GMT",
        timezone_abbreviation: "GMT",
        elevation: 6.0,
        current_weather: {
          temperature: 14.5,
          windspeed: 7.5,
          winddirection: 145.0,
          weathercode: 61,
          time: "2022-10-22T20:00",
        },
      };
      mockedAxios.get.mockResolvedValue({ data: fakeWeather });

      //when
      const weatherAPI = new WeatherAPI();
      const weather = await weatherAPI.getWeatherByCoordinates(1, -1);

      //then
      expect(weather).toBeInstanceOf(Weather);
      expect(weather.latitude).toEqual(fakeWeather.latitude);
      expect(weather.longitude).toEqual(fakeWeather.longitude);
      expect(weather.timezone).toEqual(fakeWeather.timezone);
      expect(weather.elevation).toEqual(fakeWeather.elevation);
      expect(weather.temperature).toEqual(fakeWeather.current_weather.temperature);
      expect(weather.windspeed).toEqual(fakeWeather.current_weather.windspeed);
      expect(weather.windDirection).toEqual(fakeWeather.current_weather.winddirection);
      expect(weather.time).toEqual(fakeWeather.current_weather.time);
    });
  });

  describe("When API call is unsuccessful", () => {
    it("should throw an error", async () => {
      // given
      const message = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(message));

      // when
      const weatherAPI = new WeatherAPI();

      // then
      expect.assertions(1);
      try {
        const weather = await weatherAPI.getWeatherByCoordinates(0, 0);
        expect(weather).toEqual([]);
        // eslint-disable-next-line
      } catch (err: any) {
        expect(err.message).toContain("Error getting weather data");
      }
    });
  });
});
