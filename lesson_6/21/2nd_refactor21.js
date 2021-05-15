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

function playerDeal(deck) {
  let playerAces = [];
  let playerNumbers = [];
  let counter = 1;
  
  while (counter <= 2) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let playerCard = deck[randomIndex];

    if (playerCard === 'Ace') {
      playerAces.push(playerCard);
    } else {
      playerNumbers.push(playerCard);
    }

    deck.splice(randomIndex, 1);
    counter +=1;
  }

  return [playerAces, playerNumbers];
}

function dealerDeal(deck) {
  let dealerAces = [];
  let dealerNumbers = [];
  let counter = 1;
  
  while (counter <= 2) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let dealerCard = deck[randomIndex];

    if (dealerCard === 'Ace') {
      dealerAces.push(dealerCard);
    } else {
      dealerNumbers.push(dealerCard);
    }

    deck.splice(randomIndex, 1);
    counter +=1;
  }

  return [dealerAces, dealerNumbers];
}

function pickDealerCardToShow(dealerCards) {
  flattenedDealerCardArray = dealerCards.flat();

  let randomIndex = Math.floor(Math.random() * flattenedDealerCardArray.length);

  return flattenedDealerCardArray[randomIndex];
}

function showDealerAndPlayerCards(dealerCards, playerCards) {
  
  let flattenedPlayerCardArray = playerCards.flat();

  console.log(`Dealer has: ${pickDealerCardToShow(dealerCards)} and an unknown card`);
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

function hit(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let anotherCard = deck[randomIndex];
  deck.splice(randomIndex, 1);

  // let removedCard = deck.splice(randomIndex, 1);

  // console.log(`this card has been removed: ${removedCard}`);

  return anotherCard;
}

function addNewCardToHand(newCard) {
  // console.log(playerCards);
  if (newCard === 'Ace') {
    playerCards[0].push(newCard);
  } else {
    playerCards[1].push(newCard);
  }
}

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

  if (numbersAddedValue > 21) {
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

function dealerAcesValue(dealerCards, dealerNumbersValue) { // can fix this by just making the ace value = length, each big number is assigned, then else dealer aces value = acesarray.length
  let dealerAcesValue = 0;
  let acesArray = dealerCards[0];

  if (dealerNumbersValue <= 10 && acesArray.length === 1) {
    dealerAcesValue = 11;
  } else if (dealerNumbersValue > 10 && acesArray.length === 1) {
    dealerAcesValue = 1;
  } else if (dealerNumbersValue <= 9 && acesArray.length === 2) {
    dealerAcesValue = 12;
  } else if (dealerNumbersValue > 9 && acesArray.length === 2) {
    dealerAcesValue = 2;
  } else if (dealerNumbersValue <= 8 && acesArray.length === 3) {
    dealerAcesValue = 13;
  } else if (dealerNumbersValue > 8 && acesArray.length === 3) {
    dealerAcesValue = 3;
  } else if (dealerNumbersValue <= 7 && acesArray.length === 4) {
    dealerAcesValue = 14;
  } else if (dealerNumbersValue > 7 && acesArray.length === 4) {
    dealerAcesValue = 4;
  }
  
  return dealerAcesValue;
}

function addNewCardToDealerHand(newCard) {
  // console.log(playerCards);
  if (newCard === 'Ace') {
    dealerCards[0].push(newCard);
  } else {
    dealerCards[1].push(newCard);
  }
}

function playerNumbersValue(playerCards) {
  return playerCards[1].reduce((accum, num) => accum + num, 0);
}

function playerAcesValue(playerCards, playerNumbersValue) {
  let playerAcesValue = 0;
  let acesArray = playerCards[0];

  if (playerNumbersValue <= 10 && acesArray.length === 1) {
    playerAcesValue = 11;
  } else if (playerNumbersValue > 10 && acesArray.length === 1) {
    playerAcesValue = 1;
  } else if (playerNumbersValue <= 9 && acesArray.length === 2) {
    playerAcesValue = 12;
  } else if (playerNumbersValue > 9 && acesArray.length === 2) {
    playerAcesValue = 2;
  } else if (playerNumbersValue <= 8 && acesArray.length === 3) {
    playerAcesValue = 13;
  } else if (playerNumbersValue > 8 && acesArray.length === 3) {
    playerAcesValue = 3;
  } else if (playerNumbersValue <= 7 && acesArray.length === 4) {
    playerAcesValue = 14;
  } else if (playerNumbersValue > 7 && acesArray.length === 4) {
    playerAcesValue = 4;
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

let deck;
let playerCards;
let dealerCards;

while (true) {

  deck = initializeDeck();
  playerCards = playerDeal(deck);
  dealerCards = dealerDeal(deck);
  let playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));
  let dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));

  showDealerAndPlayerCards(dealerCards, playerCards);

  while (true) {

    prompt('Would you like to hit or stay?');

    let userDecisionHitOrStay = validateHitOrStayInput()

    if (userDecisionHitOrStay === 'stay') break;

    let newPlayerCard = hit(deck);

    addNewCardToHand(newPlayerCard);

    showPlayerHand(playerCards);

    playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));

    prompt(`Your total is: ${playerTotal}.`);
  
    if (playerBust(playerCards)) {
      prompt('Busted! Dealer wins.');
      break;
    }

  }


if (!(playerBust(playerCards))) {

      
  while (dealerTotal < DEALER_STAY_NUMBER) {
    let newDealerCard = hit(deck);

    addNewCardToDealerHand(newDealerCard);

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
        // can refactor to share functions, some repetitive code, fix other issues with gameplay then can look to combine functions
        // can refactor to show each hit card, the dealer hit... card, the dealer hit... card. show this on a new line and then show all of the dealers
        // refactor functions that display info so they have a new line for consistent formatting
