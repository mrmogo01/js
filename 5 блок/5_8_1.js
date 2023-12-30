
function getAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    return age;
}

// Вызов функции с передачей даты рождения
var birthYear = 2007;
var ageResult = getAge(birthYear);

// Вывод результата в консоль
console.log('Возраст:', ageResult);
