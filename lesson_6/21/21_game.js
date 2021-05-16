const READLINE = require('readline-sync');
const DEALER_STAY_NUMBER = 17;
const BUST_NUMBER = 22;
const NUMBER_OF_ACES = 4;
const NUMBER_OF_SUITS = 4;
const LOWEST_NUMBER_CARD = 2;
const HIGHEST_NUMBER_CARD = 10;
const NUMBER_OF_JACKS_QUEENS_KINGS = 12;
const JACK_QUEEN_KING_VALUE = 10;
const MINIMUM_BET = 5;
const MAXIMUM_BET = 100;
const MAX_BUY_IN = 500;
const PLAY_AGAIN_RESPONSES = ['y', 'n', 'yes', 'no'];

let deck;
let playerCards;
let dealerCards;
let runningDollarTotal;

function initializeDeckNumbers() {
  let cards = [];
  let counter = 1;

  while (counter <= NUMBER_OF_SUITS) {
    let currentCard = LOWEST_NUMBER_CARD;
    while (currentCard <= HIGHEST_NUMBER_CARD) {
      cards.push(currentCard);
      currentCard += 1;
    }
    counter += 1;
  }
  return cards;
}

function initializeDeckJacksQueensKings() {
  let cards = [];
  let counter = 1;

  while (counter <= NUMBER_OF_JACKS_QUEENS_KINGS) {
    cards.push(JACK_QUEEN_KING_VALUE);
    counter += 1;
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
  deck = deck.concat(initializeDeckAces())
    .concat(initializeDeckJacksQueensKings())
    .concat(initializeDeckNumbers());
  return deck;
}

function dealerCardFaceUp(dealerCards) {
  if (dealerCards[0].length > 0) {
    return dealerCards[0][0];
  } else {
    return dealerCards[1][0];
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

  console.log(`==> Your cards are: ${flattenedPlayerCardArray.join(', ')}.\n`);
}

function showDealerHand(dealerCards) {
  let flattenedDealerCardArray = dealerCards.flat();

  console.log(`==> The dealer's cards were: ${flattenedDealerCardArray.join(', ')}.\n`);
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
  } else {
    return false;
  }
}

function dealerBust(dealerTotal) {
  if (dealerTotal >= BUST_NUMBER) {
    return true;
  } else {
    return false;
  }
}

function declareWinner(playerTotal, dealerTotal) {
  if (playerTotal > dealerTotal) {
    return 'the player wins!';
  } else if (dealerTotal > playerTotal) {
    return 'the dealer wins.';
  } else {
    return 'a tie';
  }
}

function validateStartingAmountResponse() {
  let response = Number(READLINE.question().replace(/['$']/g, ''));

  while (response % 5 !== 0 || response > MAX_BUY_IN) {
    blankLine();
    prompt(`Invalid response. Enter in a buy in of $${MAX_BUY_IN} or less. A buy in must also be in $${MINIMUM_BET} chip increments`);
    response = Number(READLINE.question().replace(/['$']/g, ''));
  }

  return response;
}

function validateBetAmountResponse() {

  let response = Number(READLINE.question().replace(/['$']/g, ''));

  while (response > runningDollarTotal) {
    blankLine();
    prompt(`Invalid response. Your bet cannot exceed the dollar amount of gambling chips you have. Place a bet in an amount less than or equal to your current amount of $${runningDollarTotal}`);
    response = Number(READLINE.question().replace(/['$']/g, ''));
  }

  while (response % 5 !== 0 || response > MAXIMUM_BET) {
    blankLine();
    prompt(`Invalid response. Bets must be in $${MINIMUM_BET} chip increments and cannot exceed $${MAXIMUM_BET}.`);
    response = Number(READLINE.question().replace(/['$']/g, ''));
  }

  return response;
}

function cashOut(runningDollarTotal, startingDollarAmount) {
  prompt(`You've been cashed out $${runningDollarTotal}`);
  prompt(`Your initial buy in was $${startingDollarAmount}`);

  if (runningDollarTotal > startingDollarAmount) {
    prompt(`You've won $${runningDollarTotal - startingDollarAmount}`);
  } else if (runningDollarTotal === startingDollarAmount) {
    prompt(`You broke even.`);
  } else {
    prompt(`You've lost $${startingDollarAmount - runningDollarTotal}`);
  }

  prompt('Thank you for playing 21');
}

console.clear();
prompt('Welcome to 21!');
prompt(`How much money would you like to exchange for chips? The maximum buy in is $${MAX_BUY_IN}. The minimum gambling chip is $${MINIMUM_BET} and chips cannot be bought in smaller increments.`);

const STARTING_DOLLAR_AMOUNT = validateStartingAmountResponse();
runningDollarTotal = STARTING_DOLLAR_AMOUNT;

while (runningDollarTotal > 0) {

  blankLine();
  prompt(`Your current dollar total in chips is: $${runningDollarTotal}`);
  prompt('How much would you like to bet on this hand?');
  let bet = validateBetAmountResponse();

  playerCards = [[],[]];
  dealerCards = [[],[]];
  deck = initializeDeck();

  dealACard(playerCards, deck);
  dealACard(dealerCards, deck);
  let dealerCardToShow = dealerCardFaceUp(dealerCards);

  dealACard(playerCards, deck);
  dealACard(dealerCards, deck);

  let playerTotal = (playerNumbersValue(playerCards)
    + playerAcesValue(playerCards, playerNumbersValue(playerCards)));

  let dealerTotal = (dealerNumbersValue(dealerCards)
    + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards)));

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

    playerTotal = (playerNumbersValue(playerCards)
      + playerAcesValue(playerCards, playerNumbersValue(playerCards)));

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
      prompt(`The dealer hit: ${newDealerCard}.`);

      dealerTotal = (dealerNumbersValue(dealerCards)
        + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards)));
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

  if (runningDollarTotal === 0) {
    prompt("You've run out of money to gamble with.");
    cashOut(runningDollarTotal, STARTING_DOLLAR_AMOUNT);
    break;
  }

  prompt("Would you like to bet again and play another hand? Type 'y' for yes. Type 'n' for no and you will be cashed out:");

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