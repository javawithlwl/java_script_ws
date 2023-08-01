const user_data = {
    "name": "Charan",
    "age": 32,
    "isMarried": true,
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001"
    },
    "emails":["charan.c@gmail.com","charan.c@amazon.com"]
}

const idUserDetails = document.querySelector("#idUserDetails");

idUserDetails.innerHTML = `<div class="card">
<div class="card-body">
  <h5 class="card-title">${user_data.name}</h5>
  <p class="card-text">
       ${user_data.address.street}, ${user_data.address.city}, ${user_data.address.state}, ${user_data.address.zip}
  </p>
  <p>
        ${user_data.emails}
  </p>
  
</div>
</div>`

const idShowRecentUsers = document.querySelector("#idShowRecentUsers");

fetch("data/user_data.json")
    .then(resp=>resp.json())
    .then(data=>{
        showUserDetails(data);
    })
    .catch(err=>{
        console.log(err);
});

function showUserDetails(userArr){
    let str = "<ul>";
    for(let user of userArr){
        str += `<li>${user.name} - ${user.age} - ${user.city}</li>`;
    }
    str += "</ul>";
    idShowRecentUsers.innerHTML = str;
}