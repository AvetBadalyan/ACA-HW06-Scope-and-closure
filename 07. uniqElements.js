// Given an array. Determine whether it consists only from uniques or not.

let arr = [5, 5, 4, 2, 3, 10, 10, 9];

function unique(arr) {
  let uniques = [];
  arr.forEach((element) => {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  });
  if (uniques.length < arr.length) {
    return false;
  } else {
    true;
  }
}

if (unique(arr) === true) {
  console.log(` Array consists only of unique elements`);
} else {
  console.log(` Array DOES NOT consist only of unique elements`);
}

//version 2 Best solution
function checkUnique(arr) {
  return arr.every(function (v, i, a) {
    return i == a.lastIndexOf(v);
  });
}
console.log(checkUnique([1, 1, 2, 2]));
