import { useState, useEffect } from "react";

import { WeatherAPI } from "@infrastructure/repository/adapters/WeatherAPI";
import { Weather } from "@domain/models/Weather";

export const WeatherDetails = () => {
  const [weather, setWeather] = useState({} as Weather);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherAPI = new WeatherAPI();

        const weatherData = await weatherAPI.getWeatherByCoordinates(51.5002, -0.1262);
        console.log(weatherData);
        setWeather(weatherData);
      } catch (error: any) {
        console.log(error);
        setWeather({} as Weather);
        // setError(error);
        // setDepots([]);
      } finally {
        //setLoading(false);
      }
    };

    getWeather();
  }, []);

  return (
    <>
      {weather && (
        <div>
          <h1>Weather Details</h1>
          <p>Temperature: {weather.temperature}</p>
        </div>
      )}
    </>
  );
};
