/* Aufgabe 1: Klick Zähler */
let counterButton = document.getElementById('counterButton');
let counterDiv = document.getElementById('counterDiv');
let counts = 0;

counterButton.addEventListener('click', () => {
    counterDiv.innerText = counts;
    counts++;
});