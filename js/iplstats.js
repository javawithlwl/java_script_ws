
const idTeamSelector = document.querySelector("#idTeamSelector");
google.charts.load('current', { 'packages': ['corechart'] });
function loadPlayersData() {
    return fetch("data/players.json").then(resp => resp.json()).then(data => { return data; });

}

let players = [];
let teams = [];

function init() {
    let teamDetails = loadPlayersData();
    teamDetails.then(data => {
        for (let team of data) {
            teams.push({ 'name': team.name, 'label': team.label });
            for (let player of team.players) {
                players.push({ 'name': player.name, 'team': team.label, 'amount': player.amount, 'role': player.role });
            }
        }
        showTeamDetails();
        showTeamStats();
    });
}
function showTeamDetails() {
    let selectElement = document.createElement("select");
    selectElement.className = "form-control";
    selectElement.addEventListener("change", showPlayerDetails);
    selectElement.id = "idTeamName";
    selectElement.innerHTML = `<option value="">Select Team</option>`;
    for (let team of teams) {
        selectElement.innerHTML += `<option value="${team.label}">${team.name} (${team.label})</option>`;
    }
    idTeamSelector.append(selectElement);
}
function showTeamStats() {

    let teamAmount = [["teamName", "amount"]];
    let teamPlayerCount = [["teamName", "count"]];
    for (let team of teams) {
        let teamPlayers = players.filter(player => player.team === team.label);
        let amount = teamPlayers.map(player => player.amount).reduce((a, b) => a + b, 0);
        let count = teamPlayers.length;
        teamAmount.push([team.name, amount]);
        teamPlayerCount.push([team.name, count]);
    }
    google.charts.setOnLoadCallback(()=>drawRoleCountChart(teamPlayerCount));
    google.charts.setOnLoadCallback(()=>drawAmountChart(teamAmount));
}

function drawRoleCountChart(teamPlayerCount) {
    var data = google.visualization.arrayToDataTable(teamPlayerCount);
    var options = {
        title: 'Team and Player Count',
        'width':600,
        'height':300
      };
    var chart = new google.visualization.PieChart(document.getElementById('idShowTeamRoleStats'));
    chart.draw(data, options);
}
function drawAmountChart(teamAmount) {
    var data = google.visualization.arrayToDataTable(teamAmount);
    var options = {
        title: 'Team and Amount',
        'width':600,
        'height':300
      };
    var chart = new google.visualization.ColumnChart(document.getElementById('idShowTeamAmountStats'));
    chart.draw(data, options);
}
function showPlayerDetails() {
    let label = document.querySelector("#idTeamName").value;
    let idShowPlayers = document.querySelector("#idShowPlayers");
    if (label !== "") {
        let teamPlayers = players.filter(player => player.team === label);
        idShowPlayers.innerHTML = "";
        let table = document.createElement("table");
        table.className = "table table-striped";
        table.innerHTML = `<thead><tr><th>Name</th><th>Role</th><th>Amount</th><th>Team</th></tr></thead>`;
        let tbody = document.createElement("tbody");
        for (let player of teamPlayers) {
            tbody.innerHTML += `<tr><td>${player.name}</td><td>${player.role}</td><td>${player.amount}</td><td>${player.team}</td></tr>`;
        }
        table.append(tbody);
        idShowPlayers.append(table);
    } else {
        idShowPlayers.innerHTML = "";
    }
}
init();
