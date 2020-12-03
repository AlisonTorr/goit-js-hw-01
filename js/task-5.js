let country;
let deliveryPrice;

const country = prompt("Введите страну доставки");

switch (country) {
  case Australia:
    deliveryPrice = 170;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case China:
    deliveryPrice = 100;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Chile:
    deliveryPrice = 250;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case India:
    deliveryPrice = 80;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  case Jamaica:
    deliveryPrice = 120;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;

  default:
    deliveryPrice = alert;
}

alert = "В вашей стране доставка не доступна";

console.log(deliveryPrice);
