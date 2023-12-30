// генерация случайного числа в заданном диапазоне
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация массива
function generateRandomArray(count, n, m) {
    var randomArray = [];
    for (var i = 0; i < count; i++) {
        randomArray.push(getRandomNumberInRange(n, m));
    }
    return randomArray;
}

// Заданные значения count, n и m
var count = 100;
var n = 0;
var m = 100;

// Генерация массива и вывод результата
var randomArray = generateRandomArray(count, n, m);
console.log(randomArray);
