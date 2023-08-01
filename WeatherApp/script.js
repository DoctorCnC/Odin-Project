async function getWeatherData(location) {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=a1c07882a6b7d89e95550ea178aa6bce", { mode: "cors" });
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
}

function processWeatherData(data) {
    if (!data) return null;

    const location = data.name;
    const currentWeather = data.weather[0].description;
    const currentTempF = data.main.temp;
    const currentTempC = (data.main.temp * 9) / 5 + 32;

    return {
        location,
        currentWeather,
        currentTempC,
        currentTempF,
    };
}

function displayWeatherInfo(weatherInfo) {
    const weatherInfoElement = document.getElementById('weatherInfo');
    if (weatherInfo) {
        const { location, currentWeather, currentTempC, currentTempF } = weatherInfo;
        const weatherHTML = `
            <h2>${location}</h2>
            <p>Weather: ${currentWeather}</p>
            <p>Temperature: ${currentTempC}°C / ${currentTempF}°F</p>
        `;
        weatherInfoElement.innerHTML = weatherHTML;
    } else {
        weatherInfoElement.innerHTML = '<p>No weather data available</p>';
    }
}

document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;
    locationInput.value = ''; // Clear input field after submission

    // Fetch weather data and process it
    const weatherData = await getWeatherData(location);
    const weatherInfo = processWeatherData(weatherData);

    // Display weather information on the webpage
    displayWeatherInfo(weatherInfo);
});
