let country;
let deliveryPrice;

const enterCountry = prompt("Введите страну доставки");
console.log(enterCountry.toLowerCase(enterCountry));

switch (enterCountry) {
  case австралия:
    country = Австралию;
    deliveryPrice = 170;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case китай:
    country = Китай;
    deliveryPrice = 100;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case чили:
    country = Чили;
    deliveryPrice = 250;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case индия:
    country = Индию;
    deliveryPrice = 80;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case ямайка:
    country = Ямайку;
    deliveryPrice = 120;
    alert(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
