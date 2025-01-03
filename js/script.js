// SELEÇÃO DE ELEMENTOS
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const filterSelect = document.querySelector("#filter-select");
const eraseButton = document.querySelector("#erase-button");

let oldInputValue;

// Função para salvar no localStorage
const saveTodosToLocalStorage = () => {
    const todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        const todoTitle = todo.querySelector("h3").innerText;
        const isDone = todo.classList.contains("done");
        todos.push({ text: todoTitle, done: isDone });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Função para carregar os todos do localStorage
const loadTodosFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        saveTodo(todo.text, todo.done);
    });
}

// Função para salvar uma nova tarefa
const saveTodo = (text, done = false) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    if (done) todo.classList.add("done");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    saveTodosToLocalStorage();  // Salva no localStorage após adicionar a tarefa
}

// Função para atualizar a tarefa
const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    })
    saveTodosToLocalStorage();  // Salva no localStorage após editar
}

// FUNÇÕES DE CONTROLE DE FORMS
const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const deleteTodo = (todo) => {
    todo.remove();
    saveTodosToLocalStorage();  // Salva no localStorage após remover
}

// Função de buscar tarefas
const searchTodos = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const todos = document.querySelectorAll(".todo");

    todos.forEach(todo => {
        const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
        if (todoTitle.includes(searchTerm)) {
            todo.style.display = "flex";  // Exibe a tarefa
        } else {
            todo.style.display = "none";  // Oculta a tarefa
        }
    });
}

// Função de filtrar tarefas
const filterTodos = () => {
    const filterValue = filterSelect.value;
    const todos = document.querySelectorAll(".todo");

    todos.forEach(todo => {
        const isDone = todo.classList.contains("done");

        switch (filterValue) {
            case "all":
                todo.style.display = "flex";
                break;
            case "done":
                todo.style.display = isDone ? "flex" : "none";
                break;
            case "todo":
                todo.style.display = !isDone ? "flex" : "none";
                break;
            default:
                todo.style.display = "flex";
                break;
        }
    });
}

// EVENTOS
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);  // Salva a nova tarefa
        todoInput.value = "";  // Limpa o campo de input
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    // Finalizar Tarefa
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
        saveTodosToLocalStorage();  // Salva no localStorage após alterar o status
    }

    // Editar Terefa
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

    // Remover tarefa
    if (targetEl.classList.contains("remove-todo")) {
        deleteTodo(parentEl);  // Remove a tarefa e salva no localStorage
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;
    if (editInputValue) {
        updateTodo(editInputValue);  // Atualiza a tarefa
    }
    toggleForms();
    saveTodosToLocalStorage();  // Salva no localStorage após editar
})

// Evento de busca
searchInput.addEventListener("input", searchTodos);

// Evento de filtro
filterSelect.addEventListener("change", filterTodos);

// Evento de limpar busca
eraseButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    searchTodos(e);  // Chama a função de busca para limpar a pesquisa
})

// Carregar tarefas ao iniciar a página
loadTodosFromLocalStorage();
