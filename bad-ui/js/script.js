let dateRangeElement = document.getElementById('dateRange');
let dateSpan = document.getElementById('dateSpan');

dateRangeElement.min = new Date()*1;
dateRangeElement.value = new Date()+50;

dateRangeElement.addEventListener('input', (e) => {
    let selectedDate = new Date(dateRangeElement.value*1);
    dateSpan.innerHTML = selectedDate.toLocaleString('de-AT',{dateStyle:"short",timeStyle:"short"});
});