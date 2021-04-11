// easy 2 exercise 1

// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// algorithm
// create function that takes as arguments an array and an object
// create a name variable set it equal to the name using concatenation
  // access name in array using bracket notation
// create a job variable set it equal to job using concatenation
  // access it using object bracket or dot notation
// log sentence using a template literal and variables


function greetings(arr, obj) {
  let name = arr[0] + ' ' + arr[1] + ' ' + arr[2];
  let job = obj.title + ' ' + obj.occupation;

  return `Hello, ${name}! Nice to have a ${job} around.`;
}



console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.