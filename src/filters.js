function filterByType(data, type) {
  return data.filter((property) => {
    return property.property_type ? property.property_type.includes(type.toLowerCase()) : false;
  });
}

function filterByMin(data, min) {
  return data.filter((property) => {
    return property.price_value ? property.price_value >= min : false;
  });
}

function filterByMax(data, max) {
  return data.filter((property) => {
    return property.price_value ? property.price_value <= max : false;
  });
}

function filterByBuyOrRent(data, buyOrRent) {
  return data.filter((property) => {
    console.log(property.primary_channel === buyOrRent);
    return property.primary_channel === buyOrRent;
  });
}

export { filterByType, filterByMin, filterByMax, filterByBuyOrRent};
