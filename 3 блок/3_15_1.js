// Заданный пароль
var password = "qaz-xsw";

// Проверка надёжности пароля
if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
}
