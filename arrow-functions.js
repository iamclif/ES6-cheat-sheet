// ES5 function
function myFunction() {

}

// ES6 function
const myFunction = () => {}

// Example
// ES5
function printMyName(name) {
  console.log(name)
}
printMyName('Clif')
// ES6
const printMyName = (name) => {
  console.log(name)
}
printMyName('Clif')

// ES6 Shorcut only one agrument
const printMyName = name => {}

// ES6 Shorcut no agrument
const printMyName = () => {}

// ES6 more than one agrument
const printMyName = (one, two) => {}

// ES6 return
// long way
const multiply = (number) => {
  return number * 2
}
// short way. note: we can remove the () and return
const multiply = number => number * 2
