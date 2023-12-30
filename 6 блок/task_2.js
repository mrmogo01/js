function filter(objects, property, value) {
    return objects.filter(function(obj) {
        return obj[property] === value;
    });
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
];

let result = filter(objects, 'name', 'Иван');

console.log(result);
