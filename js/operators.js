const idAdd = document.querySelector("#idAdd");
const idSub = document.querySelector("#idSub");
const idMul = document.querySelector("#idMul");
const idDiv = document.querySelector("#idDiv");
const idMod = document.querySelector("#idMod");

const idNum1 = document.querySelector("#idNum1");
const idNum2 = document.querySelector("#idNum2");
const idResult = document.querySelector("#idResult");

function getResult(operator){
    let num1 = Number.parseFloat(idNum1.value);
    let num2 = Number.parseFloat(idNum2.value);
    let str = ""
    switch(operator){
        case '+': 
                str = `${num1} + ${num2} = ${num1 + num2}`
                break;
        case '-':
                str = `${num1} - ${num2} = ${num1 - num2}`
                break;
        case '*':
                str = `${num1} * ${num2} = ${num1 * num2}`
                break;
        case '/':
                str = `${num1} / ${num2} = ${num1 / num2}`
                break;
        case '%':
                str = `${num1} % ${num2} = ${num1 % num2}`
                break;
        default:
                str = "Invalid Operator"

    }
    return str;

}
idAdd.addEventListener('click',()=>{
        idResult.value = getResult('+');
})
idSub.addEventListener('click',()=>{
    idResult.value = getResult('-');
});
idMul.addEventListener('click',()=>{
    idResult.value = getResult('*');
});
idDiv.addEventListener('click',()=>{
   idResult.value = getResult('/');
});
idMod.addEventListener('click',()=>{
    idResult.value = getResult('%');
});