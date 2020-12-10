"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let message;

let purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
} else if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  const totalPrice = pricePerDroid * purchasedDroidNumber;
  const creditBalance = credits - totalPrice;
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось ${creditBalance} кредитов.`;
}

alert(message);
