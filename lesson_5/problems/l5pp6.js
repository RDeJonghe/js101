// Practice problem 6

// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersArr = Object.entries(munsters);

munstersArr.forEach(el => {
  console.log(`${el[0][0].toUpperCase()}${el[0].slice(1)} is a ${el[1]['age']}-year-old ${el[1]['gender']}.`);
})


