import { getCityItems, localStorageCityItems } from "./localStorageCityItems";

describe("StorageCityItems", () => {
  let mockStorage;
  const mockStorageSetItem = global.Storage.prototype.setItem;
  const moskStorageGetItem = global.Storage.prototype.getItem;
  const storageKey = "items";

  beforeAll(() => {
    mockStorage = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockStorage[key] = value;
    });

    global.Storage.prototype.getItem = jest.fn(
      (key) => mockStorage[key] ?? "[]"
    );
  });

  beforeEach(() => {
    mockStorage = {};
  });

  afterAll(() => {
    global.Storage.prototype.setItem = mockStorageSetItem;
    global.Storage.prototype.getItem = moskStorageGetItem;
  });

  it("function should return [] if localStorage is empty", async () => {
    const result = await getCityItems();

    expect(result).toStrictEqual([]);
    expect(global.Storage.prototype.getItem).toHaveBeenCalledWith(storageKey);
  });

  it("should to save items in cityItemsHistory", async () => {
    const cityItemsHistory = ["New York", "Moscow"];

    localStorageCityItems(cityItemsHistory);

    const expCityItemsHistory = '["New York","Moscow"]';
    const expMockStorage = {};
    expMockStorage[storageKey] = expCityItemsHistory;

    expect(mockStorage).toStrictEqual(expMockStorage);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith(
      storageKey,
      expCityItemsHistory
    );
  });

  it("should to save only 10 user inputs requests about the weather", async () => {
    const cityItemsHistory = [
      "New York",
      "Moscow",
      "Ufa",
      "London",
      "Kiev",
      "Kazan",
      "Paris",
      "Samara",
      "Vladimir",
      "Saint Petersburg",
      "London",
    ];

    localStorageCityItems(cityItemsHistory);

    const expCityItemsHistory =
      '["Moscow","Ufa","London","Kiev","Kazan","Paris","Samara","Vladimir","Saint Petersburg","London"]';

    const expMockStorage = {};
    expMockStorage[storageKey] = expCityItemsHistory;
    expect(mockStorage).toStrictEqual(expMockStorage);
  });
});
