function createStudentCard(name, age) {

    var studentCard = document.createElement('div');

    var nameHeader = document.createElement('h2');
    nameHeader.textContent = name;

    var ageSpan = document.createElement('span');
    ageSpan.textContent = 'Возраст: ' + age + ' лет';

    studentCard.appendChild(nameHeader);
    studentCard.appendChild(ageSpan);

    document.body.appendChild(studentCard);
}

createStudentCard('Игорь', 17);
