let siteLoadOverlay = document.getElementById('siteLoadOverlay');
let container = document.getElementById('container');
let closeCookies = document.getElementById('closeCookies');
let acceptCookies = document.getElementById('acceptCookies');
let modal = document.querySelector('.modal');
let modalWindow = document.getElementById('modalWindow');
let modalBody = document.getElementById('modalBody');
let cookieEmojis = document.getElementById('cookieEmojis');
let dateRangeElement = document.getElementById('dateRange');
let dateSpan = document.getElementById('dateSpan');
let changeDirection = document.getElementById('changeDirection');
let bookingForm = document.getElementById('bookingForm');
let cursor = document.getElementById('cursor');
let cursorSize = 20;
let submitButton = document.getElementById('submitButton');
let rickRoll = false;
let rickRollLinkRect = document.getElementById('rickRollLink').getBoundingClientRect();
let darkModeButton = document.getElementById('darkModeButton');
let darkModeOverlay = document.getElementById('darkModeOverlay');
let realDarkModeButton = document.getElementById('realDarkModeButton');
let realDarkModeOverlay = document.getElementById('realDarkModeOverlay');
let realDarkModeCursor = document.getElementById('realDarkModeCursor');
let realDarkMode = false;
let labels = document.querySelectorAll("label");


/* --- date elements --- */
dateSpan.innerHTML = new Date().toLocaleString('de-AT', {dateStyle: "short", timeStyle: "short"});
dateRangeElement.min = new Date() * 1;

/* --- local storage check --- */
if (localStorage['guest'] === 'rude') {
    container.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
}

if (localStorage['siteLoaded'] !== 'true') {
    siteLoadOverlay.classList.remove('d-none');
    document.addEventListener('dblclick', startSite);
}


/* --- mouse events --- */
window.addEventListener('wheel', (e) => e.preventDefault(), {passive: false});

window.addEventListener('mousemove', (e) => {
    if (!rickRoll) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    if (realDarkMode) {
        let clientX = e.clientX - 4040;
        let clientY = e.clientY - 4040;
        realDarkModeCursor.style.left = clientX + 'px';
        realDarkModeCursor.style.top = clientY + 'px';
    }
});

window.addEventListener('click', (e) => {
    cursorSize *= 1.5;
    cursor.style.width = cursorSize + 'px';
    cursor.style.height = cursorSize + 'px';

    let cursorRect = cursor.getBoundingClientRect();

    if ((cursorRect.top >= 350 && cursorRect.top <= 370) && (cursorRect.left >= 485 && cursorRect.left <= 630)) {
        window.open('https://youtu.be/xvFZjo5PgG0?si=KryHi8U8OMf9AutX', '_blank');
    }
});

/* --- cookies --- */
closeCookies.addEventListener('click', () => {
    document.body.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
    localStorage['guest'] = 'rude';
});

let cookiesEventCounter = 0;
acceptCookies.addEventListener('mousemove', cookiesMouseMoveHandler);

acceptCookies.addEventListener('click', () => {
    modal.classList.remove('d-block');
});

/* --- dark mode event --- */
darkModeButton.addEventListener('click', (e) => {
    darkModeOverlay.classList.remove('d-none');
    darkModeButton.classList.add('d-none');
    realDarkModeButton.classList.remove('d-none');
})

realDarkModeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    realDarkMode = true;
    realDarkModeOverlay.classList.remove("d-none");
    realDarkModeButton.classList.add("d-none");

    cursor.classList.add('d-none');
    labels.forEach((label) => {
        label.style.zIndex = '0';
    });

    document.body.style.overflow = 'hidden';

    realDarkModeCursor.style.left = e.clientX + 'px';
    realDarkModeCursor.style.top = e.clientY + 'px';
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

function startSite() {
    siteLoadOverlay.style.top = '100%';
    setTimeout(() => {
        siteLoadOverlay.remove();
    }, 30000);
    document.removeEventListener('dblclick', startSite);
    localStorage['siteLoaded'] = 'true';
}

function cookiesMouseMoveHandler() {
    cookiesEventCounter++;
    modalWindow.style.top = Math.floor(Math.random() * 3000) + 'px';
    modalWindow.style.left = Math.floor(Math.random() * 1000) + 'px';

    cookieEmojis.innerHTML = cookieEmojis.innerHTML.slice(0, -2);

    if (cookiesEventCounter === 3) {
        modalBody.textContent = 'No Cookies left. You may enter the site.';
        acceptCookies.textContent = 'Enter Site';
        acceptCookies.removeEventListener('mousemove', cookiesMouseMoveHandler);
    }
}

function submitButtonEventHandler(e) {
    submitButtonEventCounter++
    bookingForm.addEventListener('submit', e => e.preventDefault());
    e.preventDefault();
    e.stopPropagation();
    rickRoll = true;
    let cursorRedirectY = rickRollLinkRect.y + rickRollLinkRect.height * 1.5;
    let cursorRedirectX = rickRollLinkRect.x + rickRollLinkRect.width / 2;
    cursor.style.top = cursorRedirectY + 'px';
    cursor.style.left = cursorRedirectX + 'px';
    window.setTimeout(() => {
        rickRoll = false;
    }, 1000)

    if (submitButtonEventCounter === 2) {
        submitButton.removeEventListener('mouseenter', submitButtonEventHandler);
    }
}
