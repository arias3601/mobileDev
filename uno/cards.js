function Card(color, number){
    this.color = color;
    this.number = number;
}

function createCards(){
  var deck = new Array;
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
  //deck = shuffle(deck);
  console.log(deck);
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
