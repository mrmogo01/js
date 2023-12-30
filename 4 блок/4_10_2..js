// перемешиваниe массива методом тасования Фишера-Йейтса
function shuffleArray(array) {
    var currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

// упорядоченный массив
function createOrderedArray(count) {
    var orderedArray = [];
    for (var i = 1; i <= count; i++) {
        orderedArray.push(i);
    }
    return orderedArray;
}

var count = 5;

// Создание и вывод упорядоченного массива
var orderedArray = createOrderedArray(count);
console.log('Упорядоченный массив:', orderedArray);

// Перемешивание массива
var shuffledArray = shuffleArray(orderedArray.slice()); // Создаем копию, чтобы не изменять оригинальный массив
console.log('Перемешанный массив:', shuffledArray);
