let dateRangeElement = document.getElementById('dateRange');
let dateSpan = document.getElementById('dateSpan');
let changeDirection = document.getElementById('changeDirection');
let bookingForm = document.getElementById('bookingForm');

dateRangeElement.min = new Date()*1;
dateSpan.innerHTML = new Date().toLocaleString('de-AT',{dateStyle:"short",timeStyle:"short"});

changeDirection.addEventListener('click', () => {
    let fromDiv = document.getElementById('fromDiv');
    let toDiv = document.getElementById('toDiv');
    let fromDivClone = fromDiv.cloneNode(true);
    let toDivClone = toDiv.cloneNode(true);

    fromDiv.parentNode.replaceChild(toDivClone,fromDiv);
    toDiv.parentNode.replaceChild(fromDivClone,toDiv);
});

dateRangeElement.addEventListener('input', (e) => {
    let selectedDate = new Date(dateRangeElement.value*1);
    dateSpan.innerHTML = selectedDate.toLocaleString('de-AT',{dateStyle:"short",timeStyle:"short"});
});

console.log(new Date(2025,12)*1)