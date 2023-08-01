const idCountry = document.querySelector("#idCountry");
const idCategory = document.querySelector("#idCategory");
const apiKey = "cfaf5fcdebfb4d7293720a9aa6ffc113"
const baseUrl = "https://newsapi.org/v2/top-headlines";
const idShowTopHeadings = document.querySelector("#idShowTopHeadings");

idCountry.addEventListener("change", () => {
    showNewsItems();

});

idCategory.addEventListener("change", () => {
    showNewsItems();
});
function showNewsArticles(articles) {
    idShowTopHeadings.innerHTML = "";
    for (let article of articles) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${article.urlToImage} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">
                        ${article.description}
                    </p>
                    <p>
                        <a href="${article.url}" target="_blank">Read more...</a>
                    </p>
            </div>`;
        idShowTopHeadings.appendChild(card);
    }


}
function showNewsItems() {
    let country = idCountry.value;
    let category = idCategory.value;
    let url = `${baseUrl}?country=${country}&category=${category}&apiKey=${apiKey}`;
    fetch(url).then(resp => resp.json())
        .then(data => {
            let articles = data.articles;
            showNewsArticles(articles);
        }).catch(err => {
            console.log(err);
        });
}

showNewsItems();


const idSend = document.querySelector("#idSend");
const idShowChat = document.querySelector("#idShowChat");
const idMessage = document.querySelector("#idMessage");

idSend.addEventListener("click", () => {
    let message = idMessage.value;
    if (message !== "") {
        showChatResponse(message);
    }
});

function showChatResponse(message) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer ${API_KEY}");

    var raw = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": `${message}`
            }
        ],
        "temperature": 0.7
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
        .then(response => response.json())
        .then(result => {
            idShowChat.innerHTML = result.choices[0].message.content;
            idMessage.value = "";
        })
        .catch(error => console.log('error', error));
}
