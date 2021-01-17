"use strict";

let country;
let deliveryPrice;

let message;

const enterCountry = prompt("Введите страну доставки");
console.log(enterCountry);

const enteredCountry = enterCountry.toLowerCase();

if (enterCountry === null) {
  message = "Отменено пользователем!";
} else {
  switch (enteredCountry) {
    case "австралия": {
      country = "Австралию";
      deliveryPrice = 170;
      message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
      break;
    }

    case "китай": {
      country = "Китай";
      deliveryPrice = 100;
      message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
      break;
    }

    case "чили": {
      country = "Чили";
      deliveryPrice = 250;
      message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
      break;
    }

    case "индия": {
      country = "Индию";
      deliveryPrice = 80;
      message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
      break;
    }

    case "ямайка": {
      country = "Ямайку";
      deliveryPrice = 120;
      message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
      break;
    }

    default:
      message = "В вашей стране доставка не доступна";
  }
}

alert(message);
