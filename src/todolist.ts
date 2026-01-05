const toDoInput = document.querySelector(".todo-value") as HTMLInputElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const handleSubmit = (e: Event) => {
  e.preventDefault();

  if (!toDoInput.value.trim()) return;

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: toDoInput.value,
    isComplete: false,
  };

  addTodoToDom(newTodo);
  todos.push(newTodo);
  saveTodosToLocalStorage();

  toDoInput.value = "";
  toDoInput.focus();
};

const addTodoToDom = (todo: Todo) => {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li onclick="removeTodo('${todo.id}')">
        ${todo.title}
        <span class="icon deleteIcon">
          <i class="fas fa-trash"></i>
        </span>
     </li>`
  );
};

const saveTodosToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return true;
};

function removeTodo(todoID: string) {
  todos = todos.filter((todo) => todo.id !== todoID);
  saveTodosToLocalStorage();

  todoList.innerHTML = "";
  todos.forEach((todo) => addTodoToDom(todo));
}

// @ts-ignore
window.removeTodo = removeTodo;

addTodo.addEventListener("click", (e) => handleSubmit(e));

window.addEventListener("DOMContentLoaded", () =>
  todos.forEach((todo) => addTodoToDom(todo))
);

clearTodos.addEventListener("click", () => {
  todos = [];
  saveTodosToLocalStorage();
  todoList.innerHTML = "";
});
