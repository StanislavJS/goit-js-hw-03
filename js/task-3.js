function getElementWidth(content, padding, border) {
  // Видаляємо "px" з кожного параметра і перетворюємо на числа
  const contentWidth = parseFloat(content); // Перетворюємо content на число
  const paddingWidth = parseFloat(padding); // Перетворюємо padding на число
  const borderWidth = parseFloat(border); // Перетворюємо border на число

  // Загальна ширина = контент + 2 * (падінг + бордер)
  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);

  return totalWidth;
}

// Перевірка коректності роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200