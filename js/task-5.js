let country;
let deliveryPrice;

const enterCountry = prompt("Введите страну доставки");
console.log(enterCountry.toLowerCase());

switch (enterCountry) {
  case австралия:
    counrty = Australia;
    deliveryPrice = 170;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case китай:
    country = China;
    deliveryPrice = 100;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case чили:
    country = Chile;
    deliveryPrice = 250;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case индия:
    country = India;
    deliveryPrice = 80;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case ямайка:
    country = Jamaica;
    deliveryPrice = 120;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
