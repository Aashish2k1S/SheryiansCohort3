const main = document.querySelector("main");

const todoApp = document.createElement("div");
todoApp.classList.add("todo-app");

const header = document.createElement("Header");
const h1 = document.createElement("h1");
h1.innerText = "To-Do List";
header.append(h1);

const inputSection = document.createElement("div");
inputSection.classList.add("input-section");

const id = document.createElement("span");
id.setAttribute("id", "taskId");
id.style.display = "none";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "taskInput");
input.setAttribute("placeholder", "Add a new task...");

const addBtn = document.createElement("button");
addBtn.setAttribute("id", "addBtn");
addBtn.classList.add("btn-add");
addBtn.textContent = "Add";

inputSection.append(id, input, addBtn);

const taskList = document.createElement("ul");
taskList.setAttribute("id", "taskList");
taskList.classList.add("task-list");

todoApp.append(header, inputSection, taskList);
main.append(todoApp);

function Task(id, description) {
  this.id = id;
  this.description = description;
}
const tasks = new Array();

if (localStorage.getItem("tasks")) {
  tasks.push(...JSON.parse(localStorage.getItem("tasks")));
  renderTasks();
}

function addTask (id = tasks.length+1, description) {
  tasks.push(new Task(id, description));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
};
function deleteTask (id) {
  const index = tasks.findIndex((task) => task.id == id);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
};
function renderTasks(id = 0) {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const ListItem = document.createElement("li");
    ListItem.classList.add("task-item");
    ListItem.setAttribute("data-id", 0);
    ListItem.innerHTML = `
            <div class="task-text">🎯 NO TASK FOUND...</div>
    `;
    taskList.append(ListItem);
    return;
  }

  if (id !== 0) {
    const index = tasks.findIndex((task) => task.id == id);
    tasks.splice(index , 1);
  }

//   tasks.sort(({ id: a }, { id: b }) => a - b);

  tasks.forEach(({ id, description }) => {
    const ListItem = document.createElement("li");
    ListItem.classList.add("task-item");
    ListItem.setAttribute("data-id", id);
    ListItem.innerHTML = `
            <div class="task-text" data-id= ${id}>${description}</div>
            <div class="task-actions">
                <button class="btn-edit" data-id= ${id}>Edit</button>
                <button class="btn-delete" data-id= ${id}>Delete</button>
            </div>
        `;
    taskList.append(ListItem);
  });
};


const DOMaddBtn = document.querySelector("#addBtn");
DOMaddBtn.addEventListener("click", () => {
  const DOMinput = document.querySelector("#taskInput");
  if (DOMinput.value.trim() === "") return;
  
  const id = document.querySelector("#taskId");

  if (id.textContent !== "") {
    editTask(id.textContent, DOMinput.value);
    id.textContent = "";
  } else {
    addTask(tasks.length, DOMinput.value);
  }

  DOMinput.value = "";
});


taskList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-delete")) return;
  const consent = confirm("Are you sure you want to delete this task?");
  if (!consent) return;
  const id = Number(e.target.dataset.id);
  deleteTask(id);
});


taskList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-edit")) return;
  const id = Number(e.target.dataset.id);
  const DOMinput = document.querySelector("#taskInput");
  const DOMId = document.querySelector("#taskId");
  DOMinput.value = tasks[id].description;
  DOMId.textContent = id;
  renderTasks(id);
});

console.log(tasks);
console.log(localStorage.getItem("tasks"));

