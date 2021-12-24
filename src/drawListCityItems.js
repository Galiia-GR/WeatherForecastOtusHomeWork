export function drawListCityItems(el, cityItemsHistory) {
  el.innerHTML = `<ul>${cityItemsHistory
    .map((el) => `<li>${el}</li>`)
    .join("")}</ul>`;
}
