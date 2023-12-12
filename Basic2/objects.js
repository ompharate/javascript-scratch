// singletone
// Object.create
// object literals
const jsUser = {
    name:"om",
    sirName:"pharate",
    isLoggedIn:false,
}

console.log(jsUser.name)
console.log(jsUser.sirName)
console.log(jsUser["isLoggedIn"])
//Object.freeze(jsUser) // to lock the object

jsUser.greeting = function  () {

    console.log("greeting")

}
jsUser.greetingTwo = function  () {

    console.log(`Hello  ${this.name}`)

}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())