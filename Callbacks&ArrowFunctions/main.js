// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

//spot check 2

// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

//spot check 3

// setInterval( function () {
//   console.log( new Date () )
// }, 1000)

//spot check 4

// const square = (number) => console.log(number * number)
// square(4)



// const getHypotenuse = (a, b) => {
//   const aSquared = a * a
//   const bSquared = b * b
//   const cSquared = aSquared + bSquared
//   return Math.sqrt(cSquared)
// }

// const hypoteneuese = getHypotenuse(3, 4) 
// console.log(hypoteneuese ) //prints 5


//spot check 5

// const getFormalTitle = (title , name) => title + name
// formalTitle = getFormalTitle("Madamme", " Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"



// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function () {

//       console.log("You are going to see the name in 3 seconds...")

//       setTimeout(() => { //this is the change
//           console.log("The name is: " + this.name)
//       }, 3000)

//   }
// }

// suspenseBuilder.displayName()


//exrec 1

// const pushPull = function(func){
//   func()
// }

// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

//exrec 2

// const getTime = function(func){
//   const time = new Date()
//   func(time)
// }

// const returnTime = function (time) {
//   alert('The current time is: ' + time)
// }

// getTime(returnTime)

//exrec 3

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData = function (data) {	    
//   console.log(data)
// }

// displayData(alert, logData, "I like to party")

//exrec 4

// const sum = (a , b , c) => a + b + c
// console.log(sum(1 , 2 , 3))

//exrec 5

// const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase()

// const b = capitalize("bOb") // returns Bob
// console.log(b)
// const t = capitalize("TAYLOR") // returns Taylor
// console.log(t)
// const f = capitalize("feliSHIA") // returns Felishia
// console.log(f)

