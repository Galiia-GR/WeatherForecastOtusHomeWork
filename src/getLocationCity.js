export async function getLocationCity() {
  const urlGeo = `https://get.geojs.io/v1/ip/geo.json`;
  const response = await fetch(urlGeo);

  if (response.ok) {
    const result = await response.json();
    const cityName = result.city;
    return cityName;
  }

  return `cant find city location ${cityName}`;
}
