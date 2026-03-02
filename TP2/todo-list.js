const todoList = [{
  name: 'review course',
  dueDate: '2025-09-29'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  // Loop over every toDo object and append it to "todoListHTML"
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
      <div>${todo.name}</div>
      <div>${todo.dueDate}</div>
      <button class="delete-todo-button" data-index="${i}">Delete</button>
    `;
    todoListHTML += html;
  }

  // Show the objects inside the class "js-todo-list"
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  // Loop over every delete button and add an eventListener that deletes the toDo and rerender the Tasks
  document.querySelectorAll('.delete-todo-button').forEach((button) => {
    button.addEventListener('click', () => {
      const index = parseInt(button.dataset.index);
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // Add these values to the variable "todoList"
  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';

  renderTodoList();
}