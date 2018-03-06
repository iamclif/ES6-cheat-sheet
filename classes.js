// classes are blueprints for javascript objects

// Classes
class Person {
  // property
  name = 'Clif'
  // method
  call = () => {}
}

// Usage
// similar to construtor function
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name);

// Inheritance
// similar to prototypes
class Person extends Master


// Example
class Person {
  constructor() {
    this.name = 'Clif'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
