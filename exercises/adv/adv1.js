/* Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

Examples:

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them there without quotes. */


// PROBLEM: given
  // input: a template variable that has to be made
  // output: a string
  // options for words can be chosen multiple times
  // the template uses the type of wrods multiple times so it has to generate multiple random values
// EXAMPLES: given
// DATA STRUCTURES:
  // Template: a string with template literals that will put random variables in the space
  // Variables to store the random values
    // descriptive like chosenVerb, chosenNoun - these will be placed in the string
    // these will be set equal to math.random of a list of all of the options
  // Word options
    // nested array, each element will be a word type
    // can randomly generate based off of the nested word type
    // for nouns, probably need 2 - one for a person/animal and one for a thing - so sentences make sense
// ALGORITHM
  // declare the template
    // the template will have key words for each word type
    // these will match the keys of an object, so the value can go and be found
  // create an object to store words used to replace
    // object will have keys of word type (verb, noun, etc)
    // the values will be an array of word options - these can be found randomly
  // create a function that takes the template as an argument
    // take the template and split it at word level
    // iterate over the split template
      // on each iteration check the word to see if it exists as an object key
      // if it exists
        // randomly generate one of the values from the array attached to that key word - this could be a helper function
        // replace that word with they key word
      // if it doesn't exist do nothing
    // join at the word level and return new string


// let template1 = `The ${adjective} brown ${nounAnimal} ${adverb} ${verb} the ${adverb} yellow ${nounAnimal}, who ${adverb} ${verb} his ${nounThing} and looks around.`

let template1 = 'The adjective brown nounAnimal adverb verb the adjective yellow nounAnimal who adverb verb his nounThing and looks around.'

let template2 = 'The nounAnimal verb the nounAnimal2 tail.'
// The "fox" "bites" the "dog"'s "tail".

let wordTypeAndExamples = {
  nounAnimal: ['fox', 'dog', 'cat'],
  nounAnimal2: ['fox\'s', 'dog\'s', 'cat\'s'],
  nounThing: ['head', 'leg', 'tail'],
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
}

let randomWord = function(keyWord) {
  let wordArrayLength = wordTypeAndExamples[keyWord].length;
  let randomIndex = Math.floor(Math.random() * wordArrayLength);
  return wordTypeAndExamples[keyWord][randomIndex];
}

let madlibs = function(template) {
  let wordTemplate = template.split(' ');

  for (let i = 0; i < wordTemplate.length; i++) {
    if (wordTypeAndExamples[wordTemplate[i]]) {
      // console.log(wordTemplate[i]);
      // console.log(wordTypeAndExamples[wordTemplate[i]]);
      // console.log(randomWord(wordTemplate[i]));
      wordTemplate[i] = randomWord(wordTemplate[i]);
    }
  }
  return wordTemplate.join(' ');
}


console.log(madlibs(template1));
console.log('<>'.repeat(20));
console.log(madlibs(template2));


/*
function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/