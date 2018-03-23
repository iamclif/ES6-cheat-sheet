// advanced functions

// Closures //
// functions defined in another function
function generator(input) {
  var number = input
  // anonymous function
  return function() {
    return number * 2
  }
}
var calc = generator(900)
console.log(calc); // returns the function
console.log(calc()); // returns 1800

// IIFE //
// use them so you don't pollute the global scope
(function calc(){
  var number = 10
  console.log(number)// 10
})()

console.log(number) // not defined

// this works
(function calc(input){
  var number = input
  console.log(number)// 10
})(10)

var obj = {}
(function calc(input){
  obj.name = 'Clif'
})(obj)

console.log(obj) // [objec Object] {name: 'Clif'}

// methods and properties //
// arguments
function message(message) {
  console.log(message);
  console.log(arguments);
  console.log(arguments[1]);
}
message('hi', 10) // 'hi' [object Object]{0: 'hi', 1: 10}
// since this is essential an anonymous function there is no function name, so log statement would return nothing. 
var msg = function(message) {
  console.log(message);
}
console.log(msg.name); // ''
