import { buildForecast } from "./buildForecast";

describe("buildForecast", () => {
  const mockFetch = global.fetch;
  const cityName = "Ufa";
  const temp = -14.83;
  const icon = "13d";

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json() {
        return Promise.resolve({
          weather: [{ icon }],
          main: { temp },
          name: cityName,
        });
      },
      ok: true,
    })
  );
  const el = document.createElement("div");
  document.body.append(el);

  beforeAll(async () => {
    await buildForecast(el);
  });

  afterAll(() => {
    global.fetch = mockFetch;
  });

  it("shoud to be a function", () => {
    expect(buildForecast).toBeInstanceOf(Function);
  });

  it("test markup", () => {
    expect(el.querySelector(".listElHistory")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector(".showCityWeather")).toBeTruthy();
    expect(el.querySelector("form")).toBeTruthy();
  });

  it("should shows local city weather", () => {
    expect(el.querySelector("div").innerHTML).toMatch(/Ufa/);
    console.log(document.body.innerHTML);
  });
});
