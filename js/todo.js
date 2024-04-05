const toDoForm = document.querySelector("#todo-aside #todo-form");
const toDoinput = toDoForm.querySelector("#todo-aside input");
const toDoList = document.querySelector("#todo-aside #todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoinput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoinput.value = "";
  todos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintToDo);
  todos = parsedTodos;
}
