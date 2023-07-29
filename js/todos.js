
const idShowTodos = document.getElementById("idShowTodos")
const idTodo = document.getElementById("idTodo");

todos = []
function showTodos(){
    if(todos.length==0){
        idShowTodos.innerHTML = `<i>No todos are added yet. Please add...</i>`
    }else{
        let str = "<ul>";
        for(let todo of todos){
            str += `<li>${todo}</li>`
        }
        str += "</ul>";
        idShowTodos.innerHTML = str;
    }
}

idTodo.addEventListener("keyup", function(event){
    if(event.key==="Enter"){
        let value = event.target.value;
        if(value !== ""){
            todos.push(value);
            event.target.value = "";
            showTodos();
        }
    }
});


showTodos();