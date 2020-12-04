let country;
let deliveryPrice;

const enterCountry = prompt("Введите страну доставки");

switch (enterCountry) {
  case Австраия:
    counrty = Australia;
    deliveryPrice = 170;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Китай:
    country = China;
    deliveryPrice = 100;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Чили:
    country = Chile;
    deliveryPrice = 250;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Индия:
    country = India;
    deliveryPrice = 80;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Ямайка:
    country = Jamaica;
    deliveryPrice = 120;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  default:
    deliveryPrice = alert;
}

alert = "В вашей стране доставка не доступна";

console.log(deliveryPrice);
