// built in objects and methods //
// setTimeout - method on the window object
setTimeout(thisFirstParamIsTheFunction, thisSecondParamIsTheTime)
setTimeout(function(){
  console.log('finished');
}, 1000)

// setInterval runs every x seconds
setInterval(functionHere, interval)
// stop the setInterval
var interval = setInterval(function(){
  console.log('ping');
}, 500)
setTimeout(function(){
  clearInterval(interval)
}, 2500)

// parser
var a = '5.10'
// tries to transform a string into a number
console.log(parsenInt(a)) // 5.10
var b = 'test'
console.log(parsenInt(b)) // NaN
// toFixed rounds number
console.log(a.toFixed()) // 5
console.log(a.toFixed(2)) // 5.10
var string = '  Any text        '
console.log(string.trim()) // 'Any text'
