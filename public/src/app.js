let addTodoBtn = document.getElementById("add-todo");
let todoContainer = document.getElementById("todo-container");
let inputField = document.getElementById("input-field");

addTodoBtn.addEventListener("click", function() {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.backgroundColor = "lightgrey";
    })

    paragraph.addEventListener("dblclick", function() {
        todoContainer.removeChild(paragraph);
    })
})