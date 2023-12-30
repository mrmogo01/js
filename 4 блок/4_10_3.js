// Функция для перемешивания массива методом тасования Фишера-Йейтса
function shuffleArray(array) {
    var currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

// Создание упорядоченного массива
function createOrderedArray(count) {
    var orderedArray = [];
    for (var i = 1; i <= count; i++) {
        orderedArray.push(i);
    }
    return orderedArray;
}

// Заданное значение count
var count = 5;

// Создание и вывод упорядоченного массива
var orderedArray = createOrderedArray(count);
console.log('Упорядоченный массив:', orderedArray);

// Перемешивание массива
var shuffledArray = shuffleArray(orderedArray.slice()); // Создаем копию, чтобы не изменять оригинальный массив
console.log('Перемешанный массив:', shuffledArray);

// Заданное значение n
var n = 3;

// Поиск индекса элемента в массиве
var index = -1;
for (var i = 0; i < shuffledArray.length; i++) {
    if (shuffledArray[i] === n) {
        index = i;
        break;
    }
}

// Вывод результата
if (index !== -1) {
    console.log('Индекс элемента', n, 'в массиве:', index);
} else {
    console.log('Элемент', n, 'не найден в массиве.');
}