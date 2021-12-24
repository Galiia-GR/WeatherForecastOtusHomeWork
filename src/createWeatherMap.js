export function createWeatherMap(el, weather) {
  const weatherLocation = `${weather.name} : ${weather.main.temp}&deg;С`;
  const apiKeyMap = "AIzaSyAj8_ynoHzOmBoKEHxYVWvGf5rAniFhmmY";

  el.innerHTML += `
<div class="showMap">
<div id ="map"></div>
<div><p id="p_img">${weatherLocation}<img id="imgW" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png"
 alt="alternatetext"></p></div>
 </div>`;

  const map = document.querySelector("#map");
  const showMap = document.querySelector(".showMap");

  showMap.append(map);

  map.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${weatherLocation}&zoom=10&size=400x400&key=${apiKeyMap}">`;
}
