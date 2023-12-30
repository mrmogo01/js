function filter(whiteList, blackList) {
    // Используем метод filter для отфильтровывания адресов, которых нет в чёрном списке
    var result = whiteList.filter(function(email) {
        return !blackList.includes(email);
    });

    return result;
}

let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru'];
let result = filter(whiteList, blackList);

// Вывод результата в консоль
console.log(result);
