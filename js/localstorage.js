let names = ["Krish","Manoj"];
if(localStorage.getItem("names") === null){
    localStorage.setItem("names",JSON.stringify(names));
}
const idShowNames = document.getElementById("idShowNames");
const idUsername = document.getElementById("idUsername");

function deleteAllNames(){
    if(confirm("Are you sure to delete all names?")){
        localStorage.setItem("names",JSON.stringify([]));
        idShowNames.innerHTML = "";
    }
}

function deleteName(name){
        if(confirm(`Are you sure to delete ${name}?`)){
            let names = JSON.parse(localStorage.getItem("names"));
            let index = names.indexOf(name);
            if(index != -1){
                names.splice(index,1);
                localStorage.setItem("names",JSON.stringify(names));
                showNames();
            }
        }
}

function showNames(){
    let names=localStorage.getItem("names");
    if(names !== ""){
        names = JSON.parse(names);
        let str = "<ul>";
        for(let name of names){
            str += `<li onClick="deleteName('${name}')">${name}</li>`;
        }
        str += "</ul>";
        idShowNames.innerHTML = str;
    }
}
idUsername.addEventListener("keyup",function(event){
        if(event.key === "Enter"){
            let name = event.target.value;
            if(name !== ""){
                let names=JSON.parse(localStorage.getItem("names"));
                names.push(name);
                event.target.value = "";
                localStorage.setItem("names",JSON.stringify(names));               
                showNames();
            }
        }
});

showNames();