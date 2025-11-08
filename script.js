document.getElementById("getWeather").addEventListener("click", getWeather);

async function getWeather() {
  const city = "London,uk";
  const apiKey = "e467712b257e418838be97cc881a71de";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const weather = data.weather[0].main;

    document.getElementById("weatherData").textContent =
      `Current weather in London: ${weather}`;
  } catch (error) {
    document.getElementById("weatherData").textContent =
      `Error fetching weather data: ${error.message}`;
  }
}
