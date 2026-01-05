const toDoInput = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const deleteIcon = document.querySelector(".deleteIcon");
const todoList = document.querySelector(".todoList");
const todos = JSON.parse(localStorage.getItem("todos") || "[]");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: toDoInput.value,
        isComplite: false,
    };
    addTodoToDom(newTodo);
    todos.push(newTodo);
    saveTodosToLocalStorage();
    toDoInput.value = "";
    toDoInput.focus();
};
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML("beforeend", `<li>
          ${todo.title}<span class="icon deleteIcon" 
            ><i class="fas fa-trash"></i
          ></span>
        </li>`);
};
const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
};
addTodo.addEventListener("click", (e) => handleSubmit(e));
window.addEventListener("DOMContentLoaded", () => todos.forEach((todo) => addTodoToDom(todo)));
export {};
//# sourceMappingURL=todolist.js.map