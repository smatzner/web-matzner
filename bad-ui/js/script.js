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
let rickRollLinkRect = document.getElementById('rickRollLink').getBoundingClientRect();

console.log(rickRollLinkRect);

/* --- date elements --- */
dateSpan.innerHTML = new Date().toLocaleString('de-AT', {dateStyle: "short", timeStyle: "short"});
dateRangeElement.min = new Date() * 1;

/* --- local storage check --- */
if (localStorage['guest'] === 'rude') {
    document.body.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
}


/* --- mouse events --- */
window.addEventListener('wheel', (e) => e.preventDefault(), {passive: false});

window.addEventListener('mousemove', (e) => {
    if(!rickRoll){
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
        // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s','_blank');
    }
});

/* --- cookie events --- */
closeCookies.addEventListener('click', () => {
    document.body.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
    localStorage['guest'] = 'rude';
});

let cookiesEventCounter = 0;
acceptCookies.addEventListener('mousemove', cookiesMouseMoveHandler);

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

/* --- submit button events --- */
let submitButtonEventCounter = 0;
submitButton.addEventListener('mouseenter', submitButtonEventHandler);

function cookiesMouseMoveHandler() {
    cookiesEventCounter++;
    modalWindow.style.top = Math.floor(Math.random() * 3000) + 'px';
    modalWindow.style.left = Math.floor(Math.random() * 1000) + 'px';

    if (cookiesEventCounter === 3) {
        acceptCookies.removeEventListener('mousemove', cookiesMouseMoveHandler);
    }
}

function submitButtonEventHandler(e){
    submitButtonEventCounter++
    e.preventDefault();
    e.stopPropagation();
    rickRoll = true;
    let cursorRedirectY = rickRollLinkRect.y + rickRollLinkRect.height;
    let cursorRedirectX = rickRollLinkRect.x + rickRollLinkRect.width / 2;
    cursor.style.top = cursorRedirectY + 'px';
    console.log(cursor.style.top);
    cursor.style.left = cursorRedirectX + 'px';
    window.setTimeout(() => {
        rickRoll = false;
    },1000)

    if(submitButtonEventCounter === 2) {
        submitButton.removeEventListener('mouseenter',submitButtonEventHandler);
    }
}
