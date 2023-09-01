let cursor = document.getElementById('cursor');
let links = document.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

links.forEach((link) => {
       link.addEventListener('mouseenter', (e) => {
           cursor.classList.add('cursor-small');
       });

       link.addEventListener('mouseleave', (e) => {
           cursor.classList.remove('cursor-small');
       });
});

