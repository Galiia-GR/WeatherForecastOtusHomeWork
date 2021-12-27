export async function getWeatherLocation(cityName) {
  const apiKeyWeather = "7cdf666258bbacb5f659f23142a75931";
  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKeyWeather}`;

  try {
    const response = await fetch(urlOpenWeather);

    if (response.ok) {
      const weather = await response.json();
      return weather;
    }
    throw new Error("Wrong weather");
  } catch (e) {
    console.log(`cant find weather ${cityName}`);
  }
  return null;
}
