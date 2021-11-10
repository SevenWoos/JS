let sum = 0
let cards = []

let dealer_sum = 0
let dealer_cards = []

let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

let Player = {
    name: "You", 
    chips: 200,
    sayHello: function() {
        console.log("Ni hao!")
    }
}

Player.sayHello()

let playerEl = document.getElementById("player-el")
playerEl.textContent = Player.name + ": $" + Player.chips

let Dealer = {
    name: "Dealer", 
    chips: 200
}

let dealerEl = document.getElementById("dealer-el")
dealerEl.textContent = Dealer.name + ": $" + Dealer.chips

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let value = Math.floor(Math.random()*13)+1
    if (value === 1) {
        return 11
    } else if (value > 10) {
        return 10
    } else {
        return value
    }
}


// Function calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    //Array of cards
    cards = [firstCard, secondCard]
    sum += cards[0] + cards[1]

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

        Player.chips += 1000
        playerEl.textContent = Player.name + ": $" + Player.chips

    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// We want a stopping condition such that you can draw new cards once you bust.

// Only allow the player to get a new card if she IS alive and does NOT have Blackjack

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card

        cards.push(card)
        
        renderGame()
    } 

}

// Function that resets the game without having to refresh the page
function restartGame() {
    sum = 0
    sumEl.textContent = "Sum: " 
    cardsEl.textContent = "Cards: "
    cards = []
    hasBlackJack = false

    message = "Do you want to draw a new card?"
    messageEl.textContent = message

    startGame()
}