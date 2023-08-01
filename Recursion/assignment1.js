
//Using iteration (fibs):

function fibs(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

// Test with an example input of 8
const result = fibs(8);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

//Using recursion (fibsRec):

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const fibonacci = fibsRec(n - 1);
  fibonacci.push(fibonacci[n - 2] + fibonacci[n - 3]);
  return fibonacci;
}

// Test with an example input of 8
const resultRec = fibsRec(8);
console.log(resultRec); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
