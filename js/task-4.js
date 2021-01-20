"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let message;

let totalPrice;
let creditBalance;

let purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

totalPrice = pricePerDroid * purchasedDroidNumber;

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
} else if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  creditBalance = credits - totalPrice;
  message = `Вы купили ${purchasedDroidNumber} дроидов, на счету осталось ${creditBalance} кредитов.`;
}

alert(message);
