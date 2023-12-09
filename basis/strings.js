const name = "om";
const repoCount = 50;

// console.log(name+repoCount); dont use this

console.log(name[0])
console.log(name.length);
console.log(name.__proto__)
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name) // because string is premative 
console.log(name.charAt(0))
console.log(name.indexOf('m'))
console.log(name.indexOf('k')) // not present thats why it will return -1

let str = "pharate"
const newString =  str.substring(0,2) // gives -1 length string
console.log(newString)

let anotherString = "ompharate ";
console.log(anotherString.trim())

const url = "http://om.com/op%20";
console.log(url.replace('%20','')) 
console.log(url.includes('%20'));

let oneString = "om-cha-pharate";
console.log(oneString.split('-')) // it'll return array


