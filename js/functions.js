const idYear = document.querySelector("#idYear")
const idMonth = document.querySelector("#idMonth")

years = []
months = []
month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"]
for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(i)
 }
for (let i = 1; i <=12; i++) {
    months.push(i)
}
years.forEach(year => {
    console.log(year);
    let option = document.createElement("option")
    option.value = year
    option.text = year
    idYear.appendChild(option)
});
months.forEach(month => {
    console.log(month);
    let option = document.createElement("option")
    option.value = month
    option.text = month_name[month-1]
    idMonth.appendChild(option)
});


isLeapYear = (year) =>(year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

function getNumberOfDays(year, month) {
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    else {
        return 31;
    }
}

function showDaysInformation(year, month) {
    let str = "";
    let days = getNumberOfDays(year, month);
    if(month==2 && isLeapYear(year)){
        str += `Year ${year} is a leap year, and February has 29 days.`;
    }else if(month==2 && !isLeapYear(year)){
        str += `Year ${year} is not a leap year, and February has 28 days.`;
    }else{
        str += `Year ${year} and Month ${month_name[month-1]} has ${days} days.`;
    }
    document.querySelector("#idShowDaysInfo").innerHTML = `<i>${str}</i>`;
}

idYear.addEventListener("change", function(){
    let year = idYear.value;
    let month = idMonth.value;
    showDaysInformation(year, month);
});
idMonth.addEventListener("change", function(){
    let year = idYear.value;
    let month = idMonth.value;
    showDaysInformation(year, month);
})