import { calculateShippingCosts } from "../../src/utils/calculateShippingCosts";

describe("calculateShippingCosts", () => {
  test("should calculate total cost for valid input", () => {
    const itemList = [
      { name: "Product A", weight: 2, price: 10, quantity: 1 },
      { name: "Product B", weight: 3, price: 15, quantity: 2 },
      { name: "Product C", weight: 4, price: 20, quantity: 3 },
    ];
    const destination = "US";

    const totalCost = calculateShippingCosts(itemList, destination);

    expect(totalCost).toEqual(125);
  });

  test("should throw an error if itemList is not an array", () => {
    const itemList = { name: "Product N", weight: 7, price: 11, quantity: 1 };
    // const itemList = [];
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
      'Invalid input: item must have properties "name" (string), "weight" (number), "price" (number) and "quantity" (number)'
    );
  });

  test("should calculate shipping cost based on total weight", () => {
    const itemList = [
      { name: "Product A", weight: 9, price: 10, quantity: 1 },
      { name: "Product B", weight: 1, price: 15,  quantity: 3 },
    ];
    const destination = "CA";

    const totalCost = calculateShippingCosts(itemList, destination);

    expect(totalCost).toEqual(85);
  });

  test("should throw an error if destination is not supported", () => {
    const itemList = [];
    const destination = "AU";

    expect(() => calculateShippingCosts(itemList, destination)).toThrow(
      "Invalid input: destination is not supported"
    );
  });
});
