let gradientElement = document.getElementById('gradient');
let gradients = {redStart: 128, greenStart: 128, blueStart: 128, redEnd: 128, greenEnd: 128, blueEnd: 128};
let ranges = document.querySelectorAll('.form-range');

ranges.forEach((range) => {
    range.addEventListener('change',
        () => {
            switch (range.id) {
                case 'redStart':
                    gradients.redStart = range.value * 1;
                    document.getElementById('redStartBadge').innerHTML = range.value;
                    break;
                case 'greenStart':
                    gradients.greenStart = range.value * 1;
                    document.getElementById('greenStartBadge').innerHTML = range.value;
                    break;
                case 'blueStart':
                    gradients.blueStart = range.value * 1;
                    document.getElementById('blueStartBadge').innerHTML = range.value;
                    break;
                case 'redEnd':
                    gradients.redEnd = range.value * 1;
                    document.getElementById('redEndBadge').innerHTML = range.value;
                    break;
                case 'greenEnd':
                    gradients.greenEnd = range.value * 1;
                    document.getElementById('greenEndBadge').innerHTML = range.value;
                    break;
                case 'blueEnd':
                    gradients.blueEnd = range.value * 1;
                    document.getElementById('blueEndBadge').innerHTML = range.value;
                    break;
            }
            gradientElement.style.backgroundImage = 'linear-gradient(to right, rgb('
                                                        + gradients['redStart'] + ','
                                                        + gradients['greenStart'] + ','
                                                        + gradients['blueStart'] + '), '
                                                    + 'rgb('
                                                        + gradients['redEnd'] + ','
                                                        + gradients['greenEnd'] + ','
                                                        + gradients['blueEnd'] + ')';
        });
});
