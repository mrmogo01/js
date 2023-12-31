function createStudentsList(listArr) {

    var studentsList = document.createElement('ul');

    listArr.forEach(function(student) {
        var studentItem = document.createElement('li');

        var nameHeader = document.createElement('h2');
        nameHeader.textContent = student.name;

        var ageSpan = document.createElement('span');
        ageSpan.textContent = 'Возраст: ' + student.age + ' лет';

        studentItem.appendChild(nameHeader);
        studentItem.appendChild(ageSpan);

        studentsList.appendChild(studentItem);
    });

    document.body.appendChild(studentsList);
}

let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
];

createStudentsList(allStudents);
