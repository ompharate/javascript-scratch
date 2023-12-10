let arr  = [10,20,30,40,50,60,70,"eighty"]

console.log(arr)



let newArr = arr
newArr[0] = 100
console.log(arr) // 100
console.log(newArr) // 100 because of refrence

console.log(newArr.length) // 8
newArr.push(1000)
console.log(arr)
console.log(newArr)

console.log(newArr.includes(100)) // true
console.log(newArr.toString()) // converted to string
// splice returns the portion of the array and the splice manipulates the original array