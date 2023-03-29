const { calculateShippingCosts } = require("./shipping");

describe("calculateShippingCosts", () => {
  test("should calculate total cost for valid input", () => {
    const itemList = [
      { name: "Product A", weight: 2, price: 10 },
      { name: "Product B", weight: 3, price: 15 },
      { name: "Product C", weight: 4, price: 20 },
    ];
    const destination = "US";

    const totalCost = calculateShippingCosts(itemList, destination);

    expect(totalCost).toEqual(52);
  });

  test("should throw an error if itemList is not an array", () => {
    const itemList = { name: "Product N", weight: 7, price: 10 };
    const destination = "US";

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      "Invalid input: itemList must be an array"
    );
  });

  test("should throw an error if destination is not a string", () => {
    const itemList = [];
    const destination = 4356;

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      "Invalid input: destination must be a string"
    );
  });

  test("should throw an error if item in itemList is not an object", () => {
    const itemList = ["invalid"];
    const destination = "US";

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      "Invalid input: item must be an object"
    );
  });

  test("should throw an error if item in itemList does not have required properties", () => {
    const itemList = [{ name: "Product N", weight: 7 }];
    const destination = "US";

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      'Invalid input: item must have properties "name" (string), "weight" (number), and "price" (number)'
    );
  });

  test("should calculate shipping cost based on total weight", () => {
    const itemList = [
      { name: "Product A", weight: 9, price: 10 },
      { name: "Product B", weight: 1, price: 15 },
    ];
    const destination = "CA";

    const totalCost = calculateShippingCosts(itemList, destination);

    expect(totalCost).toEqual(40);
  });

  test("should throw an error if destination is not supported", () => {
    const itemList = [];
    const destination = "AU";

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      "Invalid input: destination is not supported"
    );
  });
});
