function remove() {
    console.log("remove");
}

function add() {
    let value = document.getElementById("todo-input").value;
    if (value === "") { return; }
    
    document.getElementById("todo-input").value = '';
    let listItem = document.createElement("li");
    listItem.textContent = value;
    let list = document.getElementById("list").appendChild(listItem)
}