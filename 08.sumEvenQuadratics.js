// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

let arr = [10, 3, 1, 2, 5];

function calculator(arr) {
  let sum = 0;
  let evenArr = arr.filter(function (element) {
    return element % 2 === 0;
  });
  sum = evenArr.reduce(function (a, b) {
    return a ** 2 + b ** 2;
  });
  return sum;
}

console.log(` the the sum of even numbersʼ quadratic is ${calculator(arr)} `);
