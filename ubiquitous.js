//////// Ubiquitous JS

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


//// Conditionals
// if, else if, else
if (true) {
    console.log('true')
} else if (false) {
    console.log('false')
} else {
    console.log('else')
}

// Unique things in JS
// If we only have one line in our if statement, we can omit the curly braces
if (true) console.log('true') // -> 'true'
// We can also use the ternary operator to do a one line if statement
// EG:
const q = true
const r = false
const cond = q ? 'true' : 'false' // -> 'true'

// switch statement
const value = 2
switch (value) {
    case 1:
        console.log('one')
        break
    case 2:
        console.log('two')
        break
    case 3:
        console.log('three')
        break
    default:
        console.log('default')
        break
}

// If we don't use break, it will fall through to the next case
// EG:
const value2 = 2
switch (value2) {
    case 1:
        console.log('one')
    case 2:
        console.log('two')
    case 3:
        console.log('three')
    default:
        console.log('default')
}
// This will print 'two' and 'three' and 'default' because it falls through to the next case
// This is called "fall through" and can be useful in some cases, but be careful with it

//// Arrays
const arr = [1, 2, 3, true] // Mutable - even if we use const, we can still change the contents of the array (because we're not changing the reference to the array, we're just changing the contents of the array)

const arr2 = new Array(5) // Creates an array of length 5, but all the values are undefined

const arr3 = Array.from('hello') // Creates an array from a string
console.log(arr3) // -> ['h', 'e', 'l', 'l', 'o']

arr3[0] = 'Y'
console.log(arr3) // -> ['Y', 'e', 'l', 'l', 'o']

console.log(arr3[arr3.length - 1]) // -> 'o' (last element of the array)

// If we assign to an index that is out of bounds, it will create a new element in the array 
// AND all the elements in between will be undefined
// EG:
arr3[10] = 'hello'
console.log(arr3) // -> ['Y', 'e', 'l', 'l', 'o', <5 empty items>, 'hello']
// This is because arrays are sparse in JavaScript, so we can have empty items in the array

// Pushing to an array
arr3.push('world') // Adds 'world' to the end of the array
console.log(arr3) // -> ['Y', 'e', 'l', 'l', 'o', <5 empty items>, 'hello', 'world']

// Popping from an array
arr3.pop() // Removes the last element of the array
console.log(arr3) // -> ['Y', 'e', 'l', 'l', 'o', <5 empty items>, 'hello']

// Shifting from an array
arr3.shift() // Removes the first element of the array
console.log(arr3) // -> ['e', 'l', 'l', 'o', <5 empty items>, 'hello']

// Unshifting to an array
arr3.unshift('Y') // Adds 'Y' to the beginning of the array
console.log(arr3) // -> ['Y', 'e', 'l', 'l', 'o', <5 empty items>, 'hello']

// Splicing an array
arr3.splice(2, 1) // Removes 1 element from index 2
console.log(arr3) // -> ['Y', 'e', 'l', 'o', <5 empty items>, 'hello']

// IndexOf
console.log(arr3.indexOf('l')) // -> 2 (first index of 'l')
console.log(arr3.lastIndexOf('l')) // -> 3 (last index of 'l')

// Includes
console.log(arr3.includes('l')) // -> true (does the array include 'l')
console.log(arr3.includes('x')) // -> false (does the array include 'x')

// Concat
const arr4 = [1, 2, 3]
const arr5 = [4, 5, 6]
const arr6 = arr4.concat(arr5) // Concatenates the two arrays
console.log(arr6) // -> [1, 2, 3, 4, 5, 6]
// This does not change the original arrays, it creates a new array

// Join
const arr7 = ['hello', 'world']
const str = arr7.join(' ') // Joins the array into a string with a space in between
console.log(str) // -> 'hello world'
// This does not change the original array, it creates a new string
// We can also use other characters to join the array
const str2 = arr7.join(',') // Joins the array into a string with a comma in between
console.log(str2) // -> 'hello,world'

// Slicing an array with adding elements
const arr8 = [1, 2, 3, 4, 5]
const arr9 = arr8.slice(1, 3) // Slices the array from index 1 to index 3 (not inclusive)
console.log(arr9) // -> [2, 3]


//// Array destructuring and spread operator
// Destructuring is when we take an array and assign the values to variables
const arr10 = [1, 2, 3]
const [a1, a2, a3] = arr10 // Destructuring the array
console.log(a1, a2, a3) // -> 1 2 3
// We can also use the spread operator to get the rest of the array
const [b1, ...rest] = arr10 // Destructuring the array and getting the rest of the array
console.log(b1, rest) // -> 1 [2, 3]
// We can also use the spread operator to create a new array with the values of the old array
const arr11 = [...arr10, 4, 5, 6] // Creates a new array with the values of arr10 and adds 4, 5, 6 to the end
console.log(arr11) // -> [1, 2, 3, 4, 5, 6]
// This is useful for creating a new array with the values of an old array without modifying the old array
// We can also use the spread operator to copy an array
const arr12 = [...arr10] // Creates a new array with the values of arr10
console.log(arr12) // -> [1, 2, 3]


// Loops
// While loop
while (true) {
    console.log('hello')
    break
}

do {
    console.log('hello')
} while (false)


// For loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Looping through an array
const arr13 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr13.length; i++) {
    console.log(arr13[i])
}

// Looping directly over the structure
for (let value of arr13) {
    console.log(value)
} // This will print each value in the array
// This is called a for-of loop and is useful for looping over arrays and other iterable objects

// If we want to get the index of the value as well, we can use the forEach method
arr13.forEach((value, index) => {
    console.log(value, index)
}) // This will print each value in the array and its index

// Or
for (let [index, value] of arr13.entries()) {
    console.log(index, value)
} // This will print each value in the array and its index

// continue keyword
// This will skip the current iteration and move on to the next one
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] === 3) {
        continue
    }
    console.log(arr13[i])
} // This will skip 3 and print the rest of the array

// break keyword
// This will break out of the loop
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] === 3) {
        break
    }
    console.log(arr13[i])
} // This will print 1 and 2 and then break out of the loop


//// Objects
const obj = {
    name: 'John',
    age: 30,
    isMarried: true,
    hobbies: ['reading', 'gaming'],
    address: {
        city: 'New York',
        state: 'NY'
    },
    sayHello: function() {
        console.log('Hello')
    }
}

obj.age = "tim" // This will change the age to 'tim'
console.log(obj.age) // -> 'tim'

// Add a new property to the object using dot notation
obj.email = 'email'
console.log(obj.email) // -> 'email'

// Also can use [] to access properties
obj['name'] = 'Jane' // This will change the name to 'Jane'

// Looping through an object
console.log(Object.values(obj)) // -> ['Jane', 'tim', true, Array(2), Object, ƒ]

// To get the keys of an object, we can use Object.keys()
console.log(Object.keys(obj)) // -> ['name', 'age', 'isMarried', 'hobbies', 'address', 'sayHello', 'email']

// Using a for-in loop to loop through an object
for (let key in obj) {
    console.log(key, obj[key]) // This will print the key and the value of the object
}

// So IN for an object but OF for an array 

const obj2 = {
    hairColour : 'brown',
    arr: [1, 2, 3]
}

const obj3 = {
    ...obj, // This will copy the properties of obj into obj3
    ...obj2, // This will copy the properties of obj2 into obj3
    name: 'John'
}
console.log(obj3) // -> {name: 'John', age: 'tim', isMarried: true, hobbies: Array(2), address: Object, hairColour: 'brown', arr: Array(3)}


// One thing to look out for when we're using nested objects and the spread operator because even though we're doing a deep copy of the object, the nested objects are still references to the original object
// So if we change the nested object, it will change the original object as well
// EG:
const obj4 = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY'
    }
}
const obj5 = {
    ...obj4
}
obj5.address.city = 'Los Angeles' // This will change the city of obj4 as well
console.log(obj4.address.city) // -> 'Los Angeles' (changed the original object)

// Basically just be careful with reference types 

// Destructuring objects
const obj6 = {
    name: 'John',
    age: 30,
    isMarried: true
}

const { name, age, isMarried } = obj6 // This will destructure the object and assign the values to the variables
console.log(name, age, isMarried) // -> 'John' 30 true
// We can also use the spread operator to get the rest of the object
const { name: name2, ...obj7 } = obj6 // This will destructure the object and assign the values to the variables
console.log(name2, obj7) // -> 'John' {age: 30, isMarried: true}


//// Shallow copy vs deep copy
// A shallow copy is when we create a new object, but the properties of the object are still references to the original object
// A deep copy is when we create a new object, and the properties of the object are new objects as well
// So if we change the properties of the new object, it will not change the original object
// EG:
const obj8 = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY'
    }
}
const obj9 = { ...obj8 } // This will create a shallow copy of the object
obj9.address.city = 'Los Angeles' // This will change the city of obj8 as well
console.log(obj8.address.city) // -> 'Los Angeles' (changed the original object)
// To create a deep copy, we can use JSON.parse(JSON.stringify(obj)) or use a library like lodash
// EG:
const obj10 = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY'
    }
}
const obj11 = JSON.parse(JSON.stringify(obj10)) // This will create a deep copy of the object
obj11.address.city = 'Los Angeles' // This will not change the city of obj10
console.log(obj10.address.city) // -> 'New York' (did not change the original object)
// This is because JSON.parse(JSON.stringify(obj)) will create a new object and all the properties of the object are new objects as well

/* Choosing between shallow and deep copy depends on the specific use case. 
If you need to modify nested objects independently, a deep copy is necessary. 
If you only need to modify the top-level object and don't mind sharing references to nested objects, a shallow copy can be more efficient.
*/


//// Sets
// A set is a collection of unique values
// It is similar to an array, but it does not allow duplicate values
const mySet = new Set() // Creates a new empty set
const mySet2 = new Set([1, 2, 3]) // Creates a new set with the values 1, 2, 3
mySet.add(1) // Adds 1 to the set
mySet.delete(1) // Deletes 1 from the set
mySet.has(1) // Checks if 1 is in the set
mySet.clear() // Clears the set
mySet.size // Gets the size of the set

for (let value of mySet2) {
    console.log(value) // This will print each value in the set
}


//// Maps
// A map is a collection of key-value pairs
// It is similar to an object, but it allows any type of key (not just strings)
const myMap = new Map() // Creates a new empty map
const myMap2 = new Map([['key1', 'value1'], ['key2', 'value2']]) // Creates a new map with the key-value pairs

myMap.set('key1', 'value10') // Sets the value of key1 to value10
myMap.delete('key1') // Deletes key1 from the map
myMap.get('key2') // Gets the value of key2
myMap.has('key1') // Checks if key1 exists in the map
myMap.clear() // Clears the map

// Looping through a map
for (let [key, value] of myMap2) {
    console.log(key, value) // This will print each key-value pair in the map
    if (key === 'key1') {
        console.log(value) // This will print the value of key1
    }
}

// Convert the map to an array
const arr14 = Array.from(myMap2) // Converts the map to an array of key-value pairs
console.log(arr14) // -> [['key1', 'value1'], ['key2', 'value2']]