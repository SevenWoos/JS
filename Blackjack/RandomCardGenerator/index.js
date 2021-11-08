// WE ARE CALLING THE FUNCTION BEFORE IT HAS BEEN CREATED IN OUR CODE.
// FUNCTION DECLARATIONS ARE "HOISTED" to line 1!!!

// 2. Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard

//Array of cards
let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5
}


// Function calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "
    // render out ALL the cards we have using a for loop
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


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
    let card = getRandomCard()
    sum += card

    // Push the card to the cards array
    cards.push(card)
    
    renderGame()
}