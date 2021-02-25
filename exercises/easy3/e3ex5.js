// easy 3 ex 5

function triangle(num) {
  let padding = num;
  let stars = 1;
  for (let i = num; i >= 0; i -= 1) {
    console.log(' '.repeat(padding) + '*'.repeat(stars));
    padding -= 1;
    stars += 1;
  }
}

triangle(5);
triangle(9);