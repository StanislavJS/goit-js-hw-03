function getShippingMessage(country, price, deliveryFee) {
  // Обчислюємо загальну вартість, додаючи вартість товару та вартість доставки
  const totalPrice = price + deliveryFee;
  
  // Повертаємо повідомлення про доставку
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка коректності роботи функції
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = [...firstArray, ...secondArray];
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  } else {
    return combinedArray;
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []