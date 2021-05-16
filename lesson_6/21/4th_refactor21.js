const READLINE = require('readline-sync');
const DEALER_STAY_NUMBER = 17;
const BUST_NUMBER = 22;
const PLAY_AGAIN_RESPONSES = ['y', 'n', 'yes', 'no'];
const NUMBER_OF_ACES = 4;
const NUMBER_OF_SUITS = 4;
const MINIMUM_BET = 5;
const MAXIMUM_BET = 100;
const MAX_BUY_IN = 500;
  
function initializeDeckNumbers() {
  let cards = [];
  let counter = 1;

  while (counter <= NUMBER_OF_SUITS) {
    let cardIncrementer = 2;
    while (cardIncrementer <= 10) {
      cards.push(cardIncrementer);
      cardIncrementer += 1;
    }
    counter += 1;
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
  let counter = 1;

  while (counter <= NUMBER_OF_ACES) {
    cards.push('Ace');
    counter += 1;
  }
  return cards;
}

function initializeDeck() {
  let deck = [];
  deck = deck.concat(initializeDeckAces()).concat(initializeDeckPeople()).concat(initializeDeckNumbers());
  return deck;
} 

function dealerCardFaceUp(dealerCards) {
  if (dealerCards[0].length === 1) {
    return dealerCards[0];
  } else {
    return dealerCards[1][0]; // the second card is pushed into the array, so if no aces, [1][0] is first card dealt, [1][1] is second card dealt
  }
}

function prompt(message) {
  console.log(`==> ${message}\n`);
}


function blankLine() {
  console.log('');
}

function showDealerAndPlayerCards(dealerCardToShow, playerCards) {
  
  let flattenedPlayerCardArray = playerCards.flat();

  console.log(`\n==> Dealer has: ${dealerCardToShow} and an unknown card\n`);
  console.log(`==> You have: ${flattenedPlayerCardArray[0]} and ${flattenedPlayerCardArray[1]}\n`);
}

function showPlayerHand(playerCards) {
  let flattenedPlayerCardArray = playerCards.flat();

  console.log(`==> Your cards are: ${flattenedPlayerCardArray.join(', ')}.\n`)
}

function showDealerHand(dealerCards) {
  let flattenedDealerCardArray = dealerCards.flat();

  console.log(`==> The dealer's cards were: ${flattenedDealerCardArray.join(', ')}.\n`)
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

function validateHitOrStayResponse() {

  let response = READLINE.question().toLowerCase().replace(/['"]/g, '');

  while (response !== 'hit' && response !== 'stay') {
    blankLine();
    prompt("Invalid response. Type 'hit' or 'stay'.");
    response = READLINE.question().toLowerCase().replace(/['"]/g, '');
  }

  return response;
}

function dealACard(hand, deck) {
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

function playerBust(playerTotal) {
  if (playerTotal >= BUST_NUMBER) {
    return true;
  }
}

function dealerBust(dealerTotal) {
  if (dealerTotal >= BUST_NUMBER) {
    return true;
  }
}

function declareWinner(playerTotal, dealerTotal) {
  if (playerTotal > dealerTotal) {
    return 'the player wins!';
  } else if (dealerTotal > playerTotal) {
    return 'the dealer wins.';
  } else {
    return 'a tie'
  }
}

function startingAmountResponse() {

  let response = Number(READLINE.question().replace(/['$']/g, ''));

  while (response % 5 !== 0 || response > MAX_BUY_IN) {
    blankLine();
    prompt(`Invalid response. Enter in a buy in of ${MAX_BUY_IN} or less. A buy in must also be in $${MINIMUM_BET} chip increments`);
    response = Number(READLINE.question().replace(/['$']/g, ''));
  }

  return response;
}

function betAmountResponse() {

  let response = Number(READLINE.question().replace(/['$']/g, ''));

  while (response % 5 !== 0 || response > MAXIMUM_BET) {
    blankLine();
    prompt(`Invalid response. Bets must be in $${MINIMUM_BET} chip increments and cannot exceed ${MAXIMUM_BET}.`);
    response = Number(READLINE.question().replace(/['$']/g, ''));
  }

  return response;
}

let deck;
let playerCards;
let dealerCards;

// blankLine();
console.clear();
prompt('Welcome to 21!');
prompt(`How much money would you like to exchange for chips? The maximum buy in is $${MAX_BUY_IN}. The minimum gambling chip is $5 and chips cannot be bought in smaller increments.`);

const STARTING_DOLLAR_AMOUNT = startingAmountResponse();
let runningDollarTotal = STARTING_DOLLAR_AMOUNT;


while (runningDollarTotal > 0) {

  blankLine();
  prompt(`Your current dollar total in chips is: $${runningDollarTotal}`);
  prompt('How much would you like to bet on this hand?');
  let bet = betAmountResponse();

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
    let userDecisionHitOrStay = validateHitOrStayResponse();

    if (userDecisionHitOrStay === 'stay') break;
    let newPlayerCard = dealACard(playerCards, deck);

    blankLine();
    prompt(`You hit: ${newPlayerCard}`);
    showPlayerHand(playerCards);

    playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));
    prompt(`Your total is: ${playerTotal}.`);
  
    if (playerBust(playerTotal)) {
      prompt('Busted! Dealer wins.');
      runningDollarTotal -= bet;
      prompt(`Your dollar amount in chips is: $${runningDollarTotal}`);
      break;
    }
  }

if (!(playerBust(playerTotal))) {

  blankLine();
   
  while (dealerTotal < DEALER_STAY_NUMBER) {

    let newDealerCard = dealACard(dealerCards, deck);
    prompt(`The dealer hit: ${newDealerCard}.`)
    dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));
  }

  if (dealerBust(dealerTotal)) {
    showDealerHand(dealerCards);
    prompt(`The dealer's total is ${dealerTotal}.`);
    prompt('Dealer Busted! Player Wins!');
    runningDollarTotal += bet;
    prompt(`Your dollar amount in chips is: $${runningDollarTotal}`);
  }
}

if (!(dealerBust(dealerTotal))) {
  showDealerHand(dealerCards);
}
    
  if (!(playerBust(playerTotal)) && !(dealerBust(dealerTotal))) {
  prompt(`The player has ${playerTotal} and the dealer has ${dealerTotal}`);
  prompt(`The result is ${declareWinner(playerTotal, dealerTotal)}`);
  
  if (playerTotal > dealerTotal) {
    runningDollarTotal += bet;
  }
  if (playerTotal < dealerTotal) {
    runningDollarTotal -= bet;
  }
  prompt(`Your dollar amount in chips is: $${runningDollarTotal}`);
  }

  prompt("Would you like to bet again and play another hand? Type 'y' for yes. Type 'n' for no and you will be cashed out:")

  let playAgain = READLINE.question().toLowerCase().replace(/['"]/g, '');

  while (!PLAY_AGAIN_RESPONSES.includes(playAgain)) {
    blankLine();
    prompt("Invalid response. Enter 'y' for yes, 'n' for no.");
    playAgain = READLINE.question().toLowerCase().replace(/['"]/g, '');
  }

  if (playAgain === 'n' || playAgain === 'no') {
    console.clear();
    cashOut(runningDollarTotal, STARTING_DOLLAR_AMOUNT);


    break;
  }

  console.clear();   
}
  
function cashOut(runningDollarTotal, startingDollarAmount) {
  prompt(`You've been cashed out $${runningDollarTotal}`);
  prompt(`Your initial buy in was $${startingDollarAmount}`);

  if (runningDollarTotal > startingDollarAmount) {
    prompt(`You've won $${runningDollarTotal - startingDollarAmount}`);
  } else if (runningDollarTotal === startingDollarAmount) {
    prompt(`You broke even.`)
  } else {
    prompt(`You've lost $${startingDollarAmount - runningDollarTotal}`);
  }

  prompt('Thank you for playing 21');
}


// Refactoring
// create a newlinePrompt and a promptNewline function - will be used depending on where the newline is needed
  // handle when a $ is entered for bet, use regex to replace

// BETTING FEATURE
// ask how much they will start with for chips, need $ amount in number save to variable
  // keep this as a starting amount to compare with
// set a running balance total variable
  // this will be altered each game based on how much a person bets
// set a minimum bet constant = 5
// set a max starting amount = 500
// set max bet = 100
// constant bet increments = [5, 10, 25, 50, 100]

// need an outer loop while player money > 0
// breaks if money is 0 or if player wants to cash out
  // when this breaks show how much player won or lost in comparison with initial amount
// need an inner loop where person bets each time
  // ask for individual bet and save it to a variable
  // depending on outcome of hand add or subtract that amount to running total

// Ask how much they will start with $
  // $5 chips - while loop with error message, # % 5 === 0

// Have to determine winnings or losings
// this is in comparison to initial bet
// if running dollarTotal > starting dollar amount
  // let winnings = running dollar total - starting amount
// if running dollar total = starting dollar amount
  // broke even
// if running dollar total < starting dollar amount
  // let losings = starting dollar amount - running dollar total






// REFACTORING
// when asking how much do you want to bet, show how much they have
    // show the first card the dealer has dealt to himself
        // can refactor to share functions, some repetitive code, fix other issues with gameplay then can look to combine functions
        // can refactor to show each hit card, the dealer hit... card, the dealer hit... card. show this on a new line and then show all of the dealers
        // refactor functions that display info so they have a new line for consistent formatting
        // when user has 21 program asks to hit or stay - can just automatically break here
    // refactor player bust, can it be simple like dealer bust just looking at total?
