/* Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4. */


function cleanStr(str) {
  let clean = str.toLowerCase().replace(/[^a-z' ']/g, '').replace(/[']/g, '');
  return clean;
}

function wordSizes(string) {
  let str = cleanStr(string);
  let arr = str.split(' ');
  let obj = {};


  for (let i = 0; i < arr.length; i++) {
    let wordSize = arr[i].length;
    if (arr[wordSize] === 0) {
      continue;
    }
    if (!obj[wordSize]) {
      obj[wordSize] = 0;
    }
    obj[wordSize] += 1;
  }
  return obj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}