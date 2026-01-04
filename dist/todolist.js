const toDoInput = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const deleteIcon = document.querySelector(".deleteIcon");
const todoList = document.querySelector(".todoList");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: toDoInput.value,
        isComplite: false,
    };
    addTodoToDom(newTodo);
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
addTodo.addEventListener("click", (e) => handleSubmit(e));
export {};
//# sourceMappingURL=todolist.js.map