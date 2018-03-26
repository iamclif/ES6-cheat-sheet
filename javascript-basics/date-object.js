// The date object //
var today = new Date()
console.log(today.toString()) // Day Month Date Year Time Timezone

// set a specific date
var thisDate = new Date(2016, 5, 26)
// note: jan = 0 so 5 is June
console.log(thisDate) // Sunday June 26 2016 00:00:00 Timezone
console.log(thisDate.getDate()) // 26
console.log(thisDate.getDay()) // 0 or Sunday
