const credits = 23580;
const pricePerDroid = 3000;

const purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
purchasedDroidNumber = Number(purchasedDroidNumber);

let message;
let totalPrice = pricePerDroid * purchasedDroidNumber;

if (purchasedDroidNumber === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (purchasedDroidNumber > 0) {
  message = `К оплате ${totalPrice} кредитов`;
  console.log(message);
}

if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
  console.log(message);
} else {
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось (${credits} - ${totalPrice}) кредитов.`;
  console.log(message);
}
