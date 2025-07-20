import React from 'react'; // Import React library

// WeatherCard component that takes 'weather' data as a prop
const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6">
      {' '}
      {/* Adds margin-top using Tailwind CSS */}
      {/* Displays city name and country */}
      <h2 className="text-2xl font-semibold text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      {/* Weather icon and temperature */}
      <div className="flex justify-center items-center mt-4">
        <img
          // Dynamically load the weather icon from OpenWeatherMap
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description} // Accessibility description
          className="w-16 h-16"
        />
        {/* Display rounded temperature in Celsius */}
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>
      {/* Weather condition description (e.g., cloudy, clear) */}
      <p className="text-center text-gray-400 capitalize">
        {weather.weather[0].description}
      </p>
      {/* Grid displaying other weather details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Humidity */}
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>

        {/* Wind speed */}
        <div className="text-center">
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>

        {/* Atmospheric pressure */}
        <div className="text-center">
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>

        {/* Feels like temperature */}
        <div className="text-center">
          <p className="text-gray-400">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; // Export the component for use in other files
