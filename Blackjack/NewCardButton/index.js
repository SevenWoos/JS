let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 6
    
    // 2. Add the new card to the sum variable
    sum += card

    // 3. Call startGame()
    startGame()
}