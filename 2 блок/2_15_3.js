// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Заданные значения n и m
var n = -10;
var m = 5;

// Генерация двух случайных чисел в диапазоне между n и m включительно
var randomNumber1 = getRandomNumberInRange(n, m);
var randomNumber2 = getRandomNumberInRange(n, m);

// Вывод случайных чисел
console.log('Первое случайное число:', randomNumber1);
console.log('Второе случайное число:', randomNumber2);

// Сравнение результатов
console.log('Первое число > Второго числа:', randomNumber1 > randomNumber2);
console.log('Первое число < Второго числа:', randomNumber1 < randomNumber2);
console.log('Первое число ≥ Второго числа:', randomNumber1 >= randomNumber2);
console.log('Первое число ≤ Второго числа:', randomNumber1 <= randomNumber2);
console.log('Первое число === Второго числа:', randomNumber1 === randomNumber2);
console.log('Первое число ≠ Второго числа:', randomNumber1 !== randomNumber2);
