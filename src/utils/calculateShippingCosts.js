export function calculateShippingCosts(itemList, destination) {
    let shippingRates = {
      JP: { standard: 20, express: 35 },
      TW: { standard: 15, express: 30 },
      KR: { standard: 20, express: 30 },
      TH: { standard: 10, express: 20 },
    };
  
    if (!Array.isArray(itemList)) {
      throw new TypeError('Invalid input: itemList must be an array');
    }
  
    if (typeof destination !== 'string') {
      throw new TypeError('Invalid input: destination must be a string');
    }
  
    if (!Object.keys(shippingRates).includes(destination)) {
      throw new RangeError('Invalid input: destination is not supported');
    }
  
    let totalCost = 0;
    let totalWeight = 0;
  
    for (const item of itemList) {
      if (typeof item !== 'object') {
        throw new Error('Invalid input: item must be an object');
      }
  
      if (typeof item.name !== 'string' || typeof item.weight !== 'number' || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        throw new Error('Invalid input: item must have properties "name" (string), "weight" (number), "price" (number) and "quantity" (number)');
      }
      let quantity = item.quantity;
      totalWeight += item.weight * quantity;
      totalCost += item.price * quantity;
    }
  
    let shippingCost = 0;
  
    if (totalWeight <= 10) {
      shippingCost = shippingRates[destination].standard;
    } else {
      shippingCost = shippingRates[destination].express;
    }
  
    return totalCost + shippingCost;
  }
  