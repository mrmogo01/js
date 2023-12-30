function arrSort(arr) {
    // Используем метод sort для сортировки массива по возрастанию
    var sortedArray = arr.slice().sort(function(a, b) {
        return a - b;
    });

    return sortedArray;
}

var inputArray = [2,5,1,3,4];
var sortedResult = arrSort(inputArray);

// Вывод результата в консоль
console.log(sortedResult);
