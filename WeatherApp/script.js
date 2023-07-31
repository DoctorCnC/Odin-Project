// Fetch weather data from API
async function getWeatherData(location) {
    const apiKey = 'f28d9486987644fa35b964dcc8addf3a';
    const url = `http://api.weatherstack.com/

    /v1/forecast.json?key=${apiKey}&q=${location}&days=3`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  
  // Process weather data and return relevant information
  function processWeatherData(data) {
    if (!data) return null;
    
    const location = data.location.name;
    const currentWeather = data.current.condition.text;
    const currentTempC = data.current.temp_c;
    const currentTempF = data.current.temp_f;
  
    return {
      location,
      currentWeather,
      currentTempC,
      currentTempF,
    };
  }
  document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;
    
    // Clear input field after submission
    locationInput.value = '';
  
    // Fetch weather data and process it
    const weatherData = await getWeatherData(location);
    const weatherInfo = processWeatherData(weatherData);
  
    // Display weather information on the webpage
    displayWeatherInfo(weatherInfo);
  });
  

  function displayWeatherInfo(weatherInfo) {
  if (!weatherInfo) {
    // Handle the case when weather data is not available or an error occurred
    console.log('Weather data not available');
    return;
  }

  // Target DOM elements to display the weather information
  const locationElement = document.getElementById('location');
  const currentWeatherElement = document.getElementById('currentWeather');
  const currentTempCElement = document.getElementById('currentTempC');
  const currentTempFElement = document.getElementById('currentTempF');

  // Update the content of the DOM elements with weather data
  locationElement.textContent = weatherInfo.location;
  currentWeatherElement.textContent = weatherInfo.currentWeather;
  currentTempCElement.textContent = `${weatherInfo.currentTempC} °C`;
  currentTempFElement.textContent = `${weatherInfo.currentTempF} °F`;
}
