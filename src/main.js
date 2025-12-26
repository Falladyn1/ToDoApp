const template = document.getElementById("todo_template");
const container = document.getElementById("todo_container");


const todos = [{
    id: "1",
    title:"Kupic mleko",
    decription: "trzeba kupic mleko",
    status: "pending",
    priority: "medium"
}];


const renderToDo = () => {
    todos.forEach((task) => {
        const todoItem = template.content.cloneNode(true);
        todoItem.querySelector(".todo_item_name").innerText = task.title;
        // todoItem.querySelector(".todo_priority").innerText = task.priority;
        todoItem.querySelector(".todo_item_desc").innerText = task.decription;
        todoItem.querySelector(".todo_status").innerText = task.status;
        container.appendChild(todoItem);
    });
}

renderToDo();