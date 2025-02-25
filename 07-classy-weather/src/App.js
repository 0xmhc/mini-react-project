import { useState, useEffect } from "react";
import { useFormatDay } from "./useFormatDay";
import { useGetWeatherIcon } from "./useGetWeatherIcon";
function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function App() {
  const [location, setLocation] = useState(localStorage.getItem("location"));
  const [isLoading, setIsLoading] = useState(false);
  const [dispalyLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});

  async function fetchWeather() {
    if (location.length < 2) return setWeather({});
    try {
      setIsLoading(true);
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData.daily);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    function () {
      fetchWeather();
      localStorage.setItem("location", location);
    },
    [location]
  );

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <Input location={location} setLocation={setLocation} />
      {isLoading && <p className="loader">Loading...</p>}
      {weather?.weathercode && (
        <Weather weather={weather} location={dispalyLocation} />
      )}
    </div>
  );
}

function Input({ location, setLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search from location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
}
function Weather({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather;
  return (
    <div>
      <h2>Weather {location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}
function Day(props) {
  const { date, max, min, code, isToday } = props;
  const formatDate = useFormatDay(date);
  return (
    <li className="day">
      <span>{useGetWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDate}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}
export default App;
