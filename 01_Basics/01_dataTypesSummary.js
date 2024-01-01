let score = "50"
console.log(typeof score) // string

let id = Symbol("1234")

let id2 = Symbol("1234")
if(id == id2) console.log("Equal");
else console.log("Not equal");
// console.log(typeof id) // symbol


const heroes = ["Shaktiman", "Superman", "Batman"]

const obj = {
    name: "Shaktiman",
    age: 100,
}

console.log(obj.name)
console.log(obj.age)


const myFunction = function() {
    console.log("Hello Bhai")
}

console.log(typeof obj)
console.log(typeof heroes)