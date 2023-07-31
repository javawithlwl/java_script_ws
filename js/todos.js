const idShowTodos = document.getElementById("idShowTodos")
const idTodo = document.getElementById("idTodo");
todos = []

editIndex = -1;
function deleteTodo(todo) {
    let res = confirm(`Are you sure to delete ${todo}?`);
    if (res) {
        index = todos.indexOf(todo)
        if (index != -1) {
            todos.splice(index, 1);
            showTodos();
        }
    }
}
function editTodo(todo) {
    idTodo.value = todo;
    editIndex = todos.indexOf(todo);    
}
function showTodos() {
    if (todos.length == 0) {
        idShowTodos.innerHTML = `<i>No todos are added yet. Please add...</i>`
    } else {
        let str = "<ul>";
        for (let todo of todos) {
            str += `<li>${todo}<span style="float: right"><i class="fa fa-edit" onClick="editTodo('${todo}')"></i>|<i class="fa fa-trash" onClick="deleteTodo('${todo}')"></i></li></span>`
        }
        str += "</ul>";
        idShowTodos.innerHTML = str;
    }
}
idTodo.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let value = event.target.value;
        if (value !== "" && editIndex != -1) {
            todos[editIndex]= value;
        }else{
            todos.push(value);
        }
        event.target.value = "";
        showTodos();
    }
});
showTodos();