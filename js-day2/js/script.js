let peopleArray = [];
let personObj = {firstName: '', lastName: '', birthYear: 0};
let form = document.getElementById('form');
let deleteLastElement = document.getElementById('deleteLastElement');
let deleteAll = document.getElementById('deleteAll');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let birthYear = document.getElementById('birthYear');

    personObj = {firstName: firstName.value, lastName: lastName.value, birthYear: birthYear.value};
    peopleArray.push(personObj);

    firstName.value = '';
    lastName.value = '';
    birthYear.value = '';
    console.log(personObj);

    render(peopleArray);
});

deleteLastElement.addEventListener('click', () => {
    peopleArray.pop();
    render(peopleArray);
});

deleteAll.addEventListener('click',() => {
    peopleArray = [];
    render(peopleArray);
});

function getAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
}

function render(peopleArray) {
    let tbody = document.getElementById('tbody');
    let tableRow = '';
    peopleArray.forEach((personObj) => {
        tableRow +=
`<tr>
    <td>${personObj.firstName}</td>
    <td>${personObj.lastName}</td>
    <td>${getAge(personObj.birthYear)}</td>
</tr>`;
    });
    tbody.innerHTML = tableRow;
}


