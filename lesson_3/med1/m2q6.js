
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// it looks like it would check this but I think it won't. Probably something else quirky. Ends up saying false

// JavaScript doesn't let you use == and === to determine whether a value is NaN

// way to check is with isNaN().

console.log(isNaN(nanArray[0]));
console.log(Number.isNaN(nanArray[0]))