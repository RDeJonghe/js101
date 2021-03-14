// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


// function cleanUp(str) {
//   str = str.replace(/[^a-z]/gi, ' ');
 

//   strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[i + 1]) {
//       strArr[i] = '';
//     }
//   }
//   return strArr.join('');
// }


// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " "); // note that [^a-z] here replaces space with space
// }

// cand do this with by comparing character values

function cleanUp(str) {
  let cleanText = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      cleanText += str[i];
    } else {
      cleanText += ' ';
    }
  }
  return cleanText.replace(/\s+/gi, ' ');
}



console.log(cleanUp("---what's my +*& line?"));    // " what s my line "