let country;
let deliveryPrice;

const enterCountry = prompt("Введите страну доставки");

switch (enterCountry) {
  case Австралия:
    counrty = Australia;
    deliveryPrice = 170;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case Китай:
    country = China;
    deliveryPrice = 100;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case Чили:
    country = Chile;
    deliveryPrice = 250;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case Индия:
    country = India;
    deliveryPrice = 80;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case Ямайка:
    country = Jamaica;
    deliveryPrice = 120;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
