// Easy 1 exercises


// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(Object.keys(ages).includes('Spot'));
// console.log(Object.keys(ages).includes('Eddie'));

// above works but can also use .hasOwnProperty()
// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Eddie'));

// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// let newStr = munstersDescription.substring(0, 1).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// or
// let newStr = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
// console.log(newStr);

// console.log(false == '0');
// console.log(false === '0');

// false and false - empty string is a falsy value. Nope, '0' is coerced so the comparison can be made, so probably coerced to number 0 which is falsy

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// console.log(ages);
// Object .assign will assing objects to another object - can't just put in data like "Marilyn : 22"

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'))
// console.log(str2.includes('Dino'))

// console.log(str1.match('Dino') !== null)
// console.log(str2.match('Dino') !== null)

// console.log(str1.match(/dino/gi));
// console.log(str2.match(/dino/gi));

// console.log(str1.indexOf('Dino') > -1)
// console.log(str2.indexOf('Dino') > -1)

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones[flintstones.length] = 'Dino'; alternative way just to check
// flintstones.push('Dino');


// flintstones = flintstones.concat('Dino');

// flintstones.push('Dino', 'Hoppy');
// flintstones = flintstones.concat('Dino', 'Hoppy');

// console.log(flintstones);

// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.


// let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// let newStr = advice.substring(0, advice.indexOf('house'));
// console.log(newStr);
// console.log(newStr.charAt(newStr.length - 1))
// console.log(newStr.charAt(newStr.length - 1) === ' ')



