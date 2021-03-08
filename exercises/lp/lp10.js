
// PROBLEM
/* Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise. */

// EXAMPLES: given
// DATA STRUCTURES: array, objects
// ALGORITHM
  // identify all item transactions with existing function from last exercise
  // set this to it's own array
  // set total variable to 0
  // iterate over this array
    // if it is "in", add to the total, if it is out, subtract
    // if quantity is > 0 return true


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


// my solution that worked
// function isItemAvailable(num, transactionTypes) {
//   let itemArray = transactionsFor(num, transactionTypes);
//   let total = 0;

//   for (let i = 0; i < itemArray.length; i++) {
//     if (itemArray[i]['movement'] === 'in') {
//       total += itemArray[i]['quantity'];
//     } else {
//       total -= itemArray[i]['quantity']
//     }
//   }
//   return total > 0;
// }


// book solution can do the same thing, but with reduce. can call reduce on the helper function. The accumulator will be the quantity

// function isItemAvailable(num, transactionType) {
//   let quantity = transactionsFor(num, transactionType).reduce((accum, el) => {
//     if (el.movement === 'in') {
//       return accum + el.quantity;
//     } else {
//       return accum - el.quantity;
//     }
//   }, 0)
//   return quantity > 0;
// }

// can also do with ternary operator

// function isItemAvailable(num, transactionType) {
//   let stock = 0;
//   let itemArr = transactionsFor(num, transactionType);

//   itemArr.forEach(el => el.movement === 'in' ? stock += el.quantity : stock -= el.quantity);
//   return stock;
// }

// function isItemAvailable(inventoryItem, transaction) {
//   let query = transactionsFor(inventoryItem, transaction);
//   let inventory = 0;
//   query.forEach(el => el.movement === 'in' ? inventory += 1 : inventory -= 1);

//   return inventory > 0;
// }



function transactionsFor(num, transactionTypes) {
  return transactionTypes.filter(el => el['id'] === num);
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


// book solution
// function isItemAvailable(item, transactions) {
  //   let quantity = transactionsFor(item, transactions).reduce(
  //     (sum, transaction) => {
  //       if (transaction.movement === "in") {
  //         return sum + transaction.quantity;
  //       } else {
  //         return sum - transaction.quantity;
  //       }
  //     },
  //     0
  //   );
  //   return quantity > 0;
  // }