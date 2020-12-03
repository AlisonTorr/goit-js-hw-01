const credits = 23580;
const pricePerDroid = 3000;

const purchasedDroidNumber = prompt("Введите количество дроидов к покупке");
let message;
let totalPrice = pricePerDroid * purchasedDroidNumber;

if ((purchasedDroidNumber = null)) {
  message = "Отменено пользователем!";
} else if (purchasedDroidNumber > 0) {
  message = totalPrice;
}

if (credits < totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${purchsedDroidNumber} дроидов, на счету осталось (${credits} - ${totalPrice}) кредитов.`;
}
