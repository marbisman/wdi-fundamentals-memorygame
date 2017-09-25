var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[3];
var cardThree = cards[2];
var cardFour = cards[1];

var cardsInPlay = [];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if(cardsInplay.length === 2){
  if(cardsInplay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry, try again");
  }
};
