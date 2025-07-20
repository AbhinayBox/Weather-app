import React, { useState } from 'react'; // Import React and useState hook
import SearchBar from './components/SearchBar'; // Import SearchBar component
import axios from 'axios'; // Import axios for making HTTP requests
import WeatherCard from './components/WeatherCard'; // Import WeatherCard component
import video from './video.mp4'; // Import background video

function App() {
  // State to store fetched weather data
  const [weather, setWeather] = useState(null);

  // State to indicate loading status while fetching data
  const [loading, setLoading] = useState(false);

  // State to store any error messages
  const [error, setError] = useState('');

  // API key stored in Vite environment variable
  const API_KEY = import.meta.env.VITE_API_KEY;

  // OpenWeatherMap API base URL
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  // Function to fetch weather data for a given city
  const fetchWeather = async (city) => {
    setLoading(true); // Show loading state
    setError(''); // Clear previous errors

    try {
      // Construct full API request URL
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

      // Perform GET request
      const response = await axios.get(url);

      console.log(response.data); // Optional: Log response data for debugging

      // Store the weather data in state
      setWeather(response.data);
    } catch (err) {
      // Handle city not found error
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        // Handle other types of errors
        setError('An error occurred. Please try again later.');
      }
      setWeather(null); // Clear weather data if error occurs
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    // Full-screen flex container with video background
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Weather app card */}
      <div className="bg-black/75 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>

        {/* Search bar to enter city */}
        <SearchBar fetchWeather={fetchWeather} />

        {/* Conditional rendering for loading state */}
        {loading && <p className="text-center mb-4">Loading...</p>}

        {/* Conditional rendering for error message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Conditional rendering for weather data */}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App; // Export App component as default
