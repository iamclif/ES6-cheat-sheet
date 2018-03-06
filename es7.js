//// Construtor
// ES6
constructor () {
  this.myProperty = 'value'
}
// ES7
myProperty = 'value'

//// Methods
// ES6
myMethod () {}
// ES7
myMethod = () => {}

//// Example ES6
class Human {
  construtor() {
    this.legs = 2
  }
  printLegs() {
    console.log(this.legs)
  }
}
class Person extends Human {
  super()// keyword will execute the inherited class
  constructor() {
    this.name = 'Clif'
  }
  printMyName() {
    console.log(this.name)
  }
}
const person = new Person()
person.printMyName()
person.printLegs()

//// Example ES7
class Human {
  // can remove this
  legs = 2
  printLegs = () => {
    // this must remain
    console.log(this.legs)
  }
}
class Person extends Human {
  // no longer need super()
  this.name = 'Clif'
  printMyName = () => {
    console.log(this.name)
  }
}
const person = new Person()
person.printMyName()
person.printLegs()
