/* Random Numbers -> 1 to 6 */
let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomNumber2 = Math.floor(Math.random() * 6) + 1; 


let dicePlayer1 = document.querySelector(".img-1").setAttribute("src", `/assets/images/dice-${randomNumber1}.png`);
let dicePlayer2 = document.querySelector(".img-2").setAttribute("src", `/assets/images/dice-${randomNumber2}.png`);

/* Checking who wins or not in this dice game */
function checkerWinner() {
    if(randomNumber1 > randomNumber2) {
       document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
    } else {
        document.querySelector("h1").innerHTML = "Draw! 👀";
    }
}

checkerWinner();