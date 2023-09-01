// Ändern Sie NICHT den Variablennamen - dieser wird auch im vorgegebenen Code verwendet
const personTableBody = document.getElementById('personTableBody');

// @TODO: verwenden Sie contextMenuElement für Punkt 2
const contextMenuElement = document.getElementById('contextMenu');

// @TODO: verwenden Sie deletePersonButton und changeAgeButton für den Punkt 5
const deletePersonButton = document.getElementById('deletePerson');
const changeAgeButton = document.getElementById('changeAge');

// @TODO: verwenden Sie selectedPersonIndex für den Punkt 3
let selectedPersonIndex = null;

personTableBody.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenuElement.classList.add('show');
    contextMenuElement.style.top = e.clientY + 'px';
    contextMenuElement.style.right = window.innerWidth - e.pageX + 'px';

});

// ************************************************************
// AB HIER NICHTS ÄNDERN
// ************************************************************
const addPersonForm = document.getElementById('addPersonForm');
const addPersonFirstName = document.getElementById('addPersonFirstName');
const addPersonLastName = document.getElementById('addPersonLastName');
const addPersonBirthYear = document.getElementById('addPersonBirthYear');
const clearAllButton = document.getElementById('clearAllButton');

let persons = [
    createPersonObject('Maria', 'Huber', 1990),
    createPersonObject('Franz', 'Müller', 1978),
    createPersonObject('Gerhard', 'Gruber', 1991),
    createPersonObject('Alina', 'Steiner', 1997)
];
render();

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

function createPersonObject(firstName, lastName, birthYear) {
    return {
        firstName,
        lastName,
        birthYear,
        get age() {
            return new Date().getFullYear() - this.birthYear
        },
        set age(age) {
            this.birthYear = new Date().getFullYear() - age
        }
    };
}

function render() {
    personTableBody.innerHTML = '';
    persons.forEach((person, index) => {
        let personTableRow = `<tr data-index="${index}">`;
        personTableRow += `<td>${person.firstName}</td>`;
        personTableRow += `<td>${person.lastName}</td>`;
        personTableRow += `<td>${person.age} (<span class="bi-calendar-heart"></span> ${person.birthYear})</td>`;
        personTableRow += '</tr>';
        personTableBody.innerHTML += personTableRow;
    });
}