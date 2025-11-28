if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    rollDice();
}
function rollDice(){
var n1;
var n2;

n1 = Math.random();
n2 = Math.random();
n1 = n1*6;
n2 = n2*6;
n1 = Math.floor(n1)+1;
n2 = Math.floor(n2)+1;


document.getElementById("die1").src =
    "images/dice" + n1 + ".png";

document.getElementById("die2").src =
    "images/dice" + n2 + ".png";

if(n1 > n2)
    document.querySelector("h1").innerHTML = "Player 1 Wins";
else if(n2 > n1)
    document.querySelector("h1").innerHTML = "Player 2 Wins";
else
    document.querySelector("h1").innerHTML = "Draw";
}