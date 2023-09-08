let closeCookies = document.getElementById('closeCookies');
let acceptCookies = document.getElementById('acceptCookies');
let modal = document.querySelector('.modal');
let modalWindow = document.getElementById('modalWindow');
let dateRangeElement = document.getElementById('dateRange');
let dateSpan = document.getElementById('dateSpan');
let changeDirection = document.getElementById('changeDirection');
let bookingForm = document.getElementById('bookingForm');
let cursor = document.getElementById('cursor');
let cursorSize = 20;
let submitButton = document.getElementById('submitButton');
let rickRoll = false;

dateRangeElement.min = new Date() * 1;
dateSpan.innerHTML = new Date().toLocaleString('de-AT', {dateStyle: "short", timeStyle: "short"});

window.addEventListener('wheel', (e) => e.preventDefault(), {passive: false});

window.addEventListener('mousemove', (e) => {
    if (!rickRoll) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});


window.addEventListener('click', (e) => {
    cursorSize *= 1.1;
    cursor.style.width = cursorSize + 'px';
    cursor.style.height = cursorSize + 'px';

    let cursorRect = cursor.getBoundingClientRect();

    if ((cursorRect.top >= 350 && cursorRect.top <= 370) && (cursorRect.left >= 485 && cursorRect.left <= 630)) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
});

if (localStorage['guest'] === 'rude') {
    document.body.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
}
closeCookies.addEventListener('click', () => {
    document.body.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
    localStorage['guest'] = 'rude';
});

let eventCounter = 0;
acceptCookies.addEventListener('mousemove', cookiesMouseMoveHandler);

function cookiesMouseMoveHandler() {
    eventCounter++;
    modalWindow.style.top = Math.floor(Math.random() * 3000) + 'px';
    modalWindow.style.left = Math.floor(Math.random() * 1000) + 'px';

    if (eventCounter === 3) {
        acceptCookies.removeEventListener('mousemove', cookiesMouseMoveHandler);
    }
}

acceptCookies.addEventListener('click', () => {
    modal.classList.remove('d-block');
});

changeDirection.addEventListener('click', () => {
    let fromDiv = document.getElementById('fromDiv');
    let toDiv = document.getElementById('toDiv');
    let fromDivClone = fromDiv.cloneNode(true);
    let toDivClone = toDiv.cloneNode(true);

    fromDiv.parentNode.replaceChild(toDivClone, fromDiv);
    toDiv.parentNode.replaceChild(fromDivClone, toDiv);
});

dateRangeElement.addEventListener('input', (e) => {
    let selectedDate = new Date(dateRangeElement.value * 1);
    dateSpan.innerHTML = selectedDate.toLocaleString('de-AT', {dateStyle: "short", timeStyle: "short"});
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    rickRoll = true;
    cursor.style.top = '360px';
    cursor.style.left = '530px';
})