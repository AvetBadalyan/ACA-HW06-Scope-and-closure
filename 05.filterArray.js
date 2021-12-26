//Write a function that implements filtering in array
function filterFalsyValues(arr) {
  return arr.filter(function (element) {
    return (
      element !== null && element !== "" && element !== NaN && element !== 0
    );
  });
}
console.log(filterFalsyValues([null, true, {}, { name: "Elon" }, "", NaN, 0]));
