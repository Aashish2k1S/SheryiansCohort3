const main = document.querySelector("main");

const todoApp = document.createElement("div");
todoApp.classList.add("todo-app");

const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.innerText = "To-Do List";
header.append(h1);

const inputSection = document.createElement("div");
inputSection.classList.add("input-section");

const taskId = document.createElement("span");
taskId.id = "taskId";
taskId.style.display = "none";

const input = document.createElement("input");
input.type = "text";
input.id = "taskInput";
input.placeholder = "Add a new task...";

const addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.classList.add("btn-add");
addBtn.textContent = "Add";

inputSection.append(taskId, input, addBtn);

const taskList = document.createElement("ul");
taskList.id = "taskList";
taskList.classList.add("task-list");

todoApp.append(header, inputSection, taskList);
main.append(todoApp);

function Task(id, description) {
  this.id = id;
  this.description = description;
}

const tasks = [];

if (localStorage.getItem("tasks")) {
  tasks.push(...JSON.parse(localStorage.getItem("tasks")));
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getNextId() {
  return tasks.length
    ? Math.max(...tasks.map(task => task.id)) + 1
    : 0;
}

function addTask(description) {
  tasks.push(new Task(getNextId(), description));

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) return;

  tasks.splice(index, 1);

  saveTasks();
  renderTasks();
}

function editTask(id, description) {
  const task = tasks.find(task => task.id === Number(id));

  if (!task) return;

  task.description = description;

  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
      <div class="task-text">
        🎯 NO TASK FOUND...
      </div>
    `;

    taskList.append(li);
    return;
  }

  tasks.forEach(({ id, description }) => {
    const li = document.createElement("li");

    li.classList.add("task-item");

    li.innerHTML = `
      <div class="task-text">${description}</div>

      <div class="task-actions">
        <button class="btn-edit" data-id="${id}">
          Edit
        </button>

        <button class="btn-delete" data-id="${id}">
          Delete
        </button>
      </div>
    `;

    taskList.append(li);
  });
}

renderTasks();

addBtn.addEventListener("click", () => {
  const description = input.value.trim();

  if (!description) return;

  const editId = taskId.textContent;

  if (editId !== "") {
    editTask(editId, description);

    taskId.textContent = "";
    addBtn.textContent = "Add";
  } else {
    addTask(description);
  }

  input.value = "";
});

taskList.addEventListener("click", e => {
  if (e.target.classList.contains("btn-delete")) {
    const id = Number(e.target.dataset.id);

    const consent = confirm(
      "Are you sure you want to delete this task?"
    );

    if (!consent) return;

    deleteTask(id);
  }

  if (e.target.classList.contains("btn-edit")) {
    const id = Number(e.target.dataset.id);

    const task = tasks.find(task => task.id === id);

    if (!task) return;

    input.value = task.description;

    taskId.textContent = id;

    addBtn.textContent = "Save";
  }
});