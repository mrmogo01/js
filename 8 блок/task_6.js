document.addEventListener('DOMContentLoaded', function() {
    createTodoApp(document.getElementById('todo-app'), 'Мои дела', 'my');
});

function toggleButtonState() {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    addButton.disabled = !todoInput.value.trim(); 
}

document.addEventListener('DOMContentLoaded', function() {
    createTodoApp(document.getElementById('todo-app'), 'Мои дела', 'my');
    document.getElementById('todo-input').addEventListener('input', toggleButtonState);
});
let todos = []; 

function createTodoApp(container, title, listName) {
  
    function createTodoItem({ name, done }) {
        const id = todos.length + 1; 
        return { id, name, done };
    }

    function addTodoItem(todoItem) {
        todos.push(todoItem); 
        renderTodoItem(todoItem); 
        saveData(listName, todos); 
    }

}

function removeTodoItem(id) {
    const index = todos.findIndex(item => item.id === id); 
    if (index !== -1) {
        todos.splice(index, 1); 
        removeTodoItemFromDOM(id);
        saveData(listName, todos); 
    }
}

function toggleTodoStatus(id) {
    const todoItem = todos.find(item => item.id === id); 
    if (todoItem) {
        todoItem.done = !todoItem.done; 
        updateTodoItemStatusInDOM(id, todoItem.done); 
        saveData(listName, todos); 
    }
}

function saveData(key, data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
}

function loadData(key) {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : [];
}

function checkLocalStorage(key) {
    return !!localStorage.getItem(key);
}

document.addEventListener('DOMContentLoaded', function() {
    const listName = 'my'; 
    if (checkLocalStorage(listName)) {
        todos = loadData(listName); 
        renderTodoList(); 
    }

    createTodoApp(document.getElementById('todo-app'), 'Мои дела', listName);
});



