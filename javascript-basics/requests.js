// the request object.
// GET data
var http = new XMLHttpRequest()
var url = 'http://jsonplaceholder.typicode.com/posts'
var method = 'GET'

http.open(method, url)
http.onreadystatechange = function(){
  if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse(http.responseText)[0].body)
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log('error')
  }
}
http.send()

// POST data
var http = new XMLHttpRequest()
var url = 'http://jsonplaceholder.typicode.com/posts'
var method = 'POST'
var data = 'title=Post%20Title&body=Body'

http.open(method, url)
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
http.onreadystatechange = function(){
  if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
    console.log(JSON.parse(http.responseText))
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
    console.log('error')
  }
}
http.send(data)
