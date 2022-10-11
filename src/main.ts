import './style.css'
import randomInteger from './randomInteger'

// modules can export more than one thing

// NAMED exports
// Import the named export 'diagonalLength'
// imports the named export "square"
import { diagonalLength as pythagoreanLength, square } from './util'

const role = randomInteger(1, 6) + 1
console.log(`you just rolled a ${role}!`)

console.log(pythagoreanLength(4, 3))
console.log(`the square of 12 is ${square(12)}`)
