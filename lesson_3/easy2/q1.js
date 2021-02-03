// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice = advice.replace('important', 'urgent');

console.log(advice);

// Note that if the string contains two or more occurrences of important, this code only replaces the first. Can you figure out how to replace all occurrences?
// I would say that you would have to loop over the string and do it with a loop