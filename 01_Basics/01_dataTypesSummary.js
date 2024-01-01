let score = "50"
console.log(typeof score) // string

let id = Symbol("1234")

let id2 = Symbol("1234")
if(id == id2) console.log("Equal");
else console.log("Not equal");
// console.log(typeof id) // symbol