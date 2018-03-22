var person = {
  name: 'Max',
  age: 22,
  greet: function () {
    console.log('Hello');
  }
}

// find properties
console.log('name' in myPerson)

// loop through all the properties
// find the key
for (var field in person) {
  console.log(person); // 'name', 'age', 'greet'
}
// find the value
for (var field in person) {
  console.log(person[field]); // 'max', 22, function(){console.log('Hello')}
}
