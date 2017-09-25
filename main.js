var cards = ["queen", "queen", "king", "king"];

var myArray = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamons',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamons',
    cardImage: 'images/king-of-diamonds.png'
  }
]
var cardsInPlay = [];

var checkForMatch = function (){
  if  (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
	      alert("You found a match!");
		}
		else {
	      alert("Sorry, try again.");
};

var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};
