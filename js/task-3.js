const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enterPassword = confirm("Введите пароль");
console.log(enterPassword);

if (enterPassword === null) {
  message = "Отменено пользователем!";
}

const userPassword = prompt("Введите свой пароль");
console.log(userPassword === ADMIN_PASSWORD);

if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (userPassword !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
