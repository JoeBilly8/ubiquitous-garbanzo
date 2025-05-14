// Ubiquitous JS

//// String interpolation
const v = 64
console.log(`V=${v}`)

//// User input (on the backend)
const prompt = require('prompt-sync')()
const input = prompt('Enter a number: ')
console.log(`You entered: ${input}`)

//// Datatypes - Primitives
// string: '' "" ``
// boolean: true false
// number: either integer or float
// undefined: when you haven't assigned a value to a variable but you will later on
// null: explicitly set something as nothing
// BigInt: for very large numbers
// symbol: unique and immutable value

//// Variables

// var, let, const
var x = 'hello' // -> var is function scoped

// Convention is to use camelCase for variables
let camelCase = 'hello' 

// Convention is to use UPPER_SNAKE_CASE for constants
const CONSTANT = 'hello' // -> const is block scoped

// main differences between var, let, and const
// var is function scoped, let and const are block scoped
// block scoped means that the variable is only available within the block of code it is defined in EG:
if (true) {
    let blockScoped = 3;
}
console.log(blockScoped) // -> ReferenceError: blockScoped is not defined

// Whereas if you do the above with var, it will be available outside of the block (because it's function scoped)
// var is hoisted to the top of the function, so it will be available outside of the block
if (true) {
    var functionScoped = 3;
}
console.log(functionScoped) // -> 3