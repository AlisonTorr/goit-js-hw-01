"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let message;

const purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

const totalPrice = pricePerDroid * purchasedDroidNumber;

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
}

if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  const creditBalance = credits - totalPrice;
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось ${creditBalance} кредитов.`;
}

alert(message);
