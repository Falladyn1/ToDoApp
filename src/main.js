const template = document.getElementById("todo_template");
const container = document.getElementById("todo_container");
const addInput = document.getElementById("add_input");
const addButton = document.getElementById("add_button");

let todos = []


const renderToDo = () => {
    container.innerHTML = "";
    todos.forEach((task) => {
        const todoItem = template.content.cloneNode(true);
        todoItem.querySelector(".todo_item_name").innerText = task.title;
        // todoItem.querySelector(".todo_priority").innerText = task.priority;
        todoItem.querySelector(".todo_item_desc").innerText = task.description;
        todoItem.querySelector(".todo_status").innerText = task.status;
        container.appendChild(todoItem);
    });
}

fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(data => {
        console.log("Przyszły dane!", data);
        todos = data;
        renderToDo()
    })

addButton.addEventListener("click", () =>{
    const text = addInput.value;

    const newTask = {
        title: text,
        description: "",
        status: "pending",
        priority: "medium",
    }
    console.log(newTask);

    fetch('http://localhost:3000/todos', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(response => response.json())
    .then(savedTask => {
        todos.push(savedTask);
        renderToDo();
    })

    addInput.value = "";
})
