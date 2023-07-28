function showSystemDate(){
    let date = new Date();
    document.querySelector("#idShowDate").innerHTML = `<strong><i>${date}</i></strong>`;
}
function bulbOn(){
    document.querySelector("#idBulb").src = "./img/pic_bulbon.gif";
}
function bulbOff(){
    document.querySelector("#idBulb").src = "./img/pic_bulboff.gif";
}

function calculateEMI(){
    let p = document.getElementById("idLoanAmount").value;
    let r = document.getElementById("idInterestRate").value;
    let n = document.getElementById("idLoanTenure").value;
    r = r / (12 * 100);
    let emi = p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    document.getElementById("idEMI").value = emi.toFixed(2);
}