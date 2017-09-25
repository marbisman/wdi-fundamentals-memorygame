var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];
var cardsInPlay = [];

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
};

var flipCard = function(cardId){
  checkForMatch();
};

flipCard(0);
flipCard(2);
