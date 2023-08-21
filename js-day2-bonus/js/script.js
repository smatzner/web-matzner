let money = 100;
document.getElementById("money").innerHTML = money;
let gamble = document.getElementById('gamble');
let result = document.getElementById('result');

gamble.addEventListener('click', () => {
    let wager = document.getElementById('wager');
    let options = document.getElementsByName('color');
    let playerColor;
    let casinoColor;

    money -= wager;

    options.forEach((option) => {
        if(option.checked){
            playerColor = option;
        }
    });

    playerColor.id === 'colorRed' ? playerColor = 'rot' : playerColor = 'schwarz';

    result.innerHTML =
`<p>Spieler Farbe: 
${playerColor}
</p>`;

    casinoColor = createRandomColor();
    result.innerHTML += `<p>Casino Farbe: ${casinoColor}</p>`;

    if(playerColor === casinoColor){
        money += wager * 2;
        result.innerHTML += `<p>Herzlichen Glückwunsch Sie haben gewonnen! Ihr Guthaben hat sich erhöht</p>`;
    } else {
        result.innerHTML += `<p>Leider verloren!</p>`;
    }
});

function createRandomColor(){
    let randomNumber = Math.random();

    if(randomNumber <= 0.48){
        return 'rot';
    } else if (randomNumber <= 0.96){
        return 'schwarz';
    } else {
        return 'grün';
    }
}