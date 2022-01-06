import { drawListCityItems } from "./drawListCityItems";

describe("drawListCityItems", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    document.body.innerHTML = " ";
    document.body.append(el);
  });

  it("should to add list history with cities", () => {
    const cityItemsHistory = ["Moscow", "Kiev", "London"];
    drawListCityItems(el, cityItemsHistory);
    expect(el.innerHTML).toStrictEqual(
      "<ul><li>Moscow</li><li>Kiev</li><li>London</li></ul>"
    );
  });
});
