import Search from "./components/search/index.jsx";
import "./App.css";
import Weather from "./components/weather/index.jsx";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import { useState } from "react";
import Forecast from "./components/forecast/forecast.jsx";
function App() {
  const [currentWeather, setCurrenWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (serachData) => {
    const [lat, lon] = serachData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherRes = await response[0].json();
        const forecastWeatherRes = await response[1].json();
        console.log(currentWeather);
        setCurrenWeather({ city: serachData.label, ...currentWeatherRes });
        setForecastWeather({ city: serachData.label, ...forecastWeatherRes });
      })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
