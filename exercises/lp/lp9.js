// Write a function that takes two arguments, inventoryItem and transactions, and returns an array containing only the transactions for the specified inventoryItem.

// EXAMPLES: given
// DATA STRUCTURES: array of objects
// ALGORITHM:
  // set an empty results array
  // iterate over the array
  // if id matches push info

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

// can try using filter:

function transactionsFor(num, transactionTypes) {
  return transactionTypes.filter(el => el['id'] === num);
}



console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]



// my original solution that works
// function transactionsFor(num, TransactionName) {
//   let results = [];
//   for (let i = 0; i < transactions.length; i++) {
//     if (TransactionName[i]['id'] === num) {
//       results.push(TransactionName[i]);
//     }
//   }
//   return results;
// }