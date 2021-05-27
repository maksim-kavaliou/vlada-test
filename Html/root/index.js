var x = 1 + 2
var y = x + 3
let a = 10
const b = 123



console.log(x)
console.log(y)


console.log(a)
console.log(b)


function sum(a,b) {
  return a + b;
}

console.log(sum(123,456))

let sum1 = function(a,b) {
  return a + b;
}

console.log(sum1(183,456))

let sum2 = (a, b) => a + b;


[1,2,3,4].forEach((item, i) => {
  console.log(`value = ${item}  index = ${i}`)
});

console.log(sum2(12123,456))

function onFormSubmit(e) {
  console.log(e);
  e.preventDefault();
  console.log("submit pressed");
}
