import { getLocationCity } from "./getLocationCity";

describe("getLocationCity", () => {
  let mockFetch;
  const urlGeo = `https://get.geojs.io/v1/ip/geo.json`;

  beforeAll(() => {
    global.fetch = jest.fn();
    mockFetch = jest.spyOn(global, "fetch");
  });

  afterAll(() => {
    delete global.fetch;
  });

  it("should return location cityName, where forecast opened", async () => {
    const city = { city: "Ufa" };

    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(city),
      })
    );

    const result = await getLocationCity();

    expect(mockFetch).toHaveBeenCalledWith(urlGeo);
    expect(result).toStrictEqual(city.city);
  });
  it("should return null, because cant find city location", async () => {
    const city = { city: "Ufa" };

    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(city),
      })
    );

    const result = await getLocationCity();

    expect(mockFetch).toHaveBeenCalledWith(urlGeo);
    expect(result).toStrictEqual(null);
  });
});
