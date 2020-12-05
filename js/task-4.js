const credits = 23580;
const pricePerDroid = 3000;

const purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

let message;
const totalPrice = pricePerDroid * purchasedDroidNumber;

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
  alert(message);
} else if (purchasedDroidNumber > 0) {
  message = `К оплате ${totalPrice} кредитов`;
  alert(message);
}

if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
  alert(message);
} else {
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось (${credits} - ${totalPrice}) кредитов.`;
  alert(message);
}
