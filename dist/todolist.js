const toDoInput = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDoInput.value.trim())
        return;
    const newTodo = {
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
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML("beforeend", `<li onclick="removeTodo('${todo.id}')">
        ${todo.title}
        <span class="icon deleteIcon">
          <i class="fas fa-trash"></i>
        </span>
     </li>`);
};
const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
};
function removeTodo(todoID) {
    todos = todos.filter((todo) => todo.id !== todoID);
    saveTodosToLocalStorage();
    todoList.innerHTML = "";
    todos.forEach((todo) => addTodoToDom(todo));
}
// @ts-ignore
window.removeTodo = removeTodo;
addTodo.addEventListener("click", (e) => handleSubmit(e));
window.addEventListener("DOMContentLoaded", () => todos.forEach((todo) => addTodoToDom(todo)));
clearTodos.addEventListener("click", () => {
    todos = [];
    saveTodosToLocalStorage();
    todoList.innerHTML = "";
});
export {};
//# sourceMappingURL=todolist.js.map