// PROBLEM: You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.
  // INPUT: a number
  // OUTPUT: an array of numbers (that represent lights on
  // UNDERSTAND PROBLEM
    // process is toggle all switches, toggle all multiples of two, toggle all multiples of three, do this until reaching the specified number of passes
    // need a way to indicate if a number is off or on, a type of indicator
  // QUESTIONS:
    // only positive numbers passed - yes, 1 or higher

// EXAMPLES/TEST CASES: GIVEN

// DATA STRUCTURES:
  // numbers
  // an array of numbers - the output
  // an object - key value pairs, the key is the number - the value is on/off status

// ALGORITHM
// HIGH LEVEL
  // given a number as an argument - this is the count of the lights, and also the number of passes
  // initiate the lights tracker - this will store the light number and the light status
    // so each number will have an on / off status
  // start a loop at the second pass
    // since the first pass is just turning everything on, the intialization does that
    // while < the number passed as arguments - this represents the number of turns
    // create a multiples variable
      // on each iteration of the loop this will be reset based off of the current value
      // this will show all evenly divsible multiples of the passed argument number that are <= that passed argument number
      // access the lights tracker for each of these numbers and switch it to either on / off
      // increment so the loop continues
  // after the loop completes
    // take the lights tracker and convert it to output
    // just take the number of all lights that have a status of 'on' and push them into an array

// DETAILED
  // create a function that takes a number as an argument
    // only positive numbers will be passed, don't worry about pass by reference/ nothing can happen to this value
  // initiate a lights tracker object
    // create a counter and a loop, while the counter is <= the argument number
    // use bracket notation to put that number as a key and the value of on
  // start a loop to toggle all the switches
    // the loop can start with the number 2, 1 was already done by initializing object values to on
    // the stopping condition is the argument number passed <=
    // create a multiples variable
      // this will change on each iteration
      // represents all multiples of the current number that are less than or equal to stopping condition number
      // THIS WILL USE A HELPER FUNCTION
        // create an empty results array
        // create a multiply by variable equal to one
        // create a current mult variable = the argument passed number
        // while the current result variable <= the passed argument number/stopping condition
          // push the multiplication of the two numbers to the results array
        // return the results array
    // the result of the helper function indicates all swithces that need to be changed status
    // iterate over this array of all numbers that need a status change
      // this is a nested iteration, this iteration happens for each outer iteration
      // on each iteration access the lights tracker object
        // if status is on, set it to off
        // if status is off, set it to on
    // increase the passed argument number that is part of the loop
    // after all iterations cease
    // use the object to create an array of the number keys (these are actually strings)
      // USE A HELPER FUNCTION FOR THIS
      // call Object.keys to create an array of the keys
      // convert these to numbers to get desired output
    // return the results of this helper function


function lightsOn(switches) {
  let lightsTracker = initializeLightsTracker(switches);
  let currentSwitch = 2;

  while (currentSwitch <= switches) {
    let lightsToChange = allMultiples(currentSwitch, switches);

    lightsToChange.forEach(lightNumber => {
      if (lightsTracker[lightNumber] === 'On') {
        lightsTracker[lightNumber] = 'Off';
      } else {
        lightsTracker[lightNumber] = 'On';
      }
    })
    currentSwitch += 1;
  }
  return lightNumbersOn(lightsTracker);
}

// HELPER FUNCTIONS

function lightNumbersOn(obj) {
  let results = [];

  Object.entries(obj).forEach(pair => {
    if (pair[1] === 'On') {
      results.push(Number(pair[0]));
    }
  })

  return results;
}

function allMultiples(num, totalSwitches) {
  let results = [];
  let multiplyBy = 1;
  let currentTotal = num;

  while (currentTotal <= totalSwitches) {
    currentTotal = num * multiplyBy;
    if (currentTotal <= totalSwitches) {
      results.push(currentTotal);
    }
    multiplyBy += 1;
  }
  return results;
}

function initializeLightsTracker(switches) {
  let lightsTracker = {};
  let lightNumber = 1;

  while (lightNumber <= switches) {
    lightsTracker[lightNumber] = 'On';
    lightNumber += 1;
  }

  return lightsTracker;
}

 console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on [1, 2, 3, 4, 5]
// Round 2: lights 2 and 4 are now off (multiples of 2);     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off (multiples of 3 are touched); 1 and 5 are on
// Round 4: lights 2 and 3 are now off; (multiples of 4 are touched - in this case 4 turned back on)     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on (multiples of 5, 5 turned off)

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]