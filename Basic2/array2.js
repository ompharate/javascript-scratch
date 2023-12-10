const marvel_heros = ["irom","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

const final_heros = marvel_heros.concat(dc_heros)
console.log(final_heros)

console.log(marvel_heros+dc_heros) // string

// spread operator
 const allNewHeros = [...marvel_heros,...dc_heros]
 console.log(allNewHeros)

 console.log(Array.isArray("om"))
 console.log(Array.from("ompharate")) // convert to array
 