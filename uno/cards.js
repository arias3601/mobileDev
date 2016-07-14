function run(){
  var player1;
  var player2;
  var deck;
  if (!localStorage.player1) {
    player1 = new Player(0);
    player2 = new Player(0);
  } else {
    player1 = JSON.parse(localStorage.player1);
    player2 = JSON.parse(localStorage.player2);
  }


if (!localStorage.deck) {
  deck = createCards();
  deck = shuffle(deck);
  deal(deck, player1, player2);
} else {
  deck = JSON.parse(localStorage.deck);
}
  localStorage.player1 = JSON.stringify(player1);
  localStorage.player2 = JSON.stringify(player2);
  localStorage.deck = JSON.stringify(deck);

  console.log(deck);
  console.log(player1.cards);
  console.log(player2.cards);
}

function Card(color, number){
    this.color = color;
    this.number = number;
}

function Player(wins){
  this.numberOfCards = 0;
  this.cards = [];
  this.wins = wins;
}

function createCards(){
  var deck = [];
  var cn = 0 ; // cn is card number

  var colors = ["red", "yellow", "green", "blue"];

  for (var i = 0; i <= 14; i++) {
    if (i === 0 || i === 13 || i === 14) {// creates four 0's, wilds, and draw 4 wilds
      for (var j = 0; j < 4; j++) {
        if (i === 0) {
          deck[cn++] = new Card(colors[j % 4], i);
        } else if (i === 13) {
          deck[cn++] = new Card('wild', 'wild');
        } else{
          deck[cn++] = new Card('+4', '+4');
        }
      }
    } else {
      for (var k = 0; k < 8; k++) { // creates eight of every other card
        if (i === 12) {
          deck[cn++] = new Card(colors[k % 4], '+2');
        } else if (i === 11) {
          deck[cn++] = new Card(colors[k % 4], 'reverse');
        } else if (i === 10) {
          deck[cn++] = new Card(colors[k % 4], 'skip');
        } else {
          deck[cn++] = new Card(colors[k % 4], i);
        }
      }

    }
  }
  return deck;
}

function shuffle(cards){
  var rn; //randomNumber
  var rn2; //randomNumber2
  var temp;
  for (var i = 0; i < cards.length * 4; i++) {
    rn = Math.floor(Math.random() * cards.length);
    rn2 = Math.floor(Math.random() * cards.length);
    temp = cards[rn];
    cards[rn] = cards[rn2];
    cards[rn2] = temp;
  }
  return cards;
}

function deal(cards, player1, player2){
    for (var i = 0; i < 14; i++) {
      if (i % 2 === 0) {
        player1.cards[player1.numberOfCards] = cards[i];
        player1.numberOfCards++;
      } else {
        player2.cards[player2.numberOfCards] = cards[i];
        player2.numberOfCards++;
      }
      cards.shift();
    }
}
