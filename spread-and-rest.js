//// operators ...
// spread ... used to split up array elements or objects properties
const newArray = [...oldArray, 1,2]
const newObject = {...oldObject, newProp:5}
// rest ... used to merge a list of function arguments into an newArray
function sortArgs(...args) {
  return args.sort()
}

// example spread on array
const numbers = [1,2,3,4,5,6]
const newNumbers = [...numbers, 7]
console.log(newNumbers);
// result 1,2,3,4,5,6,7]

// example spread on object
const person = {
  name: 'Clif'
}
// copy old property and add new property
const newPerson = {
  ...person,
  age: '28'
}
console.log(newPerson);
// result [object Object] {age: 28, name: 'Clif'}


// example rest
const filter = (..args) => {
  return args.filter(el => el === 1)
}
console.log(filter(1,2,3));
// result [1]
