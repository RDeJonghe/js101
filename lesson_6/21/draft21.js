// PROBLEM - given - make a 21 game that is a simple version of black jack
// EXAMPLES
  // This is the game play of who wins
// DATA STRUCTURES
  // deck of cards
    // this is an important data structure, - suit actually doesn't really matter that much, what mostly matters is the value
    // can have just an array of all of the values - their examples don't show the suit so I could leave that out
      // if suit is needed an array of all of the suits could be stored and they could be matched up randomly
      // this way one array would just have a number value which we need,
      // the other array could have the suit - they could be matched and displayed using literals
    // basically the data structure has to store the value and then remove the value after it is used
  // keep score
    // possibly an object
    // object could start at 0 when game starts, update each turn
    // value of object property could be checked against 21, 17, the other persons score
// ALGORITHM
  // 1. Initialize deck
    // can do this with an array - don't need to shuffle, can select randomly and then splice the value out
    // if needed can also do this with suits
    // create an initialize deck function that will populate the array
  // 2. Deal cards to player and dealer
  // 3. Player turn: hit or stay
  //    - repeat until bust or stay
  // 4. If player bust, dealer wins.
  // 5. Dealer turn: hit or stay
  //    - repeat until total >= 17
  // 6. If dealer busts, player wins.
  // 7. Compare cards and declare winner.



// 1. initialize deck function
  // create a counter variable at 4, a second counter variable at 16
  // for all numbers less than 10 and an ace push that number until there are 4
  // for the value 10, push it 16 times
  // do these with three functions and then join


function initializeDeckNumbers() {
  let cards = [];
  let counter4 = 1;

  while (counter4 <= 4) {
    let counterCard = 2;
    while (counterCard <= 10) {
      cards.push(counterCard);
      counterCard += 1;
    }
    counter4 += 1;
  }
  return cards;
}

function initializeDeckPeople() {
  let cards = [];
  let counter12 = 1;

  while (counter12 <= 12) {
    cards.push(10);
    counter12 += 1;
  }
  return cards;
}

function initializeDeckAces() {
  let cards = [];
  let counter4 = 1;

  while (counter4 <= 4) {
    cards.push('Ace');
    counter4 += 1;
  }
  return cards;
}

function initializeDeck() {
  let deck = [];
  deck = deck.concat(initializeDeckAces()).concat(initializeDeckPeople()).concat(initializeDeckNumbers());
  return deck;
}

function initializeSuits() {
  let suits = [];
  let counter13 = 1;

  while (counter13 <= 13) {
    suits.push('Hearts', 'Diamonds', 'Clubs', 'Spades');
    counter13 += 1;
  }
  return suits;
}

// let suits = initializeSuits();
// let deck = initializeDeck();
// console.log(deck);
// console.log(deck.length)
// console.log(suits);
// console.log(suits.length);

// 2. Deal cards to player and dealer
  // This has to be done randomly - give the player a card, dealer a card, player a card, dealer a card
  // create an dealer array for numbers, and a dealer array for aces, same for player, 2 player arrays,
    // Keep aces separate since their value can vary - use a nested array to keep separately
      // we can use the length property of the aces array to tell how many they have, and what to do if there are multiple aces
    // choose a random index each time, this picks card randomly
      // assign that card to the appropriate array,
        // this depends on player, dealer and ace or not
      // slice that value out of the deck array

function playerDeal(deck) {
  let playerAces = [];
  let playerNumbers = [];

  let randomIndex = Math.floor(Math.random() * deck.length);
  let playerCard = deck[randomIndex];

  if (playerCard === 'Ace') {
    playerAces.push(playerCard);
  } else {
    playerNumbers.push(playerCard);
  }

  deck.splice(randomIndex, 1);

  return [playerAces, playerNumbers];
}

let deck = initializeDeck();
// console.log(deck);

let playerCard = playerDeal(deck);
console.log(playerCard);