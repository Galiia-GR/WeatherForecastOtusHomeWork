import { getCityItems, localStorageCityItems } from "./localStorageCityItems";
import { getLocationCity } from "./getLocationCity";
import { getWeatherLocation } from "./getWeatherLocation";
import { createWeatherMap } from "./createWeatherMap";
import { drawListCityItems } from "./drawListCityItems";

export async function buildForecast(el) {
  el.innerHTML = `
<div class="container"></div>
`;
  const container = el.querySelector(".container");

  container.innerHTML = `
<div class="showFormList">
    <form>
    <input id="getUserInput"
    placeholder="Type city and press enter" required autofocus>
     <button>Get weather</button>
    </form>
<div class="listElHistory"><ul></ul></div>
    </div>
    <div class="showCityWeather"></div>
    `;

  const listElHistory = el.querySelector(".listElHistory");
  const form = el.querySelector("form");
  const input = el.querySelector("input");
  const showCityWeather = el.querySelector(".showCityWeather");

  const cityItemsHistory = await getCityItems();
  drawListCityItems(listElHistory, cityItemsHistory);
  await showLocalWeather();

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const cityName = input.value;
    await getCityItems();
    const weather = await getWeatherLocation(cityName);
    createWeatherMap(showCityWeather, weather);

    cityItemsHistory.push(cityName);
    localStorageCityItems(cityItemsHistory);
    drawListCityItems(listElHistory, cityItemsHistory);
    input.value = "";
  });

  listElHistory.addEventListener("click", async (ev) => {
    ev.preventDefault();

    const cityName = ev.target.textContent;
    const weather = await getWeatherLocation(cityName);
    createWeatherMap(showCityWeather, weather);
  });
}

export async function showLocalWeather() {
  const showCityWeather = document.querySelector(".showCityWeather");
  const cityName = await getLocationCity();
  const weather = await getWeatherLocation(cityName);
  createWeatherMap(showCityWeather, weather);
}
