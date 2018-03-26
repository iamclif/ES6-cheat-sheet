// functions //
function fn(){
  console.log('Hello')
}
fn() // 'Hello'

// ES6
// () hold any arguments needed
// () must be present if no arguments are passed.
// => the 'fat arrow' contains the function body.
var fn = () => {
  console.log('Hello')
}
// since there is only 1 line of code. you can remove the {}
var fn = () => console.log('Hello')
// but wait there is more.
// if you are returning something you can do this
var fn = () => 'Hello'
