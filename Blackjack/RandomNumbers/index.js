let randomNumber = Math.random()

console.log(randomNumber)

// we got 0.05, 0.16, 0.6

/* 

What does Math.random() do?

Your answer: It generates a random number between 0 and 1 (not inclusive of 1)

*/

//Create a dice function
let randomNumber2 = Math.random()*6
console.log(randomNumber2)

//Range is now 0-6, not including 6


// Flooring the number
let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)

/* 

What does Math.floor() do to positive numbers?

Your answer: Rounds the number down(removes the decimals)

*/

// DICE
let randomDiceNumber = Math.floor(Math.random()*6)

console.log(randomDiceNumber)

/* 

Write down all the possible values randomNumber can hold now!

 0,1,2,3,4,5


*/

// Try to modify the expression so that we get a range from 1 to 6
let diceNumber = Math.floor( Math.random() * 6 ) +1

console.log(diceNumber)

// for (let i = 0; i < 100; i++) {
//     let diceNumberLoop = Math.floor( Math.random() * 6 ) +1
//     console.log(diceNumberLoop)
// }

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomDiceNumberValue = Math.floor( Math.random() * 6 ) +1
    return randomDiceNumberValue
}

console.log(rollDice())