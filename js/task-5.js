let country;
let deliveryPrice;

let message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;

const enterCountry = prompt("Введите страну доставки");
console.log(enterCountry);

switch (enterCountry.toLowerCase()) {
  case австралия:
    country = Австралию;
    deliveryPrice = 170;
    alert(message);
    break;

  case китай:
    country = Китай;
    deliveryPrice = 100;
    alert(message);
    break;

  case чили:
    country = Чили;
    deliveryPrice = 250;
    alert(message);
    break;

  case индия:
    country = Индию;
    deliveryPrice = 80;
    alert(message);
    break;

  case ямайка:
    country = Ямайку;
    deliveryPrice = 120;
    alert(message);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
