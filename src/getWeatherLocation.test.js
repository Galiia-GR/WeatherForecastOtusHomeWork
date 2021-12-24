import { getWeatherLocation } from "./getWeatherLocation";

describe("getWeatherLocation", () => {
  let mockFetch;
  const cityName = "Ufa";
  const apiKeyWeather = "7cdf666258bbacb5f659f23142a75931";
  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKeyWeather}`;

  beforeAll(() => {
    global.fetch = jest.fn(cityName);
    mockFetch = jest.spyOn(global, "fetch");
  });

  afterAll(() => {
    delete global.fetch;
  });

  it("should return weather where forecast opened", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(cityName),
      })
    );

    const result = await getWeatherLocation(cityName);

    expect(mockFetch).toHaveBeenCalledWith(urlOpenWeather);
    expect(result).toStrictEqual(cityName);
  });
});
