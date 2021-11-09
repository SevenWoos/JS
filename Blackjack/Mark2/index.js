let sum = 0
let cards = []

let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

// Let's create a Player object to contain both these variables (playerName, playerChips)
// let playerName = "Per"
// let playerChips = 145

// 2. Create the player object. Give it two keys, name and chips, and set their values
let Player = {
    name: "Sven", 
    chips: 200,
    sayHello: function() {
        console.log("Ni hao!")
    }
}

Player.sayHello()

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

// 4. Render the player's name and chips in playerEl
let playerEl = document.getElementById("player-el")
playerEl.textContent = Player.name + ": $" + Player.chips

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

// Function that resets the game without  having to refresh the page
function restartGame() {
    sum = 0
    sumEl.textContent = "Sum: " 
    cardsEl.textContent = "Cards: "
    cards = []
}