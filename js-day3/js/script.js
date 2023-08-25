// @TODO: benutzen Sie personTableBody um die Aufgabe 1.2 zu erfüllen
// Ändern Sie NICHT den Variablennamen - dieser wird auch im vorgegebenen Code verwendet
const personTableBody = document.getElementById('personTableBody');

// @TODO: benutzen Sie sortTableButtons um die Aufgabe 1.3 zu erfüllen
const sortTableButtons = Array.from(document.getElementsByClassName('sort-table'));

// @TODO: benutzen Sie die Aufgabe 1.4 zu erfüllen
const printAllPersonsButton = document.getElementById('printAllPersons');

// Standardpersonen werden initial zum Array hinzugefügt und mittels render() angezeigt
// Ändern Sie NICHT den Variablennamen - dieser wird auch im vorgegebenen Code verwendet
let persons = [
    createPersonObject('Maria', 'Huber', 1990),
    createPersonObject('Franz', 'Müller', 1978),
    createPersonObject('Gerhard', 'Gruber', 1991),
    createPersonObject('Alina', 'Steiner', 1997)
];
render();


function createPersonObject(firstName, lastName, birthYear) {
    return {
        firstName,
        lastName,
        birthYear,
        // @TODO: ersetzen Sie den statischen Wert mit einem Getter und Setter, welcher das Alter anhand des birthYear berechnet, auch wenn dieses nachträglich geändert wird
        age: 'age?'
    };
}

// Folgender Code wird nicht mehr benötigt, dient aber als Musterlösung für vorherige Übung und als Hilfestellung
/*const sortByLastNameButton = document.getElementById('sortByLastNameButton');
const sortByBirthYearButton = document.getElementById('sortByBirthYearButton');

function getAge(birthYear) {
    return (new Date()).getFullYear() - birthYear;
}

sortByLastNameButton.addEventListener('click', () => {
    persons.sort((personA, personZ) => personA.lastName > personZ.lastName ? 1 : -1);
    render();
});

sortByBirthYearButton.addEventListener('click', () => {
    persons.sort((personA, personZ) => personA.birthYear - personZ.birthYear);
    render();
});

clearLastButton.addEventListener('click', () => {
    persons.pop();
    render();
});*/

// ************************************************************
// AB HIER NICHTS ÄNDERN
// ************************************************************
const addPersonForm = document.getElementById('addPersonForm');
const addPersonFirstName = document.getElementById('addPersonFirstName');
const addPersonLastName = document.getElementById('addPersonLastName');
const addPersonBirthYear = document.getElementById('addPersonBirthYear');
const clearAllButton = document.getElementById('clearAllButton');

addPersonForm.addEventListener('submit', event => {
    event.preventDefault();

    const firstName = addPersonFirstName.value;
    const lastName = addPersonLastName.value;
    const birthYear = parseInt(addPersonBirthYear.value);

    persons.push(createPersonObject(firstName, lastName, birthYear));

    addPersonFirstName.value = '';
    addPersonLastName.value = '';
    addPersonBirthYear.value = '';

    render();
});

clearAllButton.addEventListener('click', () => {
    persons = [];
    render();
});

personTableBody.addEventListener('click', event => {
    if (event.target.classList.contains('update-age')) {
        let age = NaN;
        for (let i = 0; i < 3 && isNaN(age); i++) {
            age = parseInt(prompt('Geben Sie das neue Alter an'));
        }
        if (!isNaN(age)) {
            const personIndex = parseInt(event.target.dataset.index);
            persons[personIndex].age = age;
        }
    }
    render();
});

function render() {
    personTableBody.innerHTML = '';
    persons.forEach((person, index) => {
        let deletePersonButton = `<button type="button" class="btn btn-danger btn-sm delete-person" data-first-name="${person.firstName}" data-last-name="${person.lastName}">`;
        deletePersonButton += 'Löschen';
        deletePersonButton += '</button>';

        let updatePersonButton = `<button type="button" class="btn btn-warning btn-sm update-age" data-index="${index}">`;
        updatePersonButton += 'Alter ändern'
        updatePersonButton += '</button>'

        let personTableRow = '<tr>';
        personTableRow += `<td>${person.firstName}</td>`;
        personTableRow += `<td>${person.lastName}</td>`;
        personTableRow += `<td>${person.age} (Geburtsjahr: ${person.birthYear})</td>`;
        personTableRow += `<td class="text-end">${updatePersonButton} ${deletePersonButton}</td>`;
        personTableRow += '</tr>';
        personTableBody.innerHTML += personTableRow;
    });
}