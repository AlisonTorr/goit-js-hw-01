const credits = 23580;
const pricePerDroid = 3000;

let message;

const purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
  alert(message);
} else if (purchasedDroidNumber > 0) {
  const totalPrice = pricePerDroid * purchasedDroidNumber;
  message = `К оплате ${totalPrice} кредитов`;
  alert(message);
}

if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
  alert(message);
} else {
  const creditBalance = credits - totalPrice;
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось ${creditBalance} кредитов.`;
  alert(message);
}
