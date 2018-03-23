// primitive type
const num1 = 1
const num2 = number
console.log(num2) // copies num1 - 1

// reference types
const person {
  name: 'Clif'
}
const person2 = person
console.log(person2) // doesn't copy - pointer points from memory

// to copy do this
const person {
  name: 'Clif'
}
const person2 = {
  ...person 
}
