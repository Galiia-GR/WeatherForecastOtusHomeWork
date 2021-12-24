export async function getWeatherLocation(cityName) {
  const apiKeyWeather = "7cdf666258bbacb5f659f23142a75931";
  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKeyWeather}`;
  const response = await fetch(urlOpenWeather);

  if (response.ok) {
    const weather = await response.json();
    console.log(weather);
    return weather;
  }
  return `cant find city ${cityName}`;
}
