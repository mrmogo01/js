// Исходные данные
var userName = "анДРеЙ";
var userSurname = "ОвЧИнНИкоВ";

// Приведение первых букв к верхнему регистру, остальных к нижнему
var formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
var formattedUserSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();

// Проверка на изменение и вывод результата
console.log(formattedUserName === userName ? "Имя осталось без изменений" : "Имя было преобразовано");
console.log(formattedUserSurname === userSurname ? "Фамилия осталась без изменений" : "Фамилия была преобразована");

// Вывод преобразованных значений
console.log("Преобразованное имя:", formattedUserName);
console.log("Преобразованная фамилия:", formattedUserSurname);
