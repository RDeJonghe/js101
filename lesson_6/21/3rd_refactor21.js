const READLINE = require('readline-sync');
const DEALER_STAY_NUMBER = 17;
const BUST_NUMBER = 22;
const PLAY_AGAIN_RESPONSES = ['y', 'n', 'yes', 'no'];
  
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

// result is a nested array for the dealer and a nested array for the player
// have to deal every other, player, dealer, player, dealer

// create a player hand variable and a dealer hand variable - nested arrays

// create a deal function where you pass in the hand and the deck
// function generates a random card
// based on value of the card it is pushed to the first element or the second element
// push is destructive and modifies it
// have to remove that card from the deck
// this just returns the new array with the cards



// function pickDealerCardToShow(dealerCards) { // this may not be needed, dealer always shows first card, create function for that
//   flattenedDealerCardArray = dealerCards.flat();

//   let randomIndex = Math.floor(Math.random() * flattenedDealerCardArray.length);

//   return flattenedDealerCardArray[randomIndex];
// }

// create a function and pass in dealer cards,
// function will be called when dealer has one card,
// check if element 0 exists if so return that card, if not return other card

function dealerCardFaceUp(dealerCards) {
  if (dealerCards[0].length === 1) {
    return dealerCards[0];
  } else {
    return dealerCards[1][0]; // the second card is pushed into the array, so if no aces, [1][0] is first card dealt, [1][1] is second card dealt
  }
}

// function showDealerAndPlayerCards(dealerCards, playerCards) {
  
//   let flattenedPlayerCardArray = playerCards.flat();

//   console.log(`Dealer has: ${pickDealerCardToShow(dealerCards)} and an unknown card`);
//   console.log(`You have: ${flattenedPlayerCardArray[0]} and ${flattenedPlayerCardArray[1]}`);
// }

function showDealerAndPlayerCards(dealerCardToShow, playerCards) {
  
  let flattenedPlayerCardArray = playerCards.flat();

  console.log(`Dealer has: ${dealerCardToShow} and an unknown card`);
  console.log(`You have: ${flattenedPlayerCardArray[0]} and ${flattenedPlayerCardArray[1]}`);
}

function showPlayerHand(playerCards) {
  let flattenedPlayerCardArray = playerCards.flat();

  console.log(`Your cards are: ${flattenedPlayerCardArray.join(', ')}.`)
}

function showDealerHand(dealerCards) {
  let flattenedDealerCardArray = dealerCards.flat();

  console.log(`The dealer's cards are: ${flattenedDealerCardArray.join(', ')}.`)
}

// function hit(deck) { // this may be repetitive, can probably replace with the dealCard to Hand function
//   let randomIndex = Math.floor(Math.random() * deck.length);
//   let anotherCard = deck[randomIndex];
//   deck.splice(randomIndex, 1);

//   // let removedCard = deck.splice(randomIndex, 1);

//   // console.log(`this card has been removed: ${removedCard}`);

//   return anotherCard;
// }

// function addNewCardToHand(newCard) { // this may also possibly be replaced
//   // console.log(playerCards);
//   if (newCard === 'Ace') {
//     playerCards[0].push(newCard);
//   } else {
//     playerCards[1].push(newCard);
//   }
// }

function prompt(message) {
  console.log(`==> ${message}\n`);
}

function validateHitOrStayInput() {

  let response = READLINE.question().toLowerCase();

  while (response !== 'hit' && response !== 'stay') {
    prompt("Invalid response. Type 'hit' or 'stay'.");
    response = READLINE.question().toLowerCase();
  }

  return response;
}

function playerBust(playerCards) {
  let numbersAddedValue = playerCards[1].reduce((accum, num) => accum + num, 0);
  let numberOfAces = playerCards[0].length;
  // console.log(numbersAddedValue);

  if (numbersAddedValue > 21) { // maybe all of this can be refactored to be simple like dealer bust
    return true;
  } else if (numbersAddedValue >= 20 && numberOfAces >= 2) { // could always add logic above this to handle 21 and aces - prob not necessary since the game will break automatically if the user has 21...
    return true;
  } else if (numbersAddedValue >= 19 && numberOfAces >= 3) {
    return true;
  } else if (numbersAddedValue >= 18 && numberOfAces >= 4) {
    return true;
  }
}

function dealerBust(dealerTotal) {
  if (dealerTotal >= BUST_NUMBER) {
    return true;
  }
}

function dealerNumbersValue(dealerCards) {
  return dealerCards[1].reduce((accum, num) => accum + num, 0);
}

function dealerAcesValue(dealerCards, dealerNumbersValue) {
  let dealerAcesValue = 0;
  let acesArray = dealerCards[0];

  if (dealerNumbersValue <= 10 && acesArray.length === 1) {
    dealerAcesValue = 11;
  } else if (dealerNumbersValue <= 9 && acesArray.length === 2) {
    dealerAcesValue = 12;
  } else if (dealerNumbersValue <= 8 && acesArray.length === 3) {
    dealerAcesValue = 13;
  } else if (dealerNumbersValue <= 7 && acesArray.length === 4) {
    dealerAcesValue = 14;
  } else {
    dealerAcesValue = acesArray.length;
  }

  return dealerAcesValue;
}

// function addNewCardToDealerHand(newCard) {
//   // console.log(playerCards);
//   if (newCard === 'Ace') {
//     dealerCards[0].push(newCard);
//   } else {
//     dealerCards[1].push(newCard);
//   }
// }

function playerNumbersValue(playerCards) {
  return playerCards[1].reduce((accum, num) => accum + num, 0);
}


function playerAcesValue(playerCards, playerNumbersValue) {
  let playerAcesValue = 0;
  let acesArray = playerCards[0];

  if (playerNumbersValue <= 10 && acesArray.length === 1) {
    playerAcesValue = 11;
  } else if (playerNumbersValue <= 9 && acesArray.length === 2) {
    playerAcesValue = 12;
  } else if (playerNumbersValue <= 8 && acesArray.length === 3) {
    playerAcesValue = 13;
  } else if (playerNumbersValue <= 7 && acesArray.length === 4) {
    playerAcesValue = 14;
  } else {
    playerAcesValue = acesArray.length;
  }

  return playerAcesValue;
}


function declareWinner(playerTotal, dealerTotal) { // only need > since busts will break the game loop, have to add game loop
  if (playerTotal > dealerTotal) {
    return 'the player wins!';
  } else if (dealerTotal > playerTotal) {
    return 'the dealer wins.';
  } else {
    return 'a tie'
  }
}


function dealACard(hand, deck) { // this feature added to alternate a card between player,dealer,player,dealer
  let randomIndex = Math.floor(Math.random() * deck.length);
  let cardToDeal = deck[randomIndex];

  if (cardToDeal === 'Ace') {
    hand[0].push(cardToDeal);
  } else {
    hand[1].push(cardToDeal);
  }

  deck.splice(randomIndex, 1);

  return cardToDeal;
}


let deck;
let playerCards;
let dealerCards;

while (true) {

  playerCards = [[],[]];
  dealerCards = [[],[]];
  deck = initializeDeck();

  dealACard(playerCards, deck);
  dealACard(dealerCards, deck);
  let dealerCardToShow = dealerCardFaceUp(dealerCards);

  dealACard(playerCards, deck);
  dealACard(dealerCards, deck);

  let playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));
  let dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));
  
  showDealerAndPlayerCards(dealerCardToShow, playerCards);
  prompt(`Your total is: ${playerTotal}.`);




  while (true) {

    prompt('Would you like to hit or stay?');

    let userDecisionHitOrStay = validateHitOrStayInput();

    if (userDecisionHitOrStay === 'stay') break;

    let newPlayerCard = dealACard(playerCards, deck);

    // addNewCardToHand(newPlayerCard);
    prompt(`You hit: ${newPlayerCard}`);

    showPlayerHand(playerCards);

    playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));

    prompt(`Your total is: ${playerTotal}.`);

    // if (playerTotal === 21) { // added - no need to ask hit or stay if player has 21
    //   break;
    // }
  
    if (playerBust(playerCards)) {
      prompt('Busted! Dealer wins.');
      break;
    }

  }


if (!(playerBust(playerCards))) {

      
  while (dealerTotal < DEALER_STAY_NUMBER) {
    let newDealerCard = dealACard(dealerCards, deck); // could possibly be replaced with addCardTo hand function

    //addNewCardToDealerHand(newDealerCard);

    prompt(`The dealer hit: ${newDealerCard}.`)

    dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));
  }

  
  if (dealerBust(dealerTotal)) {
    showDealerHand(dealerCards);
    prompt(`The dealer's toal is ${dealerTotal}.`);
    prompt('Dealer Busted! Player Wins!');
  }
}

if (!(dealerBust(dealerTotal))) {
  showDealerHand(dealerCards);
}
    

  if (!(playerBust(playerCards)) && !(dealerBust(dealerTotal))) {

  prompt(`The player has ${playerTotal} and the dealer has ${dealerTotal}`);
  
  prompt(`The result is ${declareWinner(playerTotal, dealerTotal)}`);
  }

  prompt("Would you like to play again? Type 'y' for yes, 'n' for no:")

  let playAgain = READLINE.question().toLowerCase().replace(/['"]/g, '');

  while (!PLAY_AGAIN_RESPONSES.includes(playAgain)) {
    prompt("Invalid response. Enter 'y' for yes, 'n' for no.");
    playAgain = READLINE.question().toLowerCase().replace(/['"]/g, '');
  }

  if (playAgain === 'n' || playAgain === 'no') break;
  console.clear();   
}
  
    // REFACTORING
    // show the first card the dealer has dealt to himself
        // can refactor to share functions, some repetitive code, fix other issues with gameplay then can look to combine functions
        // can refactor to show each hit card, the dealer hit... card, the dealer hit... card. show this on a new line and then show all of the dealers
        // refactor functions that display info so they have a new line for consistent formatting
        // when user has 21 program asks to hit or stay - can just automatically break here
    // refactor player bust, can it be simple like dealer bust just looking at total?
