import { createWeatherMap } from "./createWeatherMap";

describe("createWeatherMap", () => {
  let el;
  const cityName = "Ufa";
  const temp = -14.83;
  const icon = "13d";

  const weather = {
    weather: [{ icon }],
    main: { temp },
    name: cityName,
  };

  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createWeatherMap(el, weather);
  });

  afterEach(() => {
    document.body.innerHTML = " ";
  });
  it("should to add weather map into html", () => {
    const mapEl = el.querySelector("#map");
    const weatherEl = el.querySelector("#p_img");
    const apiKeyMap = "AIzaSyAj8_ynoHzOmBoKEHxYVWvGf5rAniFhmmY";
    const WeatherLocation = `${weather.name} : ${weather.main.temp}°С`;

    const expIcon = `<img id="imgW" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="alternatetext">`;
    const expWeatherLocation = `${weather.name} : ${weather.main.temp}°С${expIcon}`;
    const expMap = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${WeatherLocation}&amp;zoom=10&amp;size=400x400&amp;key=${apiKeyMap}">`;

    expect(mapEl.innerHTML).toStrictEqual(expMap);
    expect(weatherEl.innerHTML).toStrictEqual(expWeatherLocation);
  });
});
