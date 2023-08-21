let peopleArray = [];
let personObj = {firstName: '', lastName: '', age: 0};
let form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let birthYear = document.getElementById('birthYear');
    let age = getAge(birthYear.value);

    personObj = {firstName: firstName.value, lastName: lastName.value, age: age};
    peopleArray.push(personObj);

    firstName.value = '';
    lastName.value = '';
    birthYear.value = '';
    console.log(personObj);
});

function getAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
}
