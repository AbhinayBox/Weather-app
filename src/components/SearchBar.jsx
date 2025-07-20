import React, { useState } from 'react'; // Import React and useState hook

// SearchBar component that receives a fetchWeather function as a prop
const SearchBar = ({ fetchWeather }) => {
  // Local state to keep track of user input in the search bar
  const [city, setCity] = useState('');

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior (page reload)

    // If the input is not just whitespace
    if (city.trim()) {
      fetchWeather(city); // Calls the fetchWeather function passed via props with the city name
      setCity(''); // Clears the input field after submission
    }
  };

  return (
    // Form with onSubmit handler
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your city name"
        value={city} // Binds input value to city state
        onChange={(e) => setCity(e.target.value)} // Updates city state on user input
        className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none border-r-0" // Tailwind CSS classes
      />
      <button
        className="bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 border-l-0 rounded-r-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar; // Export the component so it can be used in other parts of the app
