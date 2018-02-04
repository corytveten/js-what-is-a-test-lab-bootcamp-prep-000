// write your code below!
var name = "Susan"
var height = 37
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}

console.log("Hello, world!")

function sayHello() {
  console.log("Hello!")
}
sayHello()
function sayHelloToIsabel() {
  console.log("Hello, Isabel!")
}

function sayHelloToSofia() {
  console.log("Hello, Sofia!")
}

function SayHelloToBrendan() {
  console.log("Hello, Brendan!")
}

sayHelloToIsabel()
sayHelloToSofia()

function doSomething(thing) {
  console.log(thing)
}

doSomething("anything")

function add(x, y) {
  return x + y
}

add(1, 2)
