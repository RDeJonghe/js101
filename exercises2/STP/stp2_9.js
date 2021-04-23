/* Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. */

// algorithm
// create function that takes two arguments, a word and text
// lowercase everything to count correctly
// create an empty results array
// split the text at the space ' '
// iterate over the array of words
// when a word equals input word push it to results
// return length of results array



const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(word, paragraph) {
//   let results = [];
//   let wordsArr = paragraph.toLowerCase().split(' ');

//   for (let i = 0; i < wordsArr.length; i++) {
//     if (wordsArr[i] === word) {
//       results.push(wordsArr[i])
//     }
//   }
//   return results.length;
// }

// refactor with filter

function searchWord(word, paragraph) {
  return paragraph.toLowerCase()
    .split(' ')
    .filter(splitWords => splitWords === word)
    .length;
}


console.log(searchWord('sed', text));      // 3