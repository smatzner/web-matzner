let siteLoadOverlay = document.getElementById('siteLoadOverlay');
let logo = document.getElementById('navbarBrand');
let loginLink = document.getElementById('loginLink');
let loginParagraph = document.getElementById('loginParagraph');
let index = document.getElementById('index');
let login = document.getElementById('login');
let loginForm = document.getElementById('loginForm');
let container = document.getElementById('container');
let closeCookies = document.querySelectorAll('.closeCookies');
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
let realDarkModeCursor = document.getElementById('realDarkModeCursor');
let realDarkMode = false;
let lightModeButton = document.getElementById('lightModeButton');
let labels = document.querySelectorAll("label");


/* --- date elements --- */
dateSpan.innerHTML = new Date().toLocaleString('de-AT', {dateStyle: "short", timeStyle: "short"});
dateRangeElement.min = new Date() * 1;

/* --- local storage check --- */
if (localStorage['guest'] === 'rude') {
    container.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
}

// // TODO entfernen
// if (localStorage['siteLoaded'] !== 'true') {
    siteLoadOverlay.classList.remove('d-none');
    document.addEventListener('dblclick', startSite);
// }


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
    if(rickRoll){
        cursorSize *= 1.3;
        cursor.style.width = cursorSize + 'px';
        cursor.style.height = cursorSize + 'px';
    }

    let cursorRect = cursor.getBoundingClientRect();

    let minX = rickRollLinkRect.top - 100;
    let maxX = rickRollLinkRect.top + 100;
    let minY = rickRollLinkRect.left - 100;
    let maxY = rickRollLinkRect.left + 100;
    if ((cursorRect.top >= minX && cursorRect.top <= maxX) && (cursorRect.left >= minY && cursorRect.left <= maxY)) {
        window.open('https://youtu.be/xvFZjo5PgG0?si=KryHi8U8OMf9AutX', '_blank');
    }
});

/* --- switch pages --- */
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    index.classList.toggle('d-none');
    login.classList.toggle('d-none');
})

logo.addEventListener('click', (e) => {
    e.preventDefault();
    index.classList.remove('d-none');
    login.classList.add('d-none');
})

/* --- login --- */
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    index.classList.toggle('d-none');
    login.classList.toggle('d-none');
    loginParagraph.classList.add('d-none');
});

/* --- cookies --- */
closeCookies.forEach(closeCookie => {
    closeCookie.addEventListener('click', () => {
        container.innerHTML = '<h1>Rude Guests are not welcome here. Please try a different railway company.</h1>';
        localStorage['guest'] = 'rude';
    });
})


let cookiesEventCounter = 0;
acceptCookies.addEventListener('mousemove', cookiesMouseMoveHandler);

acceptCookies.addEventListener('click', () => {
    modal.classList.remove('d-block');
});

/* --- dark mode events --- */
darkModeButton.addEventListener('click', (e) => {
    darkModeOverlay.classList.remove('d-none');
    darkModeButton.classList.add('d-none');
    realDarkModeButton.classList.remove('d-none');
})

realDarkModeButton.addEventListener('click', (e) => {
    e.stopPropagation();

    darkModeOverlay.classList.add('d-none');

    realDarkMode = true;
    realDarkModeCursor.classList.remove('d-none');
    realDarkModeButton.classList.add('d-none');

    cursor.classList.add('d-none');
    labels.forEach((label) => {
        label.style.zIndex = '0';
    });

    document.body.style.overflow = 'hidden';

    let clientX = e.clientX - 4040;
    let clientY = e.clientY - 4040;
    realDarkModeCursor.style.left = clientX + 'px';
    realDarkModeCursor.style.top = clientY + 'px';

    setTimeout(() => {
        lightModeButton.classList.remove('d-none');
        lightModeButton.style.left = Math.floor(Math.random() * 1000) + 'px';
    },1000);
});

lightModeButton.addEventListener('click', () => {
    darkModeButton.classList.remove('d-none');
    lightModeButton.classList.add('d-none');
    realDarkModeCursor.classList.add('d-none');
    cursor.classList.remove('d-none');
    realDarkMode = false;
});

/* --- form --- */
bookingForm.addEventListener('submit', e => e.preventDefault());

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
    // localStorage['siteLoaded'] = 'true';
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

    if (submitButtonEventCounter === 5) {
        submitButton.removeEventListener('mouseenter', submitButtonEventHandler);
    }
}
