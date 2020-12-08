const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enterPassword = prompt("Введите пароль");
console.log(enterPassword);

if (enterPassword === null) {
  message = "Отменено пользователем!";
  alert(message);
}

message =
  enterPassword.toLowerCase() === ADMIN_PASSWORD
    ? "Добро пожаловать!"
    : "Доступ запрещен, неверный пароль!";

alert(message);

// if (userPassword.toLoverCase() === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else if (userPassword !== ADMIN_PASSWORD) {
//   message = "Доступ запрещен, неверный пароль!";
// }
