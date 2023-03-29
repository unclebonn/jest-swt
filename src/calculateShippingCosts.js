 function calculateShippingCosts(itemList, destination) {
    const shippingRates = {
      US: { standard: 10, express: 25 },
      CA: { standard: 15, express: 30 },
      EU: { standard: 20, express: 40 },
      ASIA: { standard: 25, express: 50 },
    };
  
    if (!Array.isArray(itemList)) {
      throw new Error('Invalid input: itemList must be an array');
    }
  
    if (typeof destination !== 'string') {
      throw new Error('Invalid input: destination must be a string');
    }
  
    if (!Object.keys(shippingRates).includes(destination)) {
      throw new Error('Invalid input: destination is not supported');
    }
  
    let totalCost = 0;
    let totalWeight = 0;
  
    for (const item of itemList) {
      if (typeof item !== 'object') {
        throw new Error('Invalid input: item must be an object');
      }
  
      if (typeof item.name !== 'string' || typeof item.weight !== 'number' || typeof item.price !== 'number') {
        throw new Error('Invalid input: item must have properties "name" (string), "weight" (number), and "price" (number)');
      }
  
      totalWeight += item.weight;
      totalCost += item.price;
    }
  
    let shippingCost = 0;
  
    if (totalWeight <= 10) {
      shippingCost = shippingRates[destination].standard;
    } else {
      shippingCost = shippingRates[destination].express;
    }
  
    return totalCost + shippingCost;
  }

  module.exports = calculateShippingCosts;
  