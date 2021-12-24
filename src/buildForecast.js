import { getCityItems } from "./localStorageCityItems";
import { getLocationCity } from "./getLocationCity";
import { getWeatherLocation } from "./getWeatherLocation";
import { createWeatherMap } from "./createWeatherMap";
import { drawListCityItems } from "./drawListCityItems";
import { inputEvListener } from "./inputEvListener";

export async function buildForecast(el) {
  el.innerHTML = `
<div class="container"></div>
`;
  const container = document.querySelector(".container");

  container.innerHTML += `
<div class="showCityWeather">
    <form>
    <input id="getUserInput"
    placeholder="Type city and press enter" required autofocus>
     <button>Get weather</button>
    </form>
<div class="listElHistory"><ul></ul></div>
    </div>
    `;

  const listElHistory = document.querySelector(".listElHistory");

  const cityItemsHistory = await getCityItems();
  drawListCityItems(listElHistory, cityItemsHistory);
  await showLocalWeather();
  inputEvListener();
}

async function showLocalWeather() {
  const showCityWeather = document.querySelector(".showCityWeather");
  const cityName = await getLocationCity();
  const weather = await getWeatherLocation(cityName);
  createWeatherMap(showCityWeather, weather);
}
