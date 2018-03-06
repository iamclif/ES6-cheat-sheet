//// Easliy extract array elements or object properties and store them in variables
// Array Destructuring
[a,b] = ['Hello', 'Clif']
console.log(a); // Hello
console.log(b); // Clif

// Object Destructuring
{name} = {name: 'Clif', age: 28}
console.log(name); // Clif
console.log(age); // undefined

// Example
const numbers = [1,2,3]
[num1, , num3] = numbers
console.log(num1, num3); // 1 // 3
