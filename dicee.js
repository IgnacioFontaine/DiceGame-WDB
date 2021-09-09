// DICE 1
var randomNumer1 = Math.floor(Math.random() * (6 - 1) + 1);
var randomDiceImage1 = "dice" + randomNumer1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// DICE 2
var randomNumer2 = Math.floor(Math.random() * (6 - 1) + 1);
var randomImageSource2 = "images/dice" + randomNumer2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// WINNER - DRAW
if (randomNumer1 > randomNumer2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumer1 < randomNumer2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "🏳 Draw 🏳";
}
