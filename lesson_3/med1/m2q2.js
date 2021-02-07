let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// let arr = munstersDescription.split('').map(el => el.toUpperCase()).forEach(el => {
//   (el === 'T' || el === 'M') el.toLowerCase()});


  // let arr = munstersDescription.split('')//.forEach(el => {
  //   // return (el === 'T' || el === 'M') ? el.toLowerCase() : el.toUpperCase()});

  //   console.log(arr);

//     arr.forEach(el => {
//       return (el === 'T' || el === 'M') ? el.toLowerCase() : el.toUpperCase();
//     })

// console.log(arr);

let newStr = munstersDescription.split('').map(el => {
  if (el === el.toUpperCase()) {
    return el.toLowerCase();
  }
  else {
    return el.toUpperCase()
  }
}).join('');

console.log(newStr);

let newerStr = munstersDescription.split('').map(el => {
  return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
}).join('');

console.log(newerStr);

