const main = document.querySelector("main");

const todoApp = document.createElement("div");
todoApp.classList.add("todo-app");

const header = document.createElement("Header");
const h1 = document.createElement("h1");
h1.innerText = "To-Do List";
header.append(h1);

const inputSection = document.createElement("div");
inputSection.classList.add("input-section");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "taskInput");
input.setAttribute("placeholder", "Add a new task...");

const addBtn = document.createElement("button");
addBtn.setAttribute("id", "addBtn");
addBtn.classList.add("btn-add");
addBtn.textContent = "Add";

inputSection.append(input, addBtn);

const taskList = document.createElement("ul");
taskList.setAttribute("id", "taskList");
taskList.classList.add("task-list");

todoApp.append(header, inputSection, taskList);
main.append(todoApp);



const tasks = new Array();
// tasks.push({description:'asdasdas'})

console.log(localStorage.getItem("tasks"));

if (localStorage.getItem("tasks")) {
    tasks.push(...JSON.parse(localStorage.getItem("tasks")));
}

renderTasks();


function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const ListItem = document.createElement("li");
        ListItem.classList.add("task-item");
        ListItem.innerHTML = `
            <div class="task-text">🎯 NO TASK FOUND...</div>
        `;
        taskList.append(ListItem);
        return;
    }

    tasks.forEach(( description, index) => {
        const ListItem = document.createElement("li");
        ListItem.classList.add("task-item");
        ListItem.innerHTML = `
            <div class="task-text" data-id= ${index}>${description}</div>
            <div class="task-actions">
                <div class="task-actions">
                    <button class="btn-edit" onclick="editTask(${index})">Edit</button>
                    <button class="btn-delete" onclick="delTask(${index})">Delete</button>
                </div>
            </div>
        `;
        taskList.append(ListItem);
    });
};
function editTask(index) {
    let consent = confirm(
        'Are you sure you want to edit this task?'
    );
    if (!consent) return;

    input.value = tasks[index];
    addBtn.textContent = "Save";

    tasks.splice(index, 1);    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
};
function delTask(index) {
    let consent = confirm(
        'Are you sure you want to delete this task?'
    );
    if (!consent) return;

    tasks.splice(index, 1);    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
};
function addTask() {
    if (input.value.trim() === "") return;
    let description = input.value;
    tasks.unshift(description);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    input.value = "";
    addBtn.textContent = "Add";
}
addBtn.addEventListener("click", addTask);
