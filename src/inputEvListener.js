import { getCityItems, localStorageCityItems } from "./localStorageCityItems";
import { getWeatherLocation } from "./getWeatherLocation";
import { createWeatherMap } from "./createWeatherMap";
import { drawListCityItems } from "./drawListCityItems";

export async function inputEvListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const listElHistory = document.querySelector(".listElHistory");
  const showCityWeather = document.querySelector(".showCityWeather");

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const cityName = input.value;
    const cityItemsHistory = await getCityItems();
    const weather = await getWeatherLocation(cityName);
    createWeatherMap(showCityWeather, weather);

    cityItemsHistory.push(cityName);
    localStorageCityItems(cityItemsHistory);
    drawListCityItems(listElHistory, cityItemsHistory);
    input.value = "";
    console.log(listElHistory, cityItemsHistory);
  });
}
