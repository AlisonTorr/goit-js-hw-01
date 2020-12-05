const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enterPassword = confirm("Введите пароль");
console.log(enterPassword);

if (enterPassword === null) {
  message = "Отменено пользователем!";
  alert(message);
}

const userPassword = prompt("Введите свой пароль");

// if (userPassword.toLoverCase() === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else if (userPassword !== ADMIN_PASSWORD) {
//   message = "Доступ запрещен, неверный пароль!";
// }

message =
  userPassword.toLoverCase() === ADMIN_PASSWORD
    ? "Добро пожаловать!"
    : "Доступ запрещен, неверный пароль!";

alert(message);
