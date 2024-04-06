const toDoForm = document.querySelector("#todo-aside #todo-form");
const toDoinput = toDoForm.querySelector("#todo-aside input");
const toDoList = document.querySelector("#todo-aside #todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function cancleDelete(event) {
  event.target.parentElement.style.textDecoration = "none";
  event.target.innerText = "👻";

  event.target.id = "";
  event.target.removeEventListener("click", cancleDelete);
  setTimeout(() => {
    event.target.addEventListener("click", waitDelete);
    event.target.innerText = "✅";
  }, 3100);
}
function waitDelete(event) {
  event.target.innerText = "🖊️";
  event.target.parentElement.style.textDecoration = "line-through";
  event.target.id = "willD";
  event.target.removeEventListener("click", waitDelete);
  event.target.addEventListener("click", cancleDelete);
  setTimeout(() => {
    if (event.target.id === "willD") {
      deleteTodo(event);
    }
  }, 3000);
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
  button.innerText = "✅";
  button.addEventListener("click", waitDelete);
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.padding = "5px 5px 5px 5px";

  li.style.margin = "1rem 0rem";
  li.style.backgroundColor = "rgb(255, 235, 205, 0.6)";
  li.style.borderRadius = "0.6rem";
  li.style.padding = "0.2rem 0.3rem 0.2rem 0.7rem";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  let newTodo = "";
  console.log(toDoinput.value.length);
  if (toDoinput.value.length > 26) {
    const halfLength = Math.floor(toDoinput.value.length / 2);
    newTodo =
      toDoinput.value.substring(0, halfLength) +
      "\n" +
      toDoinput.value.substring(halfLength) +
      "  ";
  } else {
    newTodo = `${toDoinput.value}  `;
  }
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoinput.value = "";
  todos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  console.log(event);
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintToDo);
  todos = parsedTodos;
}
const showTuto = localStorage.getItem("tutorial");
if (showTuto === null || showTuto === "true") {
  const tutorial = [
    {
      text: "Tutorial",
      id: Date.now() - 1,
    },
    {
      text: "<할 일을 적고 엔터를 눌러요>  ",
      id: 1,
    },
    {
      text: "<하단의 글은 클릭으로 내리고 올릴 수 있어요>  ",
      id: 2,
    },
    {
      text: "<체크버튼을 눌러도 3초안에 취소할 수 있어요!!> ",
      id: 6,
    },
    {
      text: "이렇게긴할일을적을일은없을것같지만이상하게넣을수\n있어요코드도많이이상해요너무못해서오래걸렸어요 ",
      id: 19,
    },
    {
      text: "  <**이 튜토리얼은 한번만 보여져요**> ",
      id: 5,
    },

    {
      text: "<Hello도 없앨 수 있어요>  ",
      id: 51223,
    },
  ];
  tutorial.map(paintToDo);
  localStorage.setItem("tutorial", "false");
}
