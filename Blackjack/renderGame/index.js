let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard

//Array of cards
let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out ALL the cards we have


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

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 6
    sum += card

    renderGame()
}