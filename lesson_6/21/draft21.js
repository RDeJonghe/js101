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

const READLINE = require('readline-sync');
const DEALER_STAY_NUMBER = 17;
const BUST_NUMBER = 22;

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

// function initializeSuits() { // not going to work as planned with pairing with cards
//   let suits = [];
//   let counter13 = 1;

//   while (counter13 <= 13) {
//     suits.push('Hearts', 'Diamonds', 'Clubs', 'Spades');
//     counter13 += 1;
//   }
//   return suits;
// }

// let suits = initializeSuits();
// let deck = initializeDeck();
// console.log(deck);
// console.log(deck.length)
// console.log(suits);
// console.log(suits.length);

// 2. Deal cards to player and dealer
  // This has to be done randomly - give each person 2 cards - this could be refactored to alternate, right now player 2 dealer 2
  // create an dealer array for numbers, and a dealer array for aces, same for player, 2 player arrays, - these are nested
    // Keep aces separate since their value can vary - use a nested array to keep separately
      // we can use the length property of the aces array to tell how many they have, and what to do if there are multiple aces
    // choose a random index each time, this picks card randomly
      // assign that card to the appropriate array,
        // this depends on player, dealer and ace or not
      // slice that value out of the deck array

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

let deck = initializeDeck();

let playerCards = playerDeal(deck);
let dealerCards = dealerDeal(deck);

// console.log(dealerCards);


// console.log(playerCards);
// console.log(dealerCards);
// console.log(deck.length);


// 2.5 SHOW CARDS
// Can use template literals to show cards
// for dealer, create a function to show a random card from the nested array
// take the nested array and join it
// then just use math .random to generate a random index number based on length of array,
// show using the random index


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


showDealerAndPlayerCards(dealerCards, playerCards);

// 3. Player turn: hit or stay
  //    - repeat until bust or stay

// require readline sync
// create a prompt function that will display questions, what you pass in to it is displayed
// Going to need a loop, while the value of all cards is > 21 or user response is 'stay'
  // Need to figure out when the value is greater than 21
  // Have 2 arrays: aces and numbers
    // need a total variable and a length of aces variable
    // if arr1 has one card and arr2 has 1 card never a bust
    // if arr 1 has zero cards and arr2 has 2 cards never a bust
    // if arr 1 has one card and arr2 has 2 cards never a bust
    // if value of arr2 > 21 bust
    // if value of arr2 = 20 && arr1.length = 2 bust
    // if value of arr2 = 19 && arr2.length = 3 bust
    // if value of arr2 = 18 && arr2.length = 4 bust

  // When hit
    // generate a random card
    // pass that card to the appropriate nested array
      // if ace to aces, if num then to nums


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

while (true) {

  prompt('Would you like to hit or stay?');

  let userDecisionHitOrStay = validateHitOrStayInput()

  if (userDecisionHitOrStay === 'stay') break;

  let newPlayerCard = hit(deck);

  // console.log(newPlayerCard);

  addNewCardToHand(newPlayerCard);

  console.log(playerCards); // CREATE A FUNCTION TO SHOW NEW CARDS TO THE PLAYER AS THE GAME GOES ON, each new card is shown
  // console.log(deck.length);

  if (playerBust(playerCards)) {
    prompt('Busted! Dealer wins.'); // ALSO NEED TO BREAK OUT OF THE GAME, MAKE A PLAY AGAIN LOOP, SO THE REST OF THE PROGRAM DOESN'T RUN, NO NEED FOR THE DEALER TO HIT IF THE PLAYER BUSTS
    break;
  }

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

// 4. If player bust, dealer wins.
  // already have code that determines bust, just print result when that happens

// 5. Dealer turn: hit or stay
  //    - repeat until total >= 17
  // HAVE TO DETERMINE TOTAL BETWEEN NUMBERS AND ACES, figure out if ace is worth 1 or 11
  // set a constant at 17 for dealer stay/magic number
  // set a variable for ace value
    // this will be determined based off of the numbers and also the length of ace value array (how many aces there are)
  // set a variable for number value
    // reduce the array to the sum of the numbers
  // determine ace value
    // if number value is <= 10 && length of ace array is 1, ace value = 11
    // if number value is > 10 && length of ace array is 1 then ace value = 1
    // if number value is <= 9 && length of ace array is 2 then ace value = 12
    // if number value is > 9 && length of ace array is 2 then ace value = 2
    // if number value is <= 8 && length of ace array is 3 then ace value = 13
    // if number value is > 8 && length of ace array is 3 then ace value = 3
    // if number value is <= 7 && length of ace array is 4 then ace value = 14
    // if number value is > 7 && length of ace array is 4 then ace value = 4
  // set a variable for dealer total
  // determine dealer total
    // add the reduced number value to the ace value variable
  // determine hit or stay
    // if dealer total is already >= 17 stay
    // open a while loop, while dealer total <= 17
    // use a hit function to generate a random card
    // use a function to add new card to dealer hand
    // use same reduce and total value to see total value
    // when the total is 17 or over break
  // save the total, it will be used in comparison for winner

  function dealerNumbersValue(dealerCards) {
    return dealerCards[1].reduce((accum, num) => accum + num, 0);
  }

  function dealerAcesValue(dealerCards, dealerNumbersValue) {
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

  //console.log(dealerNumbersValue(dealerCards));

  //console.log(dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards)));

let dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));

// console.log(dealerTotal);


 // determine hit or stay
    // if dealer total is already >= 17 stay
    // open a while loop, while dealer total <= 17
    // use a hit function to generate a random card
    // use a function to add new card to dealer hand
    // use same reduce and total value to see total value
    // when the total is 17 or over break
  // save the total, it will be used in comparison for winner


  function addNewCardToDealerHand(newCard) {
    // console.log(playerCards);
    if (newCard === 'Ace') {
      dealerCards[0].push(newCard);
    } else {
      dealerCards[1].push(newCard);
    }
  }

  

  while (dealerTotal < DEALER_STAY_NUMBER) {

    let newDealerCard = hit(deck);

    // CREATE A FUNCTION / PROMPT TO SHOW EACH CARD AS THE DEALER HITS, SO PLAYER SEES WHAT THE ADDED CARDS ARE

    addNewCardToDealerHand(newDealerCard);

    dealerTotal = dealerNumbersValue(dealerCards) + dealerAcesValue(dealerCards, dealerNumbersValue(dealerCards));

    // console.log(dealerCards);
    // console.log(dealerTotal);

  }

  if (dealerTotal >= BUST_NUMBER) {
    prompt('Dealer Busted! Player Wins!') // USE THIS TO ALSO BREAK OUT OF THE ENTIRE GAME LOOP, NO NEED TO COMPARE
  }

  // 6. If dealer busts, player wins.
    // already have the dealer total,
    // if total > 21 bust and player wins
    // display player win info

// 7. Compare cards and declare winner.
  // Need to determine the value of the player (already have total value for dealer)
    // use a player Numbers Value function to get numbers value
    // use a player Aces value function to get aces value 
      // these steps are similar to process to determine total for dealer, can always refactor to make more concise and share functions
    // with the total, show both player cards, user cards and declare winner



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

  let playerTotal = playerNumbersValue(playerCards) + playerAcesValue(playerCards, playerNumbersValue(playerCards));




  prompt(`The player has ${playerTotal} and the dealer has ${dealerTotal}`);

  function declareWinner(playerTotal, dealerTotal) { // only need > since busts will break the game loop, have to add game loop
    if (playerTotal > dealerTotal) {
      return 'the player wins!';
    } else if (dealerTotal > playerTotal) {
      return 'the dealer wins.';
    } else {
      return 'a tie'
    }
  }

  prompt(`The result is ${declareWinner(playerTotal, dealerTotal)}`);
  

  // REFACTORING
    // NEED TO ADD PLAY AGAIN LOOP.
      // this is needed so that the game will break on a bust and not continue to run, right now it continues to run
      // need to display cards as the game progresses, show what cards the dealer hits
      // can refactor to share functions, some repetitive code, fix other issues with gameplay then can look to combine functions

      