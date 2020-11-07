//spot check 1

// const Family = function(){
//   let members = []
  
//   const birth = function(name){
//     members.push(name)
//     console.log(members)
//   } 
//    return birth
//   }
  
// const giveBirth = Family()

// giveBirth("yana")
// giveBirth("mishel")

//spot check 2

// const mathOperations = function () {
//   const add = function (x, y) {
//       return x + y;
//   }

//   const subtract = function (x, y) {
//       return x - y;
//   }

//   const multiply = function (x, y) {
//       return x * y;
//   }

//   const divide = function (x, y) {
//       return x / y;
//   }
//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
//   }
// }

// const m = mathOperations()
// console.log(m.add(13, 29))
// console.log(m.mult(1.75, 24))
// console.log(m.mult(7, m.div(36, 6)))




// const UsersModule = function () {
//   const _users = ['Aaron', 'Avi'];

//   const addUser = function (user) {
//       _users.push(user)
//   }

//   const listUsers = function () {
//       for (let user of _users) {
//           console.log(user)
//       }
//   }

//   return {
//       addUser: addUser,
//       listUsers: listUsers
//   }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()


//exrec 1

// const StringFormatter = function() {

//   const capitalizeFirst = function(string) {
//     let newString = string[0].toUpperCase()
//     newString += string.slice(1).toLowerCase()

//     return newString

//   }

//   const skewerCase = function(string) {
//     let newString = string.replace(/ / , "-")

//     return newString

//   }

//    return{
//     capitalizeFirst,
//     skewerCase
//   }
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

//exrec 2

// const Bank = function() {
//   let money = 500

//   const depositCash = function(cash){
//     money += cash
//   }

//   const checkBalance = function(){
//     console.log(money)
//   }
//    return{
//     deposit: depositCash,
//     showBalance: checkBalance
//   } 
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance()//should print 950



