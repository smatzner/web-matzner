let money = 100;
let moneyElement = document.getElementById("money");
moneyElement.innerHTML = money;
let gamble = document.getElementById('gamble');
let result = document.getElementById('result');

gamble.addEventListener('click', () => {
    let wager = document.getElementById('wager').value;
    let options = document.getElementsByName('color');
    let playerColor;
    let casinoColor;

    if(wager > money){
        result.innerHTML = `<p>Sie können nicht mehr setzen als sie besitzen</p>`;
    } else {

        money -= wager;
        options.forEach((option) => {
            if (option.checked) {
                playerColor = option.id === 'colorRed' ? 'rot' : 'schwarz';
            }
        });

        result.innerHTML =
`<p>Spieler Farbe: 
${playerColor}
</p>`;

        casinoColor = createRandomColor();
        result.innerHTML += `<p>Casino Farbe: ${casinoColor}</p>`;

        if (playerColor === casinoColor) {
            money += wager * 2;
            result.innerHTML += `<p>Herzlichen Glückwunsch Sie haben gewonnen! Ihr Guthaben hat sich erhöht</p>`;
        } else {
            result.innerHTML += `<p>Leider verloren!</p>`;
            if(money === 0){
                result.innerHTML += `<p>Sie haben kein Guthaben mehr. Die Bank gewinnt!</p>`;
                gamble.disabled = true;
            }
        }
        moneyElement.innerHTML = money;
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