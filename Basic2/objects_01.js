const user = {
    name:"om",
    address:{
        picode:412211,
        city:"pune"
    }
}
const data1 = {
    url:"om.com",
    marks:90
}
const data2 = {
    email:"om@com",
    score:190
}

console.log(user.address.city)
console.log(user.name.address?.city)

const data3 = {...data1,...data2} // combine objects 
console.log(data3)


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.length)

const obj = {
    name:"om",
    email:"om@example",
    roll : 70
}


console.log(obj.email)
console.log(obj.name)
console.log(typeof obj.roll)


