function generateStudentId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Функция вывода одного студента в таблицу
function getStudentItem(studentObj) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${studentObj.lastName} ${studentObj.firstName} ${studentObj.patronymic}</td>
        <td>${studentObj.faculty}</td>
        <td>${studentObj.birthDate.toLocaleDateString()} (${calculateAge(studentObj.birthDate)})</td>
        <td>${studentObj.enrollmentYear}-${studentObj.enrollmentYear + 4} (${calculateCourse(studentObj.enrollmentYear)})</td>
    `;
    return tableRow;
}

// Функция расчета возраста на основе даты рождения
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Функция расчета курса на основе года начала обучения
function calculateCourse(enrollmentYear) {
    const today = new Date();
    const course = today.getFullYear() - enrollmentYear + 1;
    return course > 4 ? 'закончил' : `${course} курс`;
}

// Функция отрисовки всех студентов
function renderStudentsTable(studentsArray) {
    const tableContainer = document.getElementById('studentsTableContainer');
    tableContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных
    const table = document.createElement('table');
    table.className = 'table table-bordered mt-3';

    // Создаем заголовок таблицы
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th onclick="sortStudents('name')">Ф. И. О.</th>
            <th onclick="sortStudents('faculty')">Факультет</th>
            <th onclick="sortStudents('birthDate')">Дата рождения и возраст</th>
            <th onclick="sortStudents('enrollmentYear')">Годы обучения</th>
        </tr>
    `;
    table.appendChild(tableHeader);

    // Создаем строки таблицы с данными студентов
    const tableBody = document.createElement('tbody');
    studentsArray.forEach(student => {
        const tableRow = getStudentItem(student);
        tableBody.appendChild(tableRow);
    });
    table.appendChild(tableBody);

    tableContainer.appendChild(table);
}

// Обработчик события отправки формы
document.getElementById('addStudentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const patronymic = document.getElementById('patronymic').value.trim();
    const birthDate = new Date(document.getElementById('birthDate').value);
    const enrollmentYear = parseInt(document.getElementById('enrollmentYear').value);
    const faculty = document.getElementById('faculty').value.trim();

    // Валидация данных
    if (!firstName || !lastName || !patronymic || !birthDate || isNaN(enrollmentYear) || !faculty) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
    }

    // Добавление нового студента в массив
    const newStudent = {
        id: generateStudentId(),
        firstName: firstName,
        lastName: lastName,
        patronymic: patronymic,
        birthDate: birthDate,
        enrollmentYear: enrollmentYear,
        faculty: faculty
    };

    studentsList.push(newStudent);

    // Очистка полей формы
    document.getElementById('addStudentForm').reset();

    // Перерисовка таблицы
    renderStudentsTable(studentsList);
});

// Функция сортировки студентов
function sortStudents(sortField) {
    studentsList.sort((a, b) => {
        if (sortField === 'name') {
            const fullNameA = `${a.lastName} ${a.firstName} ${a.patronymic}`.toLowerCase();
            const fullNameB = `${b.lastName} ${b.firstName} ${b.patronymic}`.toLowerCase();
            return fullNameA.localeCompare(fullNameB);
        } else {
            return a[sortField] > b[sortField] ? 1 : -1;
        }
    });

    // Перерисовка таблицы после сортировки
    renderStudentsTable(studentsList);
}

// Функция фильтрации студентов
function filterStudents() {
    const filterName = document.getElementById('filterName').value.toLowerCase();
    const filterFaculty = document.getElementById('filterFaculty').value.toLowerCase();
    const filterEnrollmentYear = document.getElementById('filterEnrollmentYear').value;

    const filteredStudents = studentsList.filter(student => {
        const fullName = `${student.lastName} ${student.firstName} ${student.patronymic}`.toLowerCase();
        return fullName.includes(filterName) &&
            student.faculty.toLowerCase().includes(filterFaculty) &&
            (filterEnrollmentYear === '' || student.enrollmentYear.toString() === filterEnrollmentYear);
    });

    // Перерисовка таблицы после фильтрации
    renderStudentsTable(filteredStudents);
}

// Добавление обработчиков событий для элементов фильтрации
document.getElementById('filterName').addEventListener('input', filterStudents);
document.getElementById('filterFaculty').addEventListener('input', filterStudents);
document.getElementById('filterEnrollmentYear').addEventListener('input', filterStudents);

// Добавление начальных данных и отрисовка таблицы
studentsList.push({
    id: generateStudentId(),
    firstName: 'Иван',
    lastName: 'Иванов',
    patronymic: 'Иванович',
    birthDate: new Date('1995-05-15'),
    enrollmentYear: 2015,
    faculty: 'Факультет информационных технологий'
});

studentsList.push({
    id: generateStudentId(),
    firstName: 'Екатерина',
    lastName: 'Петрова',
    patronymic: 'Сергеевна',
    birthDate: new Date('1997-02-22'),
    enrollmentYear: 2018,
    faculty: 'Факультет экономики'
});

renderStudentsTable(studentsList);
