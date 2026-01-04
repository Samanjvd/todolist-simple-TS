const toDoInput = document.querySelector(".todo-value") as HTMLInputElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement;
const deleteIcon = document.querySelector(".deleteIcon") as HTMLButtonElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isComplite: boolean;
}

const handleSubmit = (e: Event) => {
  e.preventDefault();

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: toDoInput.value,
    isComplite: false,
  };

  addTodoToDom(newTodo);
  toDoInput.value = "";
  toDoInput.focus();
};

const addTodoToDom = (todo: Todo) => {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>
          ${todo.title}<span class="icon deleteIcon" 
            ><i class="fas fa-trash"></i
          ></span>
        </li>`
  );
};

addTodo.addEventListener("click", (e) => handleSubmit(e));
