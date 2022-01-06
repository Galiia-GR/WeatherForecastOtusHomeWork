export async function getLocationCity() {
  const urlGeo = `https://get.geojs.io/v1/ip/geo.json`;

  try {
    const response = await fetch(urlGeo);

    if (response.ok) {
      const result = await response.json();
      const cityName = result.city;
      return cityName;
    }

    throw new Error("wrong city name");
  } catch (e) {
    console.log("cant find city location");
  }

  return null;
}
