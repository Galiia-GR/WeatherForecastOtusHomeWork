export async function getCityItems() {
  const cityItemsHistory = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  return cityItemsHistory;
}

export async function localStorageCityItems(cityItemsHistory) {
  if (cityItemsHistory.length > 10) {
    cityItemsHistory.shift();
  }
  localStorage.setItem("items", JSON.stringify(cityItemsHistory));
}
