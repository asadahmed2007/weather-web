function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '7cdb54e6534ebab2a2e893122f973f06'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        alert("Please enter a city name.");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('weather-info').innerHTML = `<p>City not found!</p>`;
                document.getElementById('weather-info').style.display = 'block';
            } else {
                const weather = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-info').innerHTML = weather;
                document.getElementById('weather-info').style.display = 'block';
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred. Please try again later.");
        });
}
