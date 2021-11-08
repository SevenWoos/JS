let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl

// let sumEl = document.getElementById("sum-el")

// Selecting the CSS Element dynamically by id
let sumEl = document.querySelector("#sum-el")

// Selecting the CSS Element dynamically by class
// let sumEl = document.querySelector(".sum-el")

// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent += " " + sum

    // 3. Render the cards on the page using this format -> "Cards: 10 4"
    cardsEl.textContent += " " + firstCard + " " + secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

