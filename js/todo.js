const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const lili = event.target.parentElement;
  lili.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(lili.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const lists = document.createElement("li");
  lists.id = newTodo.id;
  const spann = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerHTML = "&#10006;";
  btn.addEventListener("click", deleteToDo);
  lists.appendChild(spann);
  lists.appendChild(btn);
  lists.style.display = "flex";
  lists.style.width = "max-content";
  lists.style.padding = "16px";
  lists.style.justifyContent = "center";
  lists.style.alignItems = "center";
  lists.style.gap = "8px";
  spann.innerText = newTodo.text;
  toDoList.appendChild(lists);
  btn.style.backgroundColor = "#BCC0C6"; // Set button background color
  btn.style.width = "24px";
  btn.style.height = "24px";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";
  btn.style.color = "#fff"; // Set button text color
  btn.style.border = "none"; // Remove button border
  btn.style.paddingTop = "3px"; // Set button padding
  btn.style.cursor = "pointer"; // Set cursor style
}

function handdleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handdleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
