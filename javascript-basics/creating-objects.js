//creating objects

var myObj = {
  value1: 'a value',
  fn: function(){
    /// return something
  }
}

// can also create ojects like so
var country = new Object()
country.name = 'USA'

// like this
var house = Object.create(null)
house.size = 45

// constructor functions
var Person = function(){
  this.name = '',
  this.greet = function() {
    console.log('Hi my name is, ' + this.name + 'and I am ' + this.age + ' years old');
  }
}
var max = new Person()
