// Координаты первой точки
var x1 = 2;
var y1 = 3;

// Координаты второй точки
var x2 = 10;
var y2 = 5;

// Вычисление ширины и высоты прямоугольника
var width = Math.abs(x2 - x1);
var height = Math.abs(y2 - y1);

// Вычисление площади прямоугольника
var area = width * height;

console.log('Площадь прямоугольника:', area);
