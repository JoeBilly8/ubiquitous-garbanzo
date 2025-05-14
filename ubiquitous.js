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
// if its not inside a function, it will be available globally
if (true) {
    var functionScoped = 3;
}
console.log(functionScoped) // -> 3

// Hoisting example
// Hoisting is when a variable is declared at the top of the function, regardless of where it is defined
// This means that you can use the variable before it is defined, but it will be undefined until it is defined
function test() {
    console.log(x) // -> undefined
    var x = 5
    console.log(x) // -> 5
}
// Whereas with let and const, they are not hoisted to the top of the function, so you will get a ReferenceError if you try to access them before they are defined

//// Arithmetic operators
// + - * / % ** ++ --
// + is addition
// - is subtraction
// * is multiplication
// / is division
// % is modulus (remainder)
// ** is exponentiation
// ++ is increment
// -- is decrement


// With arithmetic operators, we can expect some weird behavior
// EG:
const z = 1
const y = '1'  
console.log(x + y) // -> 11 (string concatenation)
// This is because the + operator is overloaded, so it will try to convert the number to a string and then concatenate it
// This is called type coercion
// Type coercion is when JavaScript tries to convert a value to a different type
// EG:
const a = 1
const b = '1'
console.log(a == b) // -> true (loose equality)
// This is because == will try to convert the values to the same type before comparing them


//// Type Conversion
// Type conversion is when you explicitly convert a value to a different type
// EG:
const c = '2345.6';
const d = 2;

console.log(Number(c) + d) // -> 2347.6
// This is because Number() will convert the string to a number before adding it to the other number

// Can also use parseInt() and parseFloat() to convert strings to numbers
// Good for grabbing the int or float from a string EG if it has px or a currency symbol
// EG:
const e = '2345px';
const f = '2345.6$';
console.log(parseInt(e)) // -> 2345
console.log(parseFloat(e)) // -> 2345.6

// Can convert numbers to strings using String() or .toString()
// EG:
const g = 2345;
const h = 2345.6;
console.log(String(g) + String(2345.6)) // -> '23452345.6'
// Or
console.log(g.toString() + h.toString()) // -> '23452345.6'

//// Comparison operators
// == - loose equality - this will try to convert the values to the same type before comparing them
// EG:
const i = 1
const j = '1'
console.log(i == j) // -> true (loose equality)
// This is because == will try to convert the values to the same type before comparing them

// Another important thing to remember is that null and undefined are loosely equal to each other
// EG:
const k = null
const l = undefined
console.log(k == l) // -> true (loose equality)

// Another weird one is:
console.log("1, 2" == [1, 2]) // -> true (loose equality)
// This is because == will try to convert the array to a string before comparing it

// FOOTNOTE: A ton of bugs in JS are caused by this loose equality/inequality so try to avoid it


// === - strict equality - this will not try to convert the values to the same type before comparing them
// This is the preferred way to compare values in JavaScript - avoids all the weirdness of type coercion
// EG:
const m = 1
const n = '1'
console.log(m === n) // -> false (strict equality)
// This is because === will not try to convert the values to the same type before comparing them

// 


// != - loose inequality
// !== - strict inequality


//// Logical operators
// && - and
// || - or
// ! - not
// EG:
const o = true
const p = false
console.log(o && p) // -> false
console.log(o || p) // -> true
console.log(!o) // -> false

// Can get weird with types that are not boolean
// If we're not using boolean values with our logicial operators, we need to be careful, because we might get some unexpected results
// EG:
console.log(!false && "hello") // -> 'hello' (truthy value) - because !false is true, it returns the second value
