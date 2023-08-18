/* Aufgabe 1: Klick Zähler */
let counterButton = document.getElementById('counterButton');
let counterDiv = document.getElementById('counterDiv');
let counts = 0;

counterButton.addEventListener('click', () => {
    counterDiv.innerText = counts;
    counts++;
});

/* Aufgabe 2: Taschenrechner */
let result = document.getElementById('result');
let operator = document.querySelectorAll('.operator');

operator.forEach((e) => {
    e.addEventListener('click', () => {
        let num1 = document.getElementById('num1').value * 1;
        let num2 = document.getElementById('num2').value * 1;
        switch(e.innerHTML){
            case '+': result.value = num1 + num2; break;
            case '-': result.value = num1 - num2; break;
            case '*': result.value = num1 * num2; break;
            case '/': result.value = num1 / num2; break;
        }
    });
});