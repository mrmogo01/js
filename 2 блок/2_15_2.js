// Заданные числа a и b
var a = 13.123456789;
var b = 2.123;

// Заданная точность n
var n = 6;

// Вычисление дробных частей чисел a и b с точностью n
var fractionalPartA = a % 1;
var fractionalPartB = b % 1;

// Вывод дробных частей
console.log('Дробная часть числа a:', fractionalPartA.toFixed(n));
console.log('Дробная часть числа b:', fractionalPartB.toFixed(n));