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
        switch (e.innerHTML) {
            case '+':
                result.value = num1 + num2;
                break;
            case '-':
                result.value = num1 - num2;
                break;
            case '*':
                result.value = num1 * num2;
                break;
            case '/':
                result.value = num1 / num2;
                break;
        }
    });
});

/* Aufgabe 3: Text Addidtion */
let textArea = document.getElementById('textArea');
let addTextButton = document.getElementById('addText');
let addedTextSpan = document.getElementById('addedText');
let clearTextButton = document.getElementById('clearText');
let backspaceButton = document.getElementById('backspace');

addTextButton.addEventListener('click', () => {
    addedTextSpan.innerHTML = textArea.value;
    textArea.value = '';
    toggleBackspaceButton();
});

clearTextButton.addEventListener('click', () => {
    addedTextSpan.innerHTML = '';
    toggleBackspaceButton();
});

backspaceButton.addEventListener('click', () => {
    addedTextSpan.innerHTML = addedTextSpan.innerHTML.substring(0, addedText.innerHTML.length - 1);
    toggleBackspaceButton();
});

function toggleBackspaceButton() {
    addedTextSpan.innerHTML == '' ? backspaceButton.classList.add('d-none') : backspaceButton.classList.remove('d-none');
}

/* Bonusaufgabe: Farbenmixer */
let mixedColor = document.getElementById('mixedColor');
let mixColorButton = document.getElementById('mixColorButton');

mixColorButton.addEventListener('click', () => {
    let red = document.getElementById('red').checked ? 'F' : '0';
    let green = document.getElementById('green').checked ? 'F' : '0';
    let blue = document.getElementById('blue').checked ? 'F' : '0';
    mixedColor.style.backgroundColor = '#' + red + green + blue;
});




