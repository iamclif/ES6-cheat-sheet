// var const let //
// block scope, local scope, global scope
// name is in the global scope
if(true) {
  var name = 'Clif'
}
console.log(name) // 'Clif'

// name is in the block scope
if(true) {
  let age = 33
}
console.log(age) // error age does not exist

// const //
const age = 33
console.log(age) // 33

const age = 33
age = 29
console.log(age) // error: assignment to constatn variable

// remember arrays and objects are reference types, hold pointer to those values in memory.
// versus pointing to the values directly in memory.
const AGES = [11,33,66]
console.log(AGES) // [11,33,66]
AGES.push(25)
console.log(AGES) // [11,33,66,25]

// hosting //
// let and const don't work the same as var
// let and const need to declare first

// // 
