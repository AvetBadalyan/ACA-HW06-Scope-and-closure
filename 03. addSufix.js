//Write a function that returns an anonymous function, which transforms its input by adding a
//particular suffix at the end.
function add_suffix(stringArr, suffix) {
  let newString = stringArr.map(function (element) {
    return element.concat(suffix);
  });
  return newString;
}

console.log(add_suffix(["hopeless", "total"], "ly"));
//need to fix bugs, returns undefined
