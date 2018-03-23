// Regular Expressions //
var string = 'abc'
// between the slashes
var pattern = /ab/
// create and object
console.log(pattern) // [object RegExp] {...}

console.log(pattern.exec(string)) // ['ab']
console.log(pattern.test(string)) // true
console.log(string.match(pattern)) // ['ab']
