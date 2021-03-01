
// PROBLEM
  /* Letter Counter (Part 2)
  Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4. */
// EXAMPLES: given
// DATA STRUCTURES: string, array, object
// ALGORITHM:
  // Clean up the string with regex to remove non alphanumeric characters   
  // Take the string and split into an array at the space, spaces not needed
  // set empty object
  // iterate over array
    // set the word length of each element each time through
    // account for an empty str with a length of zero using continue
    // check to see if the key already exists in the array using bang operator, if it doesn't exist set it to zero, it will be incremented later
    // assign and increment the key value
  // return the object


  // function wordSizes(wordStr) {
  //   let cleanWordStr = wordStr.replace(/[^a-zA-Z0-9' ']/g, '').replace(/["'"]/g, '');
  //   console.log(cleanWordStr);
  //   let cleanWordArr = cleanWordStr.split(' ');
  //   let lengthObj = {};

  //   for (let i = 0; i < cleanWordArr.length; i++) {
  //     let wordLength = cleanWordArr[i].length;
      
  //     if (wordLength === 0) {
  //       continue;
  //     }
  //     if (!lengthObj[wordLength]) {
  //       lengthObj[wordLength] = 0;
  //     }
  //     lengthObj[wordLength] += 1;
  //   }
  //   return lengthObj;
  // }


function wordSizes(str) {
  let cleanStr = str.replace(/[^a-zA-z' ']/g, '').replace(/["'"]/g, '');
  let cleanStrArr = cleanStr.split(' ');
  let lengthObj = {};
  

  for (let i = 0; i < cleanStrArr.length; i++) {
    let wordLength = cleanStrArr[i].length;

    if (cleanStrArr[i].length = 0) {
      continue;
    }
    if (!lengthObj[wordLength]) {
      lengthObj[wordLength] = 0;
    }
    lengthObj[wordLength] += 1;
  }
  return lengthObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up do'c?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

