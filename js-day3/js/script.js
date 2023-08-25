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
        get age() {
            return new Date().getFullYear() - this.birthYear;
        },
        set age(age) {
            this.birthYear = new Date().getFullYear() - age;
        }
    };
}

personTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-person')) {
        let targetLastName = e.target.dataset.lastName;
        let targetFirstName = e.target.dataset.firstName;
        let nameIndex = persons.findIndex((person) => {
            return targetLastName === person.lastName && targetFirstName === person.firstName;
        });
        if (window.confirm(`Wollen sie die Person ${targetFirstName} ${targetLastName} wirklich löschen?`)) {
            persons.splice(nameIndex, 1);
        }
    }
    render()
});

sortTableButtons.forEach((sortTableButton) => {
    sortTableButton.addEventListener('click', (e) => {
        let sortKey = e.currentTarget.dataset.sortKey;
        persons.sort((a, b) => {
            if (a[sortKey] < b[sortKey]) {
                return -1;
            }
            if (a[sortKey] > b[sortKey]) {
                return 1;
            }
            return 0;
        });
        render();
    });
});

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