// task_2.js

function createStudentCard(student) {

    var studentCard = document.createElement('div');

    var nameHeader = document.createElement('h2');
    nameHeader.textContent = student.name;

    var ageSpan = document.createElement('span');
    ageSpan.textContent = 'Возраст: ' + student.age + ' лет';

    studentCard.appendChild(nameHeader);
    studentCard.appendChild(ageSpan);

    document.body.appendChild(studentCard);
}

let studentObj = {
    name: 'Игорь',
    age: 17
};

createStudentCard(studentObj);
